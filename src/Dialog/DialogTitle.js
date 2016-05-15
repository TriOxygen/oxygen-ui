import React, { PropTypes, Component } from 'react';
import Heading from '../Heading';
import { Units } from '../Styles';

const css = oxygenCss({
  title: {
    padding: Units.phone.gutter.default
  }
});

export default class DialogTitle extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...other } = this.props;
    return (
      <Heading className={css.title} title {...other}>{children}</Heading>
    );
  }
}