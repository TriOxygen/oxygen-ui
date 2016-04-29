import React, { PropTypes, Component } from 'react';
import Portal from '../Portal';
import Overlay from '../Overlay';
import Paper from '../Paper';
import View from '../View';
import { Units, Shadow } from '../Styles';
import classNames from 'classnames';

export default class DrawerHeader extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    mdColor: PropTypes.string,
    transparent: PropTypes.bool,
    zDepth: PropTypes.number
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
    mdColor: PropTypes.string
  };

  getStyle() {
    const { mdTheme, mdColor: contextColor } = this.context;
    const { zDepth, mdColor, transparent } = this.props;
    const colors = mdTheme.colors[mdColor || contextColor || mdTheme.primary];

    return {
      backgroundColor: transparent ? mdTheme.theme.statusBar.material : colors[500].hex,
      color: transparent ? mdTheme.theme.statusBar.text.default : colors[500].text.default,
      boxShadow: Shadow[zDepth]
    };
  }

  render() {
    const { className, children, ...other } = this.props;
    const classes = classNames(styles.root, className);
    return (
      <View row className={classes} style={this.getStyle()} {...other}>
        {children}
      </View>
    );
  }
}

const styles = oxygenCss({
  root: {
    userSelect: 'none',
    boxSizing: 'border-box',
    padding: `0 ${Units.phone.gutter.mini}px`,
    height: Units.phone.toolbar.height,
    lineHeight: `${Units.phone.toolbar.height}px`,
    '@desktop': {
      padding: `0 ${Units.desktop.gutter.mini}px`,
      height: Units.desktop.toolbar.height,
      lineHeight: `${Units.desktop.toolbar.height}px`
    }
  }
});
