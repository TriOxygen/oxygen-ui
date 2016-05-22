import React, { PropTypes, Component } from 'react';
import Ink from './Ink';
import { Units, Typography } from './Styles';
import classNames from 'classnames';

class FlatButton extends Component {
  static propTypes = {
    payload: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.array]),
    disabled: PropTypes.bool,
    dense: PropTypes.bool,
    mdColor: PropTypes.string,
    fullWidth: PropTypes.bool,
    link: PropTypes.bool,
    href: PropTypes.string,
    onTouchTap: PropTypes.func,
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    children: PropTypes.node
  };

  state = {
    active: false,
    hover: false
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
    mdColor: PropTypes.string
  };

  static defaultProps = {
    label: ''
  };

  getButtonStyles(theme) {
    const { disabled, mdColor } = this.props;
    const { mdTheme, mdColor: contextColor } = this.context;
    const colors = mdTheme.colors[mdColor || contextColor];
    const { hover, active } = this.state;
    let style;
    if (disabled) {
      style = {
        color: hover && active ? mdTheme.text.disabled : mdTheme.text.disabled,
      };
    } else if (colors) {
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

  componentDidMount() {
    if (this.props.autoFocus) {
      this._timer = setTimeout(() => {
        this._input.focus();
      }, 200);
    }
  }

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
      [styles.disabled]: disabled,
      [styles.fullWidth]: fullWidth
    });
    const props = {
      className: buttonClasses,
      disabled,
      style: this.getButtonStyles(),
      ...other,
      tabIndex: 0,
      ref: input => this._input = input,
      onKeyPress: this.handleKeyPress,
      onTouchTap: this.handleTouchTap,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
    };
    const containerElement = link ? (disabled ? 'span' : 'a') : 'div';
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
    color: 'inherit',
    userSelect: 'none',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    textAlign: 'center',
    outline: 'none',
    tapHighlightColor: 'transparent',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    overflow: 'hidden',
    cursor: 'pointer',
    lineHeight: `${Units.phone.button.minHeight}px`,
    fontSize: Typography.phone.button.fontSize,
    fontWeight: Typography.phone.button.fontWeight,
    minHeight: Units.phone.button.minHeight,
    minWidth: Units.phone.button.minWidth,
    padding: `0 ${Units.phone.gutter.mini}px`,
    borderRadius: Units.phone.borderRadius,
    position: 'relative',
    margin: 'auto 0',
    minWidth: Units.phone.button.minWidth,
    '@desktop': {
      minWidth: Units.desktop.button.minWidth,
      minHeight: Units.desktop.button.minHeight,
    },
    '&disabled': {
      cursor: 'default'
    },
    '&dense': {
      lineHeight: `${Units.phone.button.dense.minHeight}px`,
      minHeight: Units.phone.button.dense.minHeight,
      '@desktop': {
        lineHeight: `${Units.desktop.button.dense.minHeight}px`,
        minHeight: Units.desktop.button.dense.minHeight,
      },
    },
    '&fullWidth': {
      display: 'block'
    },
  },

});
