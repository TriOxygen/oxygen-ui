import React, { PropTypes, Component } from 'react';
import { Typography, Units } from '../Styles';
import classNames from 'classnames';

export default class CardTitle extends Component {

  static propTypes = {
    children: PropTypes.node,
    padded: PropTypes.bool,
    className: PropTypes.string
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  render() {
    const { mdTheme } = this.context;
    const { children, padded, className, ...other } = this.props;
    const classes = classNames(className, css.title, {
      [css.dark]: mdTheme.shade === 'dark',
      [css.padded]: padded
    });
    return (
      <div className={classes} {...other}>{children}</div>
    );
  }
}

const css = oxygenCss({
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.5)',
    '&dark': {
      background: 'rgba(0, 0, 0, 0.5)',
    },
    '&padded': {
      padding: Units.phone.gutter.mini
    }
  },
});