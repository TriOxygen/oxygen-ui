import React, { Component, PropTypes } from 'react';

class VerticalCenter extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className={css.center}>
        {this.props.children}
      </div>
    );
  }
}

const css = oxygenCss({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }
});

export default VerticalCenter;
