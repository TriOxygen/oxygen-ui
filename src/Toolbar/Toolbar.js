import React, { Component, PropTypes } from 'react';
import { Shadow, Units } from '../Styles';
import View from '../View';
import classNames from 'classnames';

const styles = oxygenCss({
  root: {
    userSelect: 'none',
    boxSizing: 'border-box',
    padding: `0 ${Units.phone.gutter.mini}px`,
    lineHeight: `${Units.phone.toolbar.height}px`,
    flex: `0 0 ${Units.phone.toolbar.height}px`,
    height: Units.phone.toolbar.height,
    zIndex: 1,
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
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    children: PropTypes.node,
    leftElement: PropTypes.node,
    rightElement: PropTypes.node,
    mdColor: PropTypes.string,
    className: PropTypes.string,
    onTouchTapLeftIcon: PropTypes.func,
    onTouchTapRightIcon: PropTypes.func,
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  static defaultProps = {
    zDepth: 1
  };

  getStyle() {
    const { mdTheme } = this.context;
    const { zDepth, mdColor, transparent } = this.props;
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
    );
  }

  handleTouchTapLeftIcon = () => {
    const { onTouchTapLeftIcon } = this.props;
    if (onTouchTapLeftIcon) {
      onTouchTapLeftIcon();
    }
  };

  handleTouchTapRightIcon = () => {
    const { onTouchTapRightIcon } = this.props;
    if (onTouchTapRightIcon) {
      onTouchTapRightIcon();
    }
  };

  render() {
    const { children, leftElement, rightElement, className, primary, secondary, ...other } = this.props;
    const classes = classNames(styles.root, className);
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
