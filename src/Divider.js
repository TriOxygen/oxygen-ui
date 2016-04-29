import React, { Component, PropTypes } from 'react';

const styles = oxygenCss({
  'divider': {
    height: 1,
    border: 'none',
    margin: 0,
  }
})

class Divider extends Component {

  static propTypes = {
    mdColor: PropTypes.string,
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
  };

  getStyle() {
    const { mdTheme } = this.context;
    const { mdColor } = this.props;
    const colors = mdColor && mdTheme.colors[mdColor];
    return {
      backgroundColor: mdColor && colors[500].hex || mdTheme.text.divider,
    };
  }

  render() {
    return (
      <hr className={styles.divider} style={this.getStyle()}/>
    );
  }
}

export default Divider;
