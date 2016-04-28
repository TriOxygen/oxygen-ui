import React, { PropTypes, Component } from 'react';
import Ink from './Ink';
import { Units } from './Styles';
import classNames from 'classnames';

class FlatButton extends Component {
  static propTypes = {
    payload: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.array]),
    disabled: PropTypes.bool,
    dense: PropTypes.bool,
    color: PropTypes.string,
    fullWidth: PropTypes.bool,
    link: PropTypes.bool,
    href: PropTypes.string,
    onTouchTap: PropTypes.func,
    label: PropTypes.string,
    children: PropTypes.node
  };

  state = {
    active: false,
    hover: false
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  static defaultProps = {
    label: ''
  };

  getButtonStyles(theme) {
    const { disabled, color } = this.props;
    const { mdTheme } = this.context;
    const colors = color && mdTheme.colors[color];
    const { hover, active } = this.state;
    let style;
    if (disabled) {
      style = {
        color: hover && active ? mdTheme.text.disabled : mdTheme.text.disabled,
      };
    } else if (color) {
      style = {
        color: active ? colors[700].hex : hover ? colors[600].hex : colors[500].hex,
        backgroundColor: active ? mdTheme.button.flat.active : hover ? mdTheme.button.flat.hover : null,
      };
    } else {
      style = {
        color: mdTheme.text.default,
        backgroundColor: active? mdTheme.button.flat.active : hover ? mdTheme.button.flat.hover : null
      };
    }
    return style;
  }

  handleTouchTap = (event) => {
    const { disabled, onTouchTap, payload, href } = this.props;
    if (!disabled && onTouchTap) {
      onTouchTap(payload || href);
      event.preventDefault();
      event.stopPropagation();
    }
  };

  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  handleKeyPress = (event) => {
    const { keyCode } = event;
    if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
      this.handleTouchTap(event);
      event.preventDefault();
    }
  };

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

  render() {
    const { link, disabled, fullWidth, dense, label, children, ...other } = this.props;
    const ink = !disabled && <Ink />;
    const buttonClasses = classNames(styles.flatButton, {
      [styles.dense]: dense,
      [styles.fullWidth]: fullWidth
    });
    const props = {
      className: buttonClasses,
      disabled,
      style: this.getButtonStyles(),
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
    return React.createElement(containerElement, props, ink, children, label);
  }

}

export default FlatButton;

const styles = oxygenCss({
  flatButton: {
    '+flatButton': {
      marginLeft: Units.phone.gutter.mini
    },
    border: 'none',
    display: 'inline-block',
    fontWeight: 500,
    color: 'inherit',
    userSelect: 'none',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    outline: 'none',
    tapHighlightColor: 'transparent',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    overflow: 'hidden',
    cursor: 'pointer',
    minHeight: `${Units.phone.button.height}px`,
    lineHeight: `${Units.phone.button.height}px`,
    padding: `0 ${Units.phone.gutter.mini}px`,
    borderRadius: Units.phone.borderRadius,
    fontSize: `${Units.phone.button.fontSize}px`,
    position: 'relative',
    margin: 'auto 0',
        // margin: `0 ${Units.phone.gutter.mini}px`,
    minWidth: Units.phone.button.width,
    '@desktop': {
      // margin: `0 ${Units.desktop.gutter.mini}px`,
      minWidth: Units.desktop.button.width,
      minHeight: `${Units.desktop.button.height}px`,
      lineHeight: `${Units.desktop.button.height}px`,
      padding: `0 ${Units.desktop.gutter.mini}px`,
      borderRadius: Units.desktop.borderRadius,
      fontSize: `${Units.desktop.button.fontSize}px`,
    },
    '&dense': {
      minHeight: `${Units.phone.button.dense.height}px`,
      lineHeight: `${Units.phone.button.dense.height}px`,
      '@desktop': {
        minHeight: `${Units.desktop.button.dense.height}px`,
        lineHeight: `${Units.desktop.button.dense.height}px`
      },
    },
    '&fullWidth': {
      display: 'block'
    },
  },

});
