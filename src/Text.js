import React, { Component, PropTypes } from 'react';
import { Colors } from './Styles';
import classNames from 'classnames';

class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    secondary: PropTypes.bool,
    padded: PropTypes.bool,
    spaced: PropTypes.bool,
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  render() {
    const { padded, spaced, fullWidth, primary, secondary, children, className, ...other } = this.props;
    const { shade } = this.context.mdTheme;
    const classes = classNames(
      css.root,
      className, shade === 'light' ? css.dark : css.light,
      {
        [css.secondary]: secondary,
        [css.padded]: padded,
        [css.fullWidth]: fullWidth,
        [css.spaced]: spaced
      }
    );
    return (
      <p {...other} className={classes}>{children}</p>
    );
  }
}

export default Text;

const css = oxygenCss({
  root: {
    padding: 0,
    margin: 0,
    whiteSpace: 'pre-line',
    '+root': {
      margin: `${Units.phone.gutter.mini}px 0 0 0`,
    },
    '&dark': {
      color: Colors.text.dark.default
    },
    '&light': {
      color: Colors.text.light.default
    },
    '&secondary': {
      '&dark': {
        color: Colors.text.dark.secondary
      },
      '&light': {
        color: Colors.text.light.secondary
      }
    }
  },
  fullWidth: {
    display: 'block',
  },
  spaced: {
    margin: `${Units.phone.gutter.mini / 2}px ${Units.phone.gutter.mini / 2}px ${Units.phone.gutter.mini}px ${Units.phone.gutter.mini / 2}px`,
  },
});