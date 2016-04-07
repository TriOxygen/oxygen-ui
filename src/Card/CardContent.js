import React, { PropTypes, Component } from 'react';
import { Units } from '../Styles';
import classNames from 'classnames';

export default class CardContent extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  render() {
    const { children, className, ...other } = this.props;
    const classes = classNames(className, css.content);
    return (
      <div className={classes} {...other}>{children}</div>
    );
  }
}

const css = oxygenCss({
  content: {
    padding: Units.phone.gutter.default,
  },
});