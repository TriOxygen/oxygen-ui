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
    mdColor: PropTypes.string,
    link: PropTypes.bool,
    onTouchTap: PropTypes.func,
    href: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.node,
    children: PropTypes.node,
    inversed: PropTypes.bool
  };

  state = {
    hover: false,
    active: false
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
    mdColor: PropTypes.string
  };

  static defaultProps = {
    primary: true
  };

  getButtonStyles() {
    const { inversed, disabled, mdColor } = this.props;
    const { mdTheme, mdColor: contextColor } = this.context;
    const colors = mdTheme.colors[mdColor || contextColor];
    const { hover, active } = this.state;
    let style;
    if (disabled) {
      style = {
        boxShadow: 'none',
        backgroundColor: mdTheme.button.raised.disabled,
      };
    } else if (colors) {
      style = inversed ? {
        boxShadow: hover ? Shadow[3] : Shadow[2],
        color: active ? colors[700].hex : hover ? colors[600].hex : colors[500].hex,
        backgroundColor: active ? colors[700].text.default : hover ? colors[600].text.default : colors[500].text.default,
      } : {
        boxShadow: hover ? Shadow[3] : Shadow[2],
        backgroundColor: active ? colors[700].hex : hover ? colors[600].hex : colors[500].hex,
        color: active ? colors[700].text.default : hover ? colors[600].text.default : colors[500].text.default,
      };
    } else {
      style = inversed ? {
        boxShadow: hover ? Shadow[3] : Shadow[2],
        backgroundColor: mdTheme.text.default,
        color: hover | active ? 'rgba(0, 0, 0, 0.1)' : mdTheme.theme.card.hex,
      } : {
        boxShadow: hover ? Shadow[3] : Shadow[2],
        color: mdTheme.text.default,
        backgroundColor: hover | active ? 'rgba(0, 0, 0, 0.1)' : mdTheme.theme.card.hex,
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
    const { disabled, children, link, mini, icon, ...other } = this.props;
    const ink = !disabled && <Ink />;
    const classes = classNames(styles.floatingActionButton, {
      [styles.mini]: mini
    });

    const props = {
      className: classes,
      disabled,
      style: this.getButtonStyles(),
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
