import React, { Component, PropTypes } from 'react';
import View from './View';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <View column className={layoutStyles.root} {...rest}>
        {children}
      </View>
    );
  }
}

export default Layout;

const layoutStyles = oxygenCss({
  root: {
    height: '100%',
  },
});
