"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var keylineIncrement = 64;

var button = {
  height: 36,
  width: 64,
  fontSize: 14,
  lineHeight: 48,
  dense: {
    height: 32,
    width: 64
  }
};

var gutter = {
  default: 24,
  more: 32,
  less: 16,
  mini: 8
};

var floatingActionButton = {
  size: 56,
  miniSize: 40
};

var dropdown = {
  menuItem: {
    height: 32,
    fontSize: 15
  }
};

var toolbar = {
  height: 56
};

var spinner = {
  offset: 200,
  duration: 1.4
};

var menu = {
  padding: 8,
  margin: 16,
  item: {
    padding: 16,
    margin: 16,
    height: 48,
    dense: {
      height: 32
    }
  }
};

var list = {
  padding: 8,
  margin: 16,
  item: {
    padding: 16,
    margin: 16,
    height: 56,
    dense: {
      height: 48
    }
  }
};

var desktop = {
  iconSize: 24,
  borderRadius: 2,
  spinner: spinner,
  menu: menu,
  list: list,
  button: button,
  floatingActionButton: floatingActionButton,
  gutter: gutter,
  dropdown: dropdown,
  toolbar: toolbar,
  keylineIncrement: keylineIncrement,
  leftNavMenuItemHeight: 48,
  subheaderHeight: 48
};

var tablet = {
  iconSize: 24,
  borderRadius: 2,
  spinner: spinner,
  menu: menu,
  list: list,
  button: button,
  floatingActionButton: floatingActionButton,
  gutter: gutter,
  dropdown: dropdown,
  toolbar: toolbar,
  keylineIncrement: keylineIncrement,
  leftNavMenuItemHeight: 48,
  subheaderHeight: 48
};

var phone = {
  iconSize: 24,
  borderRadius: 2,
  spinner: spinner,
  menu: menu,
  list: list,
  button: button,
  floatingActionButton: floatingActionButton,
  gutter: gutter,
  dropdown: dropdown,
  toolbar: toolbar,
  keylineIncrement: keylineIncrement,
  leftNavMenuItemHeight: 48,
  subheaderHeight: 48
};

exports.default = {
  phone: phone,
  tablet: tablet,
  desktop: desktop
};