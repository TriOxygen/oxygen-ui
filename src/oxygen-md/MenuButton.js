import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Ink from './Ink';
import { Units } from './Styles';
import IconButton, { styles } from './IconButton';
import Portal from './Portal';
import Menu from './Menus/Menu';
import classNames from 'classnames';
import { Motion, spring } from 'react-motion';

class MenuButton extends IconButton {

  static propTypes = {
    disabled: PropTypes.bool,
    dense: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.node,
    link: PropTypes.bool,
    href: PropTypes.string,
    onTouchTap: PropTypes.func,
    theme: PropTypes.object
  };

  state = {
    hover: false,
    active: false,
    menu: false,
  };

  componentDidMount() {
    this._node = ReactDOM.findDOMNode(this);
  }

  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  handleTouchTap = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { left, top, width } = this._node.getBoundingClientRect();
    this.setState({ menu: !this.state.menu, left, top, width });
  };

  handleMenuClose = () => {
    this.setState({ menu: false });
  }

  handleKeyPress = event => {
    const { keyCode } = event;
    if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
      this.handleTouchTap(event);
      event.preventDefault();
    }
  };

  renderMenu() {
    const { children } = this.props;
    const { left, top, width, menu } = this.state;
    return (
      <Motion style={{ progress: spring( menu ? 1 : 0) }}>
        {interpolated => {
          const { progress } = interpolated;
          if (progress > 0) {
            return (
              <Portal positioned menu style={{ transform: `translate3d(${left - 256 + width}px, ${top}px, 0)` }}>
                <Menu onRequestClose={this.handleMenuClose} style={{ position: 'relative', width: 256, top: 32 - progress * 32, opacity: progress }}>
                  {children}
                </Menu>
              </Portal>
            );
          }
          return null;
        }}
      </Motion>
    );
  }

  render() {
    const { dense, disabled, children, link, icon, ...other } = this.props;
    const theme = this.props.theme || this.context.theme;
    const ink = !disabled && <Ink />;
    const buttonClasses = classNames(styles.iconButton, dense ? styles.dense : null);
    const menuElement = this.renderMenu();
    const props = {
      className: buttonClasses,
      disabled,
      style: this.getButtonStyles(theme),
      ...other,
      onKeyPress: this.handleKeyPress,
      onTouchTap: this.handleTouchTap,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
    };
    const containerElement = link ? (disabled ? 'span' : 'a') : 'button';
    return React.createElement(containerElement, props, icon, ink, menuElement);
  }
}

export default MenuButton;

