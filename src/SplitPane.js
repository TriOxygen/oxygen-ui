import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring } from 'react-motion';
import { Units } from './Styles';
import Paper from './Paper';

class SplitPane extends Component {
  state = {
    hasChild: !!this.props.children,
  };

  static propTypes = {
    children: PropTypes.node,
    leftComponent: PropTypes.node,
    onRest: PropTypes.func,
    leftWidth: PropTypes.number,
  };

  static defaultProps = {
    leftWidth: Units.phone.keylineIncrement * 10,
  };

  componentWillReceiveProps(nextProps) {
    const hasChild = !!nextProps.children;
    if (this.state.hasChild !== hasChild) {
      this.setState({
        hasChild,
      });
    }
  }

  componentDidMount() {
    this._node = ReactDOM.findDOMNode(this);
    const { width } = this._node.getBoundingClientRect();
    this._width = width;
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { width } = this._node.getBoundingClientRect();
    const { hasChild } = this.state;
    const { onRest } = this.props;
    this._width = width;
    this.forceUpdate();
    onRest && onRest(hasChild);
  }

  handleRest = () => {
    const { onRest } = this.props;
    const { hasChild } = this.state;
    onRest && onRest(hasChild);
  }

  render() {
    const { children, leftComponent } = this.props;
    const { hasChild } = this.state;
    const width = this._width;
    return (
      <Motion onRest={this.handleRest} style={{ progress: spring(hasChild ? 1 : 0, { stiffness: 300, damping: 25, precision: 0.01 }) }}>
        {interpolated => {
          let leftStyle, rightStyle;
          const deficit = ( width - this.props.leftWidth) * interpolated.progress;
          if (width) {
            leftStyle = {
              width: width - deficit
            };
            rightStyle = {
              width: deficit
            };
          } else {
            if (hasChild) {
              leftStyle = {
                width: this.props.leftWidth
              };
              rightStyle = {
                left: this.props.leftWidth
              };
            } else {
              leftStyle = {
                right: 0
              };
              rightStyle = {
                width: 0
              };

            }
          }
          return (
            <div className={css.root} style={{ overflow: interpolated.progress ? 'hidden' : null }}>
              <div className={css.left} style={leftStyle}>
                {leftComponent}
              </div>
              {hasChild && <Paper rounded={false} className={css.right} style={rightStyle}>
                {children}
              </Paper>}
            </div>
          );
        }}
      </Motion>
    );
  }
}

const css = oxygenCss({
  root: {
    position: 'relative',
    height: '100%',
  },
  left: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    overflow: 'auto',
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    overflow: 'auto',
  }
});

export default SplitPane;
