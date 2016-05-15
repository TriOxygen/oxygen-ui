import React, { PropTypes, Component } from 'react';
import Ink from './Ink';
import classNames from 'classnames';
import { Shadow, Typography, Units } from './Styles';

class RaisedButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    dense: PropTypes.bool,
    mdColor: PropTypes.string,
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
    mdTheme: PropTypes.object,
    mdColor: PropTypes.string
  };

  static defaultProps = {
    label: ''
  };

  getButtonStyles(theme) {
    const { disabled, mdColor, inversed } = this.props;
    const { mdTheme, mdColor: contextColor } = this.context;
    const colors = mdTheme.colors[mdColor || contextColor];
    const { hover, active } = this.state;
    let style;
    if (disabled) {
      style = {
        boxShadow: 'none',
        backgroundColor: mdTheme.button.raised.disabled,
        color: mdTheme.text.disabled,
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
      [styles.disabled]: disabled,
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
    lineHeight: `${Units.phone.button.minHeight}px`,
    fontSize: Typography.phone.button.fontSize,
    fontWeight: Typography.phone.button.fontWeight,
    minHeight: Units.phone.button.minHeight,
    minWidth: Units.phone.button.minWidth,
    padding: `0 ${Units.phone.gutter.mini}px`,
    borderRadius: Units.phone.borderRadius,
    margin: 'auto 0',
    boxSizing: 'border-box',
    '&disabled': {
      cursor: 'default'
    },
    ':hover': {
      boxShadow: Shadow[2],
      textDecoration: 'none',
    },
    ':focus': {
      boxShadow: Shadow[2]
    },
    '@desktop': {
      minWidth: Units.desktop.button.minWidth,
      minHeight: Units.desktop.button.minHeight,
    },
    '&dense': {
      minHeight: Units.phone.button.dense.minHeight,
      '@desktop': {
        minHeight: Units.desktop.button.dense.minHeight,
      },
    },
    '&fullWidth': {
      display: 'block',
    }
  }
});

export default RaisedButton;
