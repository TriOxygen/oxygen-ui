import React, { PropTypes, Component } from 'react';
import Heading from '../Heading';
import { Units } from '../Styles';

const css = oxygenCss({
  title: {
    padding: `0 ${Units.phone.gutter.mini}px`
  }
});

export default class ToolbarTitle extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  render() {
    const { children, className, ...other } = this.props;
    return (
      <Heading margin={false} className={css.title} title {...other}>{children}</Heading>
    );
  }
}