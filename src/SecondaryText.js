import React, { Component, PropTypes } from 'react';
import { Colors } from './Styles';
import classNames from 'classnames';

class SecondaryText extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    padded: PropTypes.bool,
    spaced: PropTypes.bool,
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  render() {
    const { padded, spaced, fullWidth, children, className, ...other } = this.props;
    const { shade } = this.context.mdTheme;
    const classes = classNames(className, shade === 'light' ? css.dark : css.light, {
      [css.padded]: padded,
      [css.fullWidth]: fullWidth,
      [css.spaced]: spaced
    });
    return (
      <p {...other} className={classes}>{children}</p>
    );
  }
}

export default SecondaryText;

const css = oxygenCss({
  fullWidth: {
    display: 'block',
  },
  padded: {
    padding: Units.phone.gutter.mini / 2,
  },
  spaced: {
    margin: Units.phone.gutter.mini / 2,
  },
  dark: {
    color: Colors.text.dark.secondary
  },
  light: {
    color: Colors.text.light.secondary
  }
});