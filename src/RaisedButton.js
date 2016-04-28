import React, { PropTypes, Component } from 'react';
import Ink from './Ink';
import classNames from 'classnames';
import { Shadow, Units } from './Styles';

class RaisedButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    dense: PropTypes.bool,
    color: PropTypes.string,
    fullWidth: PropTypes.bool,
    label: PropTypes.string,
    link: PropTypes.bool,
    href: PropTypes.string,
    onTouchTap: PropTypes.func,
    children: PropTypes.node,
    inversed: PropTypes.bool
  };

  state = {
    hover: false,
    active: false,
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  static defaultProps = {
    label: ''
  };

  getButtonStyles(theme) {
    const { disabled, color, inversed } = this.props;
    const { mdTheme } = this.context;
    const colors = color && mdTheme.colors[color];
    const { hover, active } = this.state;
    let style;
    if (disabled) {
      style = {
        boxShadow: 'none',
        backgroundColor: mdTheme.button.raised.disabled,
      };
    } else if (colors) {
      style = inversed ? {
        color: active ? colors[700].hex : hover ? colors[600].hex : colors[500].hex,
        backgroundColor: active ? colors[700].text.default : hover ? colors[600].text.default : colors[500].text.default,
      } : {
        backgroundColor: active ? colors[700].hex : hover ? colors[600].hex : colors[500].hex,
        color: active ? colors[700].text.default : hover ? colors[600].text.default : colors[500].text.default,
      };
    } else {
      style = inversed ? {
        backgroundColor: mdTheme.text.default,
        color: hover | active ? 'rgba(0, 0, 0, 0.1)' : mdTheme.theme.card.hex,
      } : {
        color: mdTheme.text.default,
        backgroundColor: hover | active ? 'rgba(0, 0, 0, 0.1)' : mdTheme.theme.card.hex,
      };
    }
    return style;
  }

  handleTouchTap = (event) => {
    const { disabled, onTouchTap, href } = this.props;
    if (!disabled && onTouchTap) {
      event.preventDefault();
      event.stopPropagation();
      onTouchTap(href, event);
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

  render() {
    const theme = this.props.theme || this.context.theme;
    const { link, disabled, fullWidth, dense, label, children, ...other } = this.props;
    const ink = !disabled && <Ink />;
    const buttonClasses = classNames(styles.raisedButton, {
      [styles.dense]: dense,
      [styles.fullWidth]: fullWidth
    });
    const props = {
      className: buttonClasses,
      disabled,
      style: this.getButtonStyles(theme),
      ...other,
      tabIndex: 0,
      onKeyPress: this.handleKeyPress,
      onTouchTap: this.handleTouchTap,
      onClick: this.handleClick,
    };
    const containerElement = link ? (disabled ? 'span' : 'a') : 'div';
    return React.createElement(containerElement, props, ink, children, label);
  }
}

const styles = oxygenCss({
  raisedButton: {
    '+raisedButton': {
      marginLeft: Units.phone.gutter.mini
    },
    border: 'none',
    display: 'inline-block',
    fontWeight: 600,
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: 'rgba(158, 158, 158, 0.2)',
    color: 'inherit',
    overflow: 'hidden',
    userSelect: 'none',
    position: 'relative',
    textTransform: 'uppercase',
    outline: 'none',
    tapHighlightColor: 'transparent',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    cursor: 'pointer',
    boxShadow: Shadow[1],
    minHeight: `${Units.phone.button.height}px`,
    lineHeight: `${Units.phone.button.height}px`,
    padding: `0 ${Units.phone.gutter.mini}px`,
    borderRadius: Units.phone.borderRadius,
    fontSize: `${Units.phone.button.fontSize}px`,
    minWidth: Units.phone.button.width,
    margin: 'auto 0',
    boxSizing: 'border-box',
    ':hover': {
      boxShadow: Shadow[2],
      textDecoration: 'none',
    },
    ':focus': {
      boxShadow: Shadow[2]
    },
    '@desktop': {
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
      display: 'block',
    }
  }
});

export default RaisedButton;
