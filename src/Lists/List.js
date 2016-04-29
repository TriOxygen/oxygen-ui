import React, { Component, PropTypes } from 'react';
import Paper from '../Paper';

class List extends Component {

  static propTypes = {
    children: PropTypes.node,
    mdColor: PropTypes.string
  };

  static childContextTypes = {
    mdColor: PropTypes.string,
  };

  getChildContext() {
    return {
      mdColor: this.props.mdColor
    }
  }

  render() {
    const { children, mdColor, ...other } = this.props;
    return (
      <Paper {...other}>
          {children}
      </Paper>
    );
  }
}

export default List;
