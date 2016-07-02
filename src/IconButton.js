import React, { PropTypes, Component } from 'react';
import Ink from './Ink';
import { Units } from './Styles';
import classNames from 'classnames';

class IconButton extends Component {

  static propTypes = {
    disabled: PropTypes.bool,
    dense: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    mdColor: PropTypes.string,
    className: PropTypes.string,
    hoverColor: PropTypes.string,
    children: PropTypes.node,
    link: PropTypes.bool,
    href: PropTypes.string,
    onTouchTap: PropTypes.func,
    payload: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.array]),
  };

  state = {
    hover: false,
    active: false
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  getButtonStyles() {
    const { mdTheme } = this.context;
    const { mdColor, disabled } = this.props;
    const { hover, active } = this.state;
    const colors = mdColor && mdTheme.colors[mdColor];
    return Object.assign({}, {
      color: disabled ? mdTheme.text.disabled : colors && colors[500].hex,
      backgroundColor: disabled ? 'transparent' : active ? mdTheme.button.flat.active : hover ? mdTheme.button.flat.hover : 'transparent'
    });
  }

  handleFocus = () => {
    if (!this.state.active) {
      this.setState({ active: true });
    }
  };

  handleBlur = () => {
    if (this.state.active) {
      this.setState({ active: false });
    }
  };

  handleMouseEnter = () => {
    if (!this.state.hover) {
      this.setState({ hover: true });
    }
  };

  handleMouseLeave = () => {
    if (this.state.hover) {
      this.setState({ hover: false });
    }
  };

  handleKeyPress = (event) => {
    const { keyCode } = event;
    if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
      this.handleTouchTap();
      event.preventDefault();
    }
  };

  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  handleTouchTap = (event) => {
    const { disabled, onTouchTap, payload, href } = this.props;
    if (!disabled && onTouchTap) {
      onTouchTap(payload, href);
      event.preventDefault();
      event.stopPropagation();
    }
  };

  render() {
    const { dense, disabled, children, className, link, mdColor, ...other } = this.props;
    const ink = !disabled && <Ink />;
    const buttonClasses = classNames(styles.iconButton, className, {
      [styles.dense]: dense,
      [styles.disabled]: disabled
    });
    const props = {
      ...other,
      className: buttonClasses,
      disabled,
      style: this.getButtonStyles(),
      onKeyPress: this.handleKeyPress,
      onTouchTap: this.handleTouchTap,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
    };
    const containerElement = link ? (disabled ? 'span' : 'a') : 'button';
    return React.createElement(containerElement, props, ink, children);
  }
}

export default IconButton;

export const styles = oxygenCss({
  'iconButton': {
    position: 'relative',
    borderRadius: '50%',
    border: 'none',
    display: 'inline-block',
    width: Units.phone.iconSize * 2,
    height: Units.phone.iconSize * 2,
    padding: Units.phone.iconSize / 2,
    color: 'inherit',
    userSelect: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    tapHighlightColor: 'transparent',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    cursor: 'pointer',
    overflow: 'hidden',
    verticalAlign: 'middle',
    margin: 'auto auto',
    '&disabled': {
      cursor: 'default'
    },
    '@desktop': {
      width: Units.desktop.iconSize * 2,
      height: Units.desktop.iconSize * 2,
    },
    '&dense': {
      width: Units.phone.iconSize * 1.5,
      height: Units.phone.iconSize * 1.5,
      '@desktop': {
        width: Units.desktop.iconSize * 1.5,
        height: Units.desktop.iconSize * 1.5,
      },
    },
  },
  'icon': {
    zIndex: 2
  }
});
