'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var LIGHT = 300;
var REGULAR = 400;
var SEMI_BOLD = 500;
var BOLD = 700;

var caption = {
  fontSize: 12,
  fontWeight: REGULAR,
  lineHeight: '20px',
  letterSpacing: '0.2px'
};
var body1 = {
  fontSize: 14,
  fontWeight: LIGHT,
  lineHeight: '24pxpx',
  letterSpacing: '0.1px'
};
var body2 = {
  fontSize: 14,
  fontWeight: REGULAR,
  lineHeight: '24px',
  letterSpacing: '0.1px'
};
var headline = {
  fontSize: 24,
  fontWeight: LIGHT,
  lineHeight: '32px',
  letterSpacing: '0px'
};
var subheading = {
  fontSize: 16,
  fontWeight: REGULAR,
  lineHeight: '24px',
  letterSpacing: '0.1px'
};
var title = {
  fontSize: 20,
  fontWeight: LIGHT,
  lineHeight: '28px',
  letterSpacing: '0.05px'
};
var display1 = {
  fontSize: 34,
  fontWeight: REGULAR,
  lineHeight: '40px',
  letterSpacing: '0px'
};
var display2 = {
  fontSize: 45,
  fontWeight: REGULAR,
  lineHeight: '48px',
  letterSpacing: '0px'
};
var display3 = {
  fontSize: 56,
  fontWeight: REGULAR,
  lineHeight: '84px',
  letterSpacing: '0.05px'
};
var display4 = {
  fontSize: 112,
  fontWeight: LIGHT,
  lineHeight: '128px',
  letterSpacing: '0.1px'
};

var base = {
  fontSize: 14,
  fontFamily: 'Arial'
};

var button = {
  fontSize: 14,
  lineHeight: '20px',
  letterSpacing: '0.1px',
  fontWeight: SEMI_BOLD
};

var phone = {
  button: button,
  base: base,
  caption: caption,
  body1: body1,
  body2: body2,
  headline: headline,
  subheading: subheading,
  title: title,
  display1: display1,
  display2: display2,
  display3: display3,
  display4: display4
};

var tablet = {
  button: button,
  base: base,
  caption: caption,
  body1: body1,
  body2: body2,
  headline: headline,
  subheading: subheading,
  title: title,
  display1: display1,
  display2: display2,
  display3: display3,
  display4: display4
};

var desktop = {
  button: button,
  base: base,
  caption: caption,
  body1: _extends({}, body1, {
    fontSize: 13
  }),
  body2: _extends({}, body2, {
    fontSize: 13
  }),
  subheading: _extends({}, subheading, {
    fontSize: 15
  }),
  headline: headline,
  title: title,
  display1: display1,
  display2: display2,
  display3: display3,
  display4: display4
};

exports.default = {
  phone: phone,
  tablet: tablet,
  desktop: desktop
};