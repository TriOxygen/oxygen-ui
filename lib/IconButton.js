'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Ink = require('./Ink');

var _Ink2 = _interopRequireDefault(_Ink);

var _Styles = require('./Styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconButton = function (_Component) {
  _inherits(IconButton, _Component);

  function IconButton() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, IconButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(IconButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hover: false,
      active: false
    }, _this.handleFocus = function () {
      if (!_this.state.active) {
        _this.setState({ active: true });
      }
    }, _this.handleBlur = function () {
      if (_this.state.active) {
        _this.setState({ active: false });
      }
    }, _this.handleMouseEnter = function () {
      if (!_this.state.hover) {
        _this.setState({ hover: true });
      }
    }, _this.handleMouseLeave = function () {
      if (_this.state.hover) {
        _this.setState({ hover: false });
      }
    }, _this.handleKeyPress = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
        _this.handleTouchTap();
        event.preventDefault();
      }
    }, _this.handleClick = function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, _this.handleTouchTap = function (event) {
      var _this$props = _this.props;
      var disabled = _this$props.disabled;
      var onTouchTap = _this$props.onTouchTap;
      var href = _this$props.href;

      if (!disabled && onTouchTap) {
        onTouchTap(href);
        event.preventDefault();
        event.stopPropagation();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IconButton, [{
    key: 'getButtonStyles',
    value: function getButtonStyles() {
      var mdTheme = this.context.mdTheme;
      var _props = this.props;
      var mdColor = _props.mdColor;
      var disabled = _props.disabled;
      var _state = this.state;
      var hover = _state.hover;
      var active = _state.active;

      var colors = mdColor && mdTheme.colors[mdColor];
      return Object.assign({}, {
        color: disabled ? mdTheme.text.disabled : colors && colors[500].hex,
        backgroundColor: disabled ? 'transparent' : active ? mdTheme.button.flat.active : hover ? mdTheme.button.flat.hover : 'transparent'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props;
      var dense = _props2.dense;
      var disabled = _props2.disabled;
      var children = _props2.children;
      var className = _props2.className;
      var link = _props2.link;

      var other = _objectWithoutProperties(_props2, ['dense', 'disabled', 'children', 'className', 'link']);

      var ink = !disabled && _react2.default.createElement(_Ink2.default, null);
      var buttonClasses = (0, _classnames2.default)(styles.iconButton, className, (_classNames = {}, _defineProperty(_classNames, styles.dense, dense), _defineProperty(_classNames, styles.disabled, disabled), _classNames));
      var props = _extends({}, other, {
        className: buttonClasses,
        disabled: disabled,
        style: this.getButtonStyles(),
        onKeyPress: this.handleKeyPress,
        onTouchTap: this.handleTouchTap,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      });
      var containerElement = link ? disabled ? 'span' : 'a' : 'button';
      return _react2.default.createElement(containerElement, props, ink, children);
    }
  }]);

  return IconButton;
}(_react.Component);

IconButton.propTypes = {
  disabled: _react.PropTypes.bool,
  dense: _react.PropTypes.bool,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  mdColor: _react.PropTypes.string,
  className: _react.PropTypes.string,
  hoverColor: _react.PropTypes.string,
  children: _react.PropTypes.node,
  link: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  onTouchTap: _react.PropTypes.func
};
IconButton.contextTypes = {
  mdTheme: _react.PropTypes.object
};
exports.default = IconButton;
var styles = exports.styles = {
  iconButton: 'omd_6',
  disabled: 'omd_ev',
  dense: 'omd_7',
  icon: 'omd_8'
};