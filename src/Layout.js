import React, { Component, PropTypes } from 'react';
import View from './View';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    header: PropTypes.node,
    fixedHeader: PropTypes.bool,
    onContentScroll: PropTypes.func,
    theme: PropTypes.object
  };

  static contextTypes = {
    theme: PropTypes.object,
  };

  static defaultProps = {
    fixedHeader: true
  };

  render() {
    const { children, ...rest } = this.props;
    const [header, ...otherChildren] = children;
    return (
      <View column className={layoutStyles.root} {...rest}>
        {header}
        {otherChildren}
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
