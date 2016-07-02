import React, { Component, PropTypes } from 'react';
import { Shadow, Units } from '../Styles';
import View from '../View';
import classNames from 'classnames';

const css = oxygenCss({
  root: {
    userSelect: 'none',
    boxSizing: 'border-box',
    padding: `0 ${Units.phone.gutter.mini}px`,
    lineHeight: `${Units.phone.toolbar.height}px`,
    flex: `0 0 ${Units.phone.toolbar.height}px`,
    height: Units.phone.toolbar.height,
    zIndex: 1,
    '&absolute': {
      left: 0,
      right: 0,
      top: 0,
      position: 'absolute'
    },
    '&fixed': {
      left: 0,
      right: 0,
      top: 0,
      position: 'fixed'
    },
    '@desktop': {
      padding: `0 ${Units.desktop.gutter.mini}px`,
      flex: `0 0 ${Units.desktop.toolbar.height}px`,
    }
  }
});

class Toolbar extends Component {

  static propTypes = {
    zDepth: PropTypes.number,
    transparent: PropTypes.bool,
    absolute: PropTypes.bool,
    fixed: PropTypes.bool,
    children: PropTypes.node,
    leftElement: PropTypes.node,
    rightElement: PropTypes.node,
    mdColor: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  static defaultProps = {
    zDepth: 1
  };

  getStyle() {
    const { mdTheme } = this.context;
    const { zDepth, mdColor, style, transparent } = this.props;
    const colors = mdTheme.colors[mdColor];
    return Object.assign({},
      transparent ? null : {
        backgroundColor: mdTheme.theme.statusBar.hex,
        color: mdTheme.theme.statusBar.text.default,
        boxShadow: Shadow[zDepth]
      },
      colors && !transparent ? {
        backgroundColor: colors[500].hex,
        color: colors[500].text.default
      } : null,
      style
    );
  }

  render() {
    const {
      zDepth,
      transparent,
      mdColor,
      children,
      leftElement,
      rightElement,
      className,
      absolute,
      fixed,
      style,
      ...other
    } = this.props;
    const classes = classNames(css.root, className, {
      [css.absolute]: absolute,
      [css.fixed]: fixed,
    });
    return (
      <View row className={classes} style={this.getStyle()} {...other}>
        {leftElement && <View grow={0} >{leftElement}</View>}
        <View middle grow={1}>{children}</View>
        {rightElement && <View grow={0} >{rightElement}</View>}
      </View>
    );
  }
}

export default Toolbar;
