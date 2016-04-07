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
  fontWeight: REGULAR
};

var body1 = {
  fontSize: 14,
  fontWeight: LIGHT
};

var body2 = {
  fontSize: 14,
  fontWeight: LIGHT
};

var subheading = {
  fontSize: 16,
  fontWeight: REGULAR
};

var title = {
  fontSize: 20,
  fontWeight: BOLD
};
var display1 = {
  fontSize: 34,
  fontWeight: REGULAR
};
var display2 = {
  fontSize: 45,
  fontWeight: REGULAR
};
var display3 = {
  fontSize: 56,
  fontWeight: REGULAR
};
var display4 = {
  fontSize: 112,
  fontWeight: LIGHT
};

var base = {
  fontSize: 14,
  fontFamily: 'Arial'
};

var phone = {
  base: base,
  caption: caption,
  body1: body1,
  body2: body2,
  subheading: subheading,
  title: title,
  display1: display1,
  display2: display2,
  display3: display3,
  display4: display4
};

var tablet = {
  base: base,
  caption: caption,
  body1: body1,
  body2: body2,
  subheading: subheading,
  title: title,
  display1: display1,
  display2: display2,
  display3: display3,
  display4: display4
};

var desktop = {
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