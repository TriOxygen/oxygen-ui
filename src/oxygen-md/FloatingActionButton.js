import React, { PropTypes, Component } from 'react';
import Ink from './Ink';
import { Shadow, Units } from './Styles';
import classNames from 'classnames';

const styles = oxygenCss({
  floatingActionButton: {
    border: 'none',
    display: 'inline-block',
    position: 'relative',
    fontWeight: 500,
    color: 'inherit',
    userSelect: 'none',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    outline: 'none',
    tapHighlightColor: 'transparent',
    textAlign: 'center',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    fontSize: `${Units.phone.button.fontSize}px`,
    cursor: 'pointer',
    width: `${Units.phone.floatingActionButton.size}px`,
    height: `${Units.phone.floatingActionButton.size}px`,
    lineHeight: `${Units.phone.floatingActionButton.size}px`,
    borderRadius: '50%',
    '&mini': {
      width: `${Units.phone.floatingActionButton.miniSize}px`,
      height: `${Units.phone.floatingActionButton.miniSize}px`,
      lineHeight: `${Units.phone.floatingActionButton.miniSize}px`,
    },
  },
});

class FloatingActionButton extends Component {

  static propTypes = {
    disabled: PropTypes.bool,
    mini: PropTypes.bool,
    primary: PropTypes.bool,
    theme: PropTypes.object,
    secondary: PropTypes.bool,
    link: PropTypes.bool,
    onTouchTap: PropTypes.func,
    href: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.node,
    children: PropTypes.node
  };

  state = {
    hover: false,
    active: false
  };

  static contextTypes = {
    theme: PropTypes.object
  };

  static defaultProps = {
    primary: true
  };

  getButtonStyles(theme) {
    const { disabled, primary, secondary } = this.props;
    const { hover, active } = this.state;
    let style;
    if (disabled) {
      style = {
        boxShadow: 'none',
        backgroundColor: theme.button.raised.disabled,
      };
    } else if (primary) {
      style = {
        boxShadow: hover ? Shadow[3] : Shadow[2],
        backgroundColor: active ? theme.primary[700].hex : hover ? theme.primary[600].hex : theme.primary[500].hex,
        color: active ? theme.primary[700].text.default : hover ? theme.primary[600].text.default : theme.primary[500].text.default,
      };
    } else if (secondary) {
      style = {
        boxShadow: hover ? Shadow[3] : Shadow[2],
        backgroundColor: active ? theme.secondary[700].hex : hover ? theme.secondary[600].hex : theme.secondary[500].hex,
        color: active ? theme.secondary[700].text.default : hover ? theme.secondary[600].text.default : theme.secondary[500].text.default,
      };
    } else {
      style = {
        boxShadow: hover ? Shadow[3] : Shadow[2],
        color: theme.text.default,
        backgroundColor: hover | active ? 'rgba(0, 0, 0, 0.1)' : theme.theme.card.hex,
      };
    }
    return style;
  }


  handleTouchTap = (event) => {
    const { disabled, onTouchTap, href } = this.props;
    if (!disabled && onTouchTap) {
      onTouchTap(href);
      event.preventDefault();
      event.stopPropagation();
    }
  };

  handleKeyPress = (event) => {
    const { keyCode } = event;
    if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
      this.handleTouchTap();
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
    const theme = this.props.theme || this.context.theme;
    const { disabled, children, link, mini, icon, ...other } = this.props;
    const ink = !disabled && <Ink />;
    const classes = classNames(styles.floatingActionButton, {
      [styles.mini]: mini
    });

    const props = {
      className: classes,
      disabled,
      style: this.getButtonStyles(theme),
      ...other,
      tabIndex: 0,
      onKeyPress: this.handleKeyPress,
      onTouchTap: this.handleTouchTap,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
    };

    const containerElement = link ? (disabled ? 'span' : 'a') : 'div';
    return React.createElement(containerElement, props, ink, icon, children);
  }
}

export default FloatingActionButton;
