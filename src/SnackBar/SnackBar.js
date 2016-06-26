import React, { PropTypes, Component } from 'react';
import { Motion, spring } from 'react-motion';
import SnackBarContainer from './SnackBarContainer';

export default class SnackBar extends Component {

  static propTypes = {
    message: PropTypes.string,
    time: PropTypes.number,
    timeout: PropTypes.number,
    onRequestNext: PropTypes.func,
  };

  static defaultProps = {
    timeout: 2500
  };

  state = {
    open: false
  };

  handleRequestNext = () => {
    if (this.props.onRequestNext) {
      this.props.onRequestNext();
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.time != nextProps.time && nextProps.time) {
      this.show();
    }
  }

  hide = () => {
    this.setState({ open: false });
  };

  show = () => {
    const { timeout } = this.props;
    this.setState({ open: true });
    this._timer = setTimeout(() => {
      this._timer = null;
      this.hide();
    }, timeout);
  };

  componentWillUnmount() {
    if (this._timer) {
      clearTimeout(this._timer);
    }
  }

  componentDidMount() {
    if (this.props.message) {
      this.show();
    }
  }

  render() {
    const { open } = this.state;

    return (
      <Motion style={{ position: spring(open ? 1 : 0, { stiffness: 300, damping: 25 }) }}>
        {interpolated => {
          if (interpolated.position > 0) {
            return <SnackBarContainer {...this.props} {...interpolated} onRequestClose={this.hide} onRequestNext={this.handleRequestNext} />;
          }
          return null;
        }}
      </Motion>
    );
  }
}