import React, { PropTypes, Component } from 'react';
import Portal from '../Portal';
import Overlay from '../Overlay';
import Paper from '../Paper';

const ESC = 27;

export default class BottomBarContainer extends Component {

  static propTypes = {
    position: PropTypes.number,
    onRequestClose: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  getStyle() {
    let { position } = this.props;
    if (position > 1) {
      position = 1;
    }
    return Object.assign({}, {
      transform: `translate3d(0, ${(1 - position)  * 100}%, 0)`,
    });
  }

  componentWillMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleTap = () => {
    const { onRequestClose } = this.props;
    onRequestClose && onRequestClose();
  };

  handleKey = (event) => {
    const { keyCode } = event;
    const { onRequestClose } = this.props;
    const escPressed = keyCode === ESC;
    escPressed && onRequestClose && onRequestClose();
  };

  render() {
    const { children, position, opacity, top, ...other } = this.props;

    return (
      <Portal dialog>
        <Overlay
          onTouchTap={this.handleTap}
          onKeyup={this.handleKey}
          style={{ top: `${top}%`, opacity }}
        />
        <Paper {...other} className={css.container} rounded={false} style={this.getStyle()}>
          {children}
        </Paper>
      </Portal>
    );
  }
}

const css = oxygenCss({
  container: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
