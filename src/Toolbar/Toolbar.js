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
    theme: PropTypes.object,
    className: PropTypes.string,
    onTouchTapLeftIcon: PropTypes.func,
    onTouchTapRightIcon: PropTypes.func,
  };

  static contextTypes = {
    theme: PropTypes.object
  };

  static defaultProps = {
    zDepth: 1
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

  getIconStyle() {
    const theme = this.props.theme || this.context.theme;
    const { primary, secondary, transparent, zDepth } = this.props;
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
        <View grow={1}>{children}</View>
        {rightElement && <View grow={0} >{rightElement}</View>}
      </View>
    );
  }
}

export default Toolbar;
