import React, { PropTypes, Component } from 'react';
import Heading from '../Heading';

export default class DialogTitle extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...other } = this.props;
    return (
      <Heading title {...other}>{children}</Heading>
    );
  }
}