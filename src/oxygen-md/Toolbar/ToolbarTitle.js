import React, { PropTypes, Component } from 'react';
import { Typography } from '../Styles';
import classNames from 'classnames';

export default class ToolbarTitle extends Component {

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
    fontSize: Typography.phone.subheading.fontSize,
    fontWeight: Typography.phone.subheading.fontWeight,
  },
});