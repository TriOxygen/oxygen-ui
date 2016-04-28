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
    theme: PropTypes.object,
  };

  static contextTypes = {
    theme: PropTypes.object
  };

  getStyle() {
    const theme = this.props.theme || this.context.theme;
    return {
      backgroundColor: theme.text.divider,
    };
  }

  render() {
    return (
      <hr className={styles.divider} style={this.getStyle()}/>
    );
  }
}

export default Divider;
