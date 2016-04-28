import React, { Component, PropTypes } from 'react';
import Paper from '../Paper';

class List extends Component {

  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.string
  };

  static contextTypes = {
    theme: PropTypes.object
  };

 static childContextTypes = {
    color: PropTypes.string,
  };

  getChildContext() {
    return {
      color: this.props.color
    }
  }

  render() {
    const { children, color, ...other } = this.props;
    return (
      <Paper {...other}>
          {children}
      </Paper>
    );
  }
}

export default List;
