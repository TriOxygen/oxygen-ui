'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('./Styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props;
      var padded = _props.padded;
      var spaced = _props.spaced;
      var fullWidth = _props.fullWidth;
      var children = _props.children;
      var className = _props.className;
      var primary = _props.primary;
      var secondary = _props.secondary;

      var other = _objectWithoutProperties(_props, ['padded', 'spaced', 'fullWidth', 'children', 'className', 'primary', 'secondary']);

      var shade = this.context.mdTheme.shade;

      var classes = (0, _classnames2.default)(className, css.root, shade === 'light' ? css.dark : css.light, (_classNames = {}, _defineProperty(_classNames, css.primary, primary), _defineProperty(_classNames, css.secondary, secondary), _defineProperty(_classNames, css.padded, padded), _defineProperty(_classNames, css.fullWidth, fullWidth), _defineProperty(_classNames, css.spaced, spaced), _classNames));
      return _react2.default.createElement(
        'p',
        _extends({}, other, { className: classes }),
        children
      );
    }
  }]);

  return Text;
}(_react.Component);

Text.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  fullWidth: _react.PropTypes.bool,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  padded: _react.PropTypes.bool,
  spaced: _react.PropTypes.bool
};
Text.defaultProps = {
  primary: true
};
Text.contextTypes = {
  mdTheme: _react.PropTypes.object
};
exports.default = Text;


var css = {
  root: 'omd_cS',
  fullWidth: 'omd_cE',
  padded: 'omd_cF',
  spaced: 'omd_cG',
  dark: 'omd_cC',
  light: 'omd_cD'
};