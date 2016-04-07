import React, { PropTypes, Component } from 'react';
import { Motion, spring } from 'react-motion';
import DrawerContainer from './DrawerContainer';

export default class Drawer extends Component {

  state = {
    position: this.props.position
  };

  static propTypes = {
    right: PropTypes.bool,
    children: PropTypes.node,
    position: PropTypes.number,
    onRequestClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
  };

  static defaultProps = {
    position: 0,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.position !== this.state.position) {
      this.setState({ position: nextProps.position });
    }
  }

  handleRequestOpen = () => {
    const { onRequestOpen } = this.props;
    const { position } = this.state;
    if (position < 1 && onRequestOpen) {
      onRequestOpen();
    }
  };

  handleRequestClose = () => {
    const { onRequestClose } = this.props;
    const { position } = this.state;
    if (position > 0 && onRequestClose) {
      onRequestClose();
    }
  };

  componentDidMount() {
    document.body.addEventListener('touchstart', this.onBodyTouchStart);
  }

  onBodyTouchMove = event => {
    const { right } = this.props;
    const deltaX = right ? this.touchStartX - event.touches[0].pageX : event.touches[0].pageX - this.touchStartX;
    const position = deltaX > 500 ? 1 : deltaX / 500;
    if (this.state.position === 0 && deltaX < 0 || this.state.position === 1 && deltaX > 0) {
      return;
    }
    if (position > 0.5 && deltaX > 0 && this.props.onRequestOpen) {
      this.touchStartX = event.touches[0].pageX;
      this.touchStartY = event.touches[0].pageY;
      this.props.onRequestOpen();
    } else if (position < 0.5 && deltaX < 1 && this.props.onRequestClose) {
      this.touchStartX = event.touches[0].pageX;
      this.touchStartY = event.touches[0].pageY;
      this.props.onRequestClose();
    } else if (Math.abs(position - this.state.position) > 0.1) {
      this.setState({ position });
    }
  };

  onBodyTouchEnd = event => {
    const { position } = this.state;
    document.body.removeEventListener('touchmove', this.onBodyTouchMove);
    document.body.removeEventListener('touchend', this.onBodyTouchEnd);
    document.body.removeEventListener('touchcancel', this.onBodyTouchEnd);
    if (position < 0.5 && this.props.position === 0) {
      this.setState({ position: 0 });
    }
  };

  onBodyTouchStart = event => {
    const { right } = this.props;

    this.touchStartX = event.touches[0].pageX;
    this.touchStartY = event.touches[0].pageY;
    if (this.state.position === 0 && ((!right && this.touchStartX > 100) || (right && this.touchStartX + 100 < window.innerWidth) )) {
      return;
    }

    document.body.addEventListener('touchmove', this.onBodyTouchMove);
    document.body.addEventListener('touchend', this.onBodyTouchEnd);
    document.body.addEventListener('touchcancel', this.onBodyTouchEnd);
  };

  render() {
    const { children, ...other } = this.props;
    const { position } = this.state;
    return (
      <Motion
        style={{
          position: spring(position, { stiffness: 300, damping: 25, precision: 0.01 }),
        }}
      >
        {interpolated => {
          if (interpolated.position > 0) {
            return <DrawerContainer {...other} onRequestClose={this.handleRequestClose} onRequestOpen={this.handleRequestOpen} {...interpolated}>{children}</DrawerContainer>;
          }
          return null;
        }}
      </Motion>
    );
  }
}