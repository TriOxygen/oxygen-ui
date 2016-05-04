'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var css = {
  root: 'omd_b0',
  double: 'omd_b1'
};

var Avatar = function (_Component) {
  _inherits(Avatar, _Component);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Avatar).apply(this, arguments));
  }

  _createClass(Avatar, [{
    key: 'getStyle',
    value: function getStyle() {
      var _props = this.props;
      var style = _props.style;
      var mdColor = _props.mdColor;
      var src = _props.src;
      var mdTheme = this.context.mdTheme;

      var colors = mdTheme.colors[mdColor];
      return Object.assign({}, style, {
        backgroundColor: src ? null : mdColor ? colors[500].hex : mdTheme.theme.background.hex,
        borderColor: mdColor ? colors[500].hex : mdTheme.theme.background.hex,
        color: mdColor ? colors[500].text.default : mdTheme.text.default,
        backgroundImage: src ? 'url(' + src + ')' : null
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var double = _props2.double;
      var className = _props2.className;

      var other = _objectWithoutProperties(_props2, ['children', 'double', 'className']);

      var classes = (0, _classnames2.default)(className, css.root, _defineProperty({}, css.double, double));
      return _react2.default.createElement(
        'div',
        _extends({}, other, { className: classes, style: this.getStyle() }),
        children
      );
    }
  }]);

  return Avatar;
}(_react.Component);

Avatar.propTypes = {
  children: _react.PropTypes.node,
  double: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  mdColor: _react.PropTypes.string,
  src: _react.PropTypes.string,
  style: _react.PropTypes.object
};
Avatar.contextTypes = {
  mdTheme: _react.PropTypes.object
};
exports.default = Avatar;