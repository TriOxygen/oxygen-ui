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
    className: PropTypes.string
  };

  static contextTypes = {
    theme: PropTypes.object
  };

  getStyle() {
    const theme = this.props.theme || this.context.theme;
    const { zDepth, primary, secondary, transparent } = this.props;
    return Object.assign({},
      transparent ? null : {
        backgroundColor: theme.theme.statusBar.material,
        color: theme.theme.statusBar.text.default,
        boxShadow: Shadow[zDepth]
      },
      secondary && !transparent ? {
        backgroundColor: theme.secondary1,
        color: theme.secondary1Text
      } : null,
      primary && !transparent ? {
        backgroundColor: theme.primary1,
        color: theme.primary1Text
      } : null,
    );
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
