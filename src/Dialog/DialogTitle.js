import React, { PropTypes, Component } from 'react';
import { Typography, Units } from '../Styles';
import classNames from 'classnames';

export default class DialogTitle extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  render() {
    const { children, className, ...other } = this.props;
    const classes = classNames(className, css.title);
    return (
      <div className={classes} {...other}>{children}</div>
    );
  }
}

const css = oxygenCss({
  title: {
    padding: Units.phone.gutter.default,
    fontSize: Typography.phone.title.fontSize,
    fontWeight: Typography.phone.title.fontWeight,
  },
});