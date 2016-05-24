import React, { Component, PropTypes } from 'react';
import { Units, Shadow } from './Styles';
import classNames from 'classnames';

class Paper extends Component {
  static propTypes = {
    zDepth: PropTypes.number,
    transparent: PropTypes.bool,
    padded: PropTypes.bool,
    spaced: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    mdColor: PropTypes.string,
    hover: PropTypes.bool
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  static defaultProps = {
    zDepth: 1,
    rounded: true,
    fullWidth: true,
  };

  state = {
    hover: false
  };

  getStyle() {
    const { mdTheme } = this.context;
    const { zDepth, transparent, mdColor, style } = this.props;
    const colors = mdTheme.colors[mdColor];
    const { hover } = this.state;
    return Object.assign({},
      transparent ? null : {
        backgroundColor: mdTheme.theme.card.hex,
        color: mdTheme.text.default,
        boxShadow: hover ? Shadow[zDepth + 1] : Shadow[zDepth]
      },
      colors && !transparent ? {
        backgroundColor: colors[500].hex,
        color: colors[500].text.default,
        boxShadow: hover ? Shadow[zDepth + 1] : Shadow[zDepth]
      } : null,
      style);
  }

  handleEnter = () => {
    this.setState({ hover: true });
  };

  handleLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const { children, spaced, fullWidth, padded, rounded, className, hover, ...other } = this.props;
    const classes = classNames(className, styles.root, {
      [styles.fullWidth]: fullWidth,
      [styles.spaced]: spaced,
      [styles.padded]: padded,
      [styles.rounded]: rounded,
    });
    const props = {
      className: classes,
      style: this.getStyle(),
    };
    if (hover) {
      props.onMouseEnter = this.handleEnter;
      props.onMouseLeave = this.handleLeave;
    };
    return (
      <div {...other} {...props} >
        {children}
      </div>
    );
  }
}

export default Paper;

const styles = oxygenCss({
  root: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    transition: 'box-shadow 450ms cubic-bezier(0.23, 1, 0.32, 1)',
    display: 'inline-block',
    verticalAlign: 'top',
    '&fullWidth': {
      display: 'block',
      flexGrow: 1,
    },
    '&padded': {
      padding: Units.phone.gutter.mini,
    },
    '&spaced': {
      margin: Units.phone.gutter.mini,
    },
    '&rounded': {
      borderRadius: Units.phone.borderRadius
    }
  },
});
