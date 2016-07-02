import React, { Component, PropTypes } from 'react';
import { Typography } from './Styles';
import classNames from 'classnames';

const css = oxygenCss({
  root: {
    '&margin':{
      margin: '0 0 10px 0',
    },
    fontSize: Typography.phone.headline.fontSize,
    fontWeight: Typography.phone.headline.fontWeight,
    lineHeight: Typography.phone.headline.lineHeight,
    letterSpacing: Typography.phone.headline.letterSpacing,
  },
  display1: {
    '&margin':{
      margin: '0 0 14px 0',
    },
    fontSize: Typography.phone.display1.fontSize,
    fontWeight: Typography.phone.display1.fontWeight,
    lineHeight: Typography.phone.display1.lineHeight,
    letterSpacing: Typography.phone.display1.letterSpacing,
  },
  display2: {
    '&margin':{
      margin: '0 0 14px 0',
    },
    fontSize: Typography.phone.display2.fontSize,
    fontWeight: Typography.phone.display2.fontWeight,
    lineHeight: Typography.phone.display2.lineHeight,
    letterSpacing: Typography.phone.display2.letterSpacing,
  },
  display3: {
    '&margin':{
      margin: '0 0 14px 0',
    },
    fontSize: Typography.phone.display3.fontSize,
    fontWeight: Typography.phone.display3.fontWeight,
    lineHeight: Typography.phone.display3.lineHeight,
    letterSpacing: Typography.phone.display3.letterSpacing,
  },
  display4: {
    '&margin':{
      margin: '0 0 14px 0',
    },
    fontSize: Typography.phone.display4.fontSize,
    fontWeight: Typography.phone.display4.fontWeight,
    lineHeight: Typography.phone.display4.lineHeight,
    letterSpacing: Typography.phone.display4.letterSpacing,
  },
  headline: {
  },
  subheading: {
    '&margin':{
      margin: '0 0 10px 0',
    },
    fontSize: Typography.phone.subheading.fontSize,
    fontWeight: Typography.phone.subheading.fontWeight,
    lineHeight: Typography.phone.subheading.lineHeight,
    letterSpacing: Typography.phone.subheading.letterSpacing,
  },
  title: {
    '&margin':{
      margin: '0 0 10px 0',
    },
    fontSize: Typography.phone.title.fontSize,
    fontWeight: Typography.phone.title.fontWeight,
    lineHeight: Typography.phone.title.lineHeight,
    letterSpacing: Typography.phone.title.letterSpacing,
  },
});

class Heading extends Component {
  static propTypes = {
    children: PropTypes.node,
    display4: PropTypes.bool,
    display3: PropTypes.bool,
    display2: PropTypes.bool,
    display1: PropTypes.bool,
    subheading: PropTypes.bool,
    mdColor: PropTypes.string,
    title: PropTypes.bool,
    className: PropTypes.string,
    margin: PropTypes.bool,
  };

  static defaultProps = {
    margin: true
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  getStyle(theme) {
    const { mdColor } = this.props;
    const { mdTheme, mdColor: contextColor } = this.context;
    const colors = mdTheme.colors[mdColor || contextColor];
    return Object.assign({}, colors && {
      backgroundColor: colors[300].hex,
      color:colors[300].text.default,
    });
  }

  render() {
    const {
      className,
      mdColor,
      children,
      margin,
      display4,
      display3,
      display2,
      display1,
      subheading,
      title,
      ...other
    } = this.props;

    const classes = classNames(css.root, className, {
      [css.margin]: margin,
      [css.display4]: display4,
      [css.display3]: display3,
      [css.display2]: display2,
      [css.display1]: display1,
      [css.subheading]: subheading,
      [css.title]: title,
    });
    return (
      <div {...other} className={classes} style={this.getStyle()}>{children}</div>
    );
  }
}

export default Heading;
