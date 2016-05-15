import React, { Component, PropTypes } from 'react';

class Group extends Component {
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
    const { children } = this.props;
    if (children.length > 1) {
      return (
        <div>{children}</div>
      );
    }
    return React.cloneElement(React.Children.only(children));
  }
}

export default Group;


