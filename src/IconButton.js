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
    color: PropTypes.string,
    className: PropTypes.string,
    hoverColor: PropTypes.string,
    children: PropTypes.node,
    link: PropTypes.bool,
    href: PropTypes.string,
    onTouchTap: PropTypes.func,
    theme: PropTypes.object
  };

  state = {
    hover: false,
    active: false
  };

  static contextTypes = {
    theme: PropTypes.object
  };

  getButtonStyles(theme) {
    const { disabled, primary, secondary } = this.props;
    const { hover, active } = this.state;
    let style;
    if (disabled) {
      style = {
      };
    } else if (primary) {
      style = {
        backgroundColor: active ? theme.button.flat.active : hover ? theme.button.flat.hover : null,
      };
    } else if (secondary) {
      style = {
        backgroundColor: active ? theme.button.flat.active : hover ? theme.button.flat.hover : null,
      };
    } else {
      style = {
        backgroundColor: active? theme.button.flat.active : hover ? theme.button.flat.hover : null
      };
    }
    return style;
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
    const { disabled, onTouchTap, href } = this.props;
    if (!disabled && onTouchTap) {
      onTouchTap(href);
      event.preventDefault();
      event.stopPropagation();
    }
  };

  render() {
    const { dense, disabled, children, className, link, ...other } = this.props;
    const theme = this.props.theme || this.context.theme;
    const ink = !disabled && <Ink />;
    const buttonClasses = classNames(styles.iconButton, className, dense ? styles.dense : null);
    const props = {
      ...other,
      className: buttonClasses,
      disabled,
      style: this.getButtonStyles(theme),
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
