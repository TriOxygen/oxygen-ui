import React, { PropTypes, Component } from 'react';
import Portal from '../Portal';
import Overlay from '../Overlay';
import Paper from '../Paper';
import { Units } from '../Styles';

const ESC = 27;

export default class DrawerContainer extends Component {

  static propTypes = {
    position: PropTypes.number,
    width: PropTypes.number,
    children: PropTypes.node,
    right: PropTypes.bool,
    overlay: PropTypes.bool,
    closeOnEsc: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
  };

  static defaultProps = {
    overlay: true,
    right: false,
    closeOnEsc: true,
    width: Units.phone.keylineIncrement * 4
  };

  handleTap = () => {
    if (this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  };

  componentDidMount() {
    const { closeOnEsc } = this.props;
    if (closeOnEsc) {
      document.addEventListener('keyup', this.handleKey);
    }
  }

  componentWillUnmount() {
    const { closeOnEsc } = this.props;
    if (closeOnEsc) {
      document.removeEventListener('keyup', this.handleKey);
    }
  }

  handleKey = (event) => {
    const { keyCode } = event;
    if (keyCode === ESC && this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  };

  stop = (event) => {
    const { onRequestOpen } = this.props;
    if (onRequestOpen) {
      onRequestOpen();
    }
    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    const { overlay, width, right, children, ...other } = this.props;
    let { position } = this.props;
    if (position > 1) {
      position = 1;
    }
    const transform = right ? `translate3d(100vw,0,0) translateX(${position * -100}%)` : `translate3d(${(position - 1) * 100}%, 0, 0)`;
    const overlayPosition = position > 0 ? 0 : -100;
    return (
      <Portal menu>
        {overlay && <Overlay
          center={false}
          onTouchTap={this.handleTap}
          onKeyup={this.handleKey}
          style={{ opacity: position, top: `${overlayPosition}%` }}
        />}
        <Paper
          {...other}
          rounded={false}
          style={{ width, transform }}
          className={css.container}
          onTouchTap={this.stop}
        >
          {children}
        </Paper>
      </Portal>
    );
  }
}

const css = oxygenCss({
  container: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    // height: Units.phone.keylineIncrement * 6,
  },
});