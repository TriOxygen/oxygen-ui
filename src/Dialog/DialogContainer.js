import React, { PropTypes, Component } from 'react';
import Portal from '../Portal';
import Overlay from '../Overlay';
import Paper from '../Paper';
import { Units } from '../Styles';

const ESC = 27;

export default class DialogContainer extends Component {

  static propTypes = {
    children: PropTypes.node,
    top: PropTypes.number,
    y: PropTypes.number,
    opacity: PropTypes.number,
    onRequestClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
  };

  handleTap = () => {
    if (this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  };

  componentWillMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event) => {
    const { keyCode } = event;
    if (keyCode === ESC && this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  };

  stop = (event) => {
    if (this.props.onRequestOpen) {
      this.props.onRequestOpen();
    }
    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    const { children, top, y, opacity } = this.props;
    return (
      <Portal dialog>
        <Overlay
          onTouchTap={this.handleTap}
          key="dialog" onKeyup={this.handleKey}
          style={{ top: `${top}%`, opacity }}
        />
        <Paper
          className={css.container}
          onTouchTap={this.stop}
          style={{
            opacity,
            transform: `translate3d(0, ${y * Units.phone.keylineIncrement * 2 / 100}px, 0)`
          }}
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
    // marginTop: `${Units.phone.keylineIncrement * 2}px`,
    '@phone': {
      left: Units.phone.gutter.more,
      right: Units.phone.gutter.more
    },
    '@desktop': {
      left: '50%',
      marginLeft: `${-Units.phone.keylineIncrement * 5}px`,
      width: `${Units.desktop.keylineIncrement * 10}px`,
    }

  },
});
