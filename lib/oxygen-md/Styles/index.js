'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transitions = exports.Shadow = exports.Units = exports.Typography = exports.Theme = exports.Colors = undefined;
exports.mergeStyles = mergeStyles;

var _Colors2 = require('./Colors');

var _Colors3 = _interopRequireDefault(_Colors2);

var _Theme2 = require('./Theme');

var _Theme3 = _interopRequireDefault(_Theme2);

var _Typography2 = require('./Typography');

var _Typography3 = _interopRequireDefault(_Typography2);

var _Units2 = require('./Units');

var _Units3 = _interopRequireDefault(_Units2);

var _Shadow2 = require('./Shadow');

var _Shadow3 = _interopRequireDefault(_Shadow2);

var _Transitions2 = require('./Transitions');

var _Transitions3 = _interopRequireDefault(_Transitions2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Colors = _Colors3.default;
exports.Theme = _Theme3.default;
exports.Typography = _Typography3.default;
exports.Units = _Units3.default;
exports.Shadow = _Shadow3.default;
exports.Transitions = _Transitions3.default;
function mergeStyles() {
  return Object.assign.apply(Object, [{}].concat(Array.prototype.slice.call(arguments)));
}