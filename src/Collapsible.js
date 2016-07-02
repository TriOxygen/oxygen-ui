import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';

class Collapsible extends Component {
  static propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
  };

  static defaultProps = {
    open: true
  };

  _mount = true;

  state = {
    height: 0,
  }

  componentDidMount() {
    this._mount = false;
    const height = this._content.offsetHeight;
    this.setState({ height }); //eslint-disable-line react/no-did-mount-set-state
  }

  componentWillReceiveProps(nextProps) {
    const { open } = nextProps;
    if (nextProps.open !== this.props.open) {
      const height = this._content.offsetHeight;
      if (open) {
        this.setState({ height });
      } else {
        this.setState({ height: 0 });
      }
    }
    if (nextProps.children !== this.props.children && nextProps.open) {
      this.setState({ height: this._content.offsetHeight });
    }
  }

  checkChange = () => {
    const { open } = this.props;
    if (open) {
      const { height } = this.state;
      if (this._content.offsetHeight !== height) {
        this.setState({ height: this._content.offsetHeight });
      }
    }
  }

  componentDidUpdate() {
    this.checkChange();
  }

  render() {
    const { children, open } = this.props;
    const { height } = this.state;
    if (this._mount) {
      return (
        <div ref={_wrapper => this._wrapper = _wrapper} style={{ height: open ? 'auto' : 0 }}>
          <div ref={_content => this._content = _content}>
            {children}
          </div>
        </div>
      );
    }
    return (
      <Motion style={{ height: spring(open ? height : 0, { stiffness: 300, damping: 25, precision: 0.01 })}}>
        { interpolated => {
          return (
            <div ref={_wrapper => this._wrapper = _wrapper} style={{ height: interpolated.height }}>
              <div ref={_content => this._content = _content} onKeyUp={this.checkChange}>
                {children}
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}

export default Collapsible;
