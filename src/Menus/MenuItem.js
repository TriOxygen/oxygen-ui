import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { mergeStyles, Units } from '../Styles';
import Ink from '../Ink';
import classNames from 'classnames';

const styles = oxygenCss({
  'icon': {
    marginRight: `${Units.phone.menu.padding}px`,
    '@desktop': {
      marginRight: `${Units.desktop.menu.padding}px`
    }
  },
  'root': {
    userSelect: 'none',
    display: 'block',
    outline: 'none',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderStyle: 'none none solid none',
    borderWidth: 1,
    borderColor: 'transparent',
    padding: `0 ${Units.phone.menu.item.padding}px`,
    lineHeight: `${Units.phone.menu.item.height}px`,
    height: `${Units.phone.menu.item.height}px`,
    '@desktop': {
      lineHeight: `${Units.desktop.menu.item.height}px`,
      height: `${Units.desktop.menu.item.height}px`,
    },
    '&dense': {
      lineHeight: `${Units.phone.menu.item.dense.height}px`,
      height: `${Units.phone.menu.item.dense.height}px`,
      '@desktop': {
        lineHeight: `${Units.desktop.menu.item.dense.height}px`,
        height: `${Units.desktop.menu.item.dense.height}px`,
      }
    }
  },
});

class MenuItem extends Component {

  static propTypes = {
    payload: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.array]),
    mdColor: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    dense: PropTypes.bool,
    href: PropTypes.string,
    active: PropTypes.bool,
    icon: PropTypes.node,
    label: PropTypes.node,
    divider: PropTypes.bool,
    autoFocus: PropTypes.bool,
    onTouchTap: PropTypes.func,
    style: PropTypes.object,
    children: PropTypes.node
  };

  static defaultProps = {
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
    mdColor: PropTypes.string
  };

  state = {
    hover: false,
    hasFocus: false
  };

  getStyle() {
    const { mdTheme,  mdColor: contextColor } = this.context;
    const { hover, hasFocus } = this.state;
    const { active, divider, mdColor, style } = this.props;
    const colors = mdTheme.colors[mdColor || contextColor || mdTheme.primary];
    return mergeStyles(
      hasFocus ? {
        backgroundColor: colors[200].hex,
        color: colors[200].text.default
      } : null,
      hover ? {
        backgroundColor: colors[100].hex,
        color: colors[100].text.default
      } : null,
      divider ? {
        borderColor: mdTheme.text.divider,
      } : null,
      active ? {
        backgroundColor: colors[700].hex,
        color: colors[700].text.default
      } : null,
      style
    );
  }

  getIconStyle() {
    const { mdTheme: { units } } = this.context;
    return mergeStyles(styles.icon, {
      marginRight: units.menu.padding
    });
  }

  handleMouseEnter = () => {
    const { disabled } = this.props;
    if (!disabled) {
      this.setState({ hover: true });
    }
  };

  handleMouseLeave = () => {
    const { disabled } = this.props;
    if (!disabled) {
      this.setState({ hover: false });
    }
  };

  handleTouchTap = (event) => {
    const { disabled, payload, label, onTouchTap, href } = this.props;
    if (!disabled && onTouchTap) {
      event.preventDefault();
      event.stopPropagation();
      if (href) {
        onTouchTap(href, label, event);
      } else {
        onTouchTap(payload, label, event);
      }
    }
  };

  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  handleFocus = () => {
    if (!this.state.hasFocus) {
      this.setState({ hasFocus: true });
    }
  };

  handleBlur = () => {
    if (this.state.hasFocus) {
      this.setState({ hasFocus: false });
    }
  };

  componentDidMount() {
    if (this.props.autoFocus) {
      this._timer = setTimeout(() => {
        ReactDOM.findDOMNode(this).focus();
      }, 200);
    }
  }

  componentWillUnmount() {
    if (this._timer) {
      clearTimeout(this._timer);
    }
  }

  handleKeyPress = event => {
    const { keyCode } = event;
    if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
      this.handleTouchTap(event);
      event.preventDefault();
    }
  };

  render() {
    const { disabled, payload, divider, children, icon, dense, href, label, className, ...other } = this.props;
    let iconElement;
    let tabIndex;
    if (icon) {
      iconElement = React.cloneElement(icon, { className: styles.icon });
    }
    const rootClasses = classNames(styles.root, className, {
      [styles.dense]: dense,
    });

    if (!disabled) {
      tabIndex = 0;
    }
    const props = {
      ...other,
      onTouchTap: this.handleTouchTap,
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onKeyPress: this.handleKeyPress,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      style: this.getStyle(),
      tabIndex: tabIndex,
      className: rootClasses,
    };

    const containerElement = href ? (disabled ? 'span' : 'a') : 'div';
    return React.createElement(containerElement, props, iconElement, <Ink />, label, children);
  }
}

export default MenuItem;
