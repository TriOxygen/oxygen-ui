import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Paper from '../Paper';
import { Units } from '../Styles';

const ESC = 27;

class Menu extends Component {

  static propTypes = {
    children: PropTypes.node,
    closeOnEsc: PropTypes.bool,
    padded: PropTypes.bool,
    color: PropTypes.string,
    onMenuItemTap: PropTypes.func,
    onRequestClose: PropTypes.func
  };

  static defaultProps = {
    closeOnEsc: true,
    padded: true,
  };

  static contextTypes = {
    theme: PropTypes.object
  };

 static childContextTypes = {
    color: PropTypes.string,
  };

  getChildContext() {
    return {
      color: this.props.color
    }
  }

  isDescendant(parent, child) {
   var node = child.parentNode;
   while (node != null) {
     if (node == parent) {
       return true;
     }
     node = node.parentNode;
   }
   return false;
  }

  onMenuItemTap = (furtherTap, payload, label) => {
    const { onMenuItemTap } = this.props;
    if (furtherTap) {
      furtherTap(payload, label);
    }
    onMenuItemTap && onMenuItemTap(payload, label);
    if (this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  };

  handleKey = (event) => {
    const { keyCode } = event;
    const { onRequestClose } = this.props;
    onRequestClose && keyCode === ESC && onRequestClose();
  };

  componentDidMount() {
    const { closeOnEsc, onRequestClose } = this.props;
    if (onRequestClose) {
      this._node = ReactDOM.findDOMNode(this);
      document.body.addEventListener('touchstart', this.onBodyTouchStart);
      document.body.addEventListener('mousedown', this.onBodyTouchStart);
    }
    if (closeOnEsc) {
      document.addEventListener('keyup', this.handleKey);
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('touchstart', this.onBodyTouchStart);
    document.body.removeEventListener('mousedown', this.onBodyTouchStart);
  }

  onBodyTouchStart = event => {
    if (!this.isDescendant(this._node, event.target)) {
      if (this.props.onRequestClose) {
        this.props.onRequestClose();
      }
    }
  };

  render() {
    const { children, color, padded, ...other } = this.props;
    return (
      <Paper {...other} className={padded && css.padded || null}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, { onTouchTap: this.onMenuItemTap.bind(this, child.props.onTouchTap ) })
        })}
      </Paper>
    );
  }
}

const css = oxygenCss({
  padded: {
    padding: `${Units.phone.gutter.mini}px 0`,
  }
});

export default Menu;
