'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var FlatButton = function (_Component) {
  _inherits(FlatButton, _Component);

  function FlatButton() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, FlatButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FlatButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      active: false,
      hover: false
    }, _this.handleTouchTap = function (event) {
      var _this$props = _this.props;
      var disabled = _this$props.disabled;
      var onTouchTap = _this$props.onTouchTap;
      var payload = _this$props.payload;
      var href = _this$props.href;

      if (!disabled && onTouchTap) {
        onTouchTap(payload || href);
        event.preventDefault();
        event.stopPropagation();
      }
    }, _this.handleClick = function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, _this.handleKeyPress = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
        _this.handleTouchTap(event);
        event.preventDefault();
      }
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FlatButton, [{
    key: 'getButtonStyles',
    value: function getButtonStyles(theme) {
      var _props = this.props;
      var disabled = _props.disabled;
      var mdColor = _props.mdColor;
      var _context = this.context;
      var mdTheme = _context.mdTheme;
      var contextColor = _context.mdColor;

      var colors = mdTheme.colors[mdColor || contextColor];
      var _state = this.state;
      var hover = _state.hover;
      var active = _state.active;

      var style = void 0;
      if (disabled) {
        style = {
          color: hover && active ? mdTheme.text.disabled : mdTheme.text.disabled
        };
      } else if (colors) {
        style = {
          color: active ? colors[700].hex : hover ? colors[600].hex : colors[500].hex,
          backgroundColor: active ? mdTheme.button.flat.active : hover ? mdTheme.button.flat.hover : null
        };
      } else {
        style = {
          color: mdTheme.text.default,
          backgroundColor: active ? mdTheme.button.flat.active : hover ? mdTheme.button.flat.hover : null
        };
      }
      return style;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props;
      var link = _props2.link;
      var disabled = _props2.disabled;
      var fullWidth = _props2.fullWidth;
      var dense = _props2.dense;
      var label = _props2.label;
      var children = _props2.children;

      var other = _objectWithoutProperties(_props2, ['link', 'disabled', 'fullWidth', 'dense', 'label', 'children']);

      var ink = !disabled && _react2.default.createElement(_Ink2.default, null);
      var buttonClasses = (0, _classnames2.default)(styles.flatButton, (_classNames = {}, _defineProperty(_classNames, styles.dense, dense), _defineProperty(_classNames, styles.disabled, disabled), _defineProperty(_classNames, styles.fullWidth, fullWidth), _classNames));
      var props = _extends({
        className: buttonClasses,
        disabled: disabled,
        style: this.getButtonStyles()
      }, other, {
        tabIndex: 0,
        onKeyPress: this.handleKeyPress,
        onTouchTap: this.handleTouchTap,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      });
      var containerElement = link ? disabled ? 'span' : 'a' : 'div';
      return _react2.default.createElement(containerElement, props, ink, children, label);
    }
  }]);

  return FlatButton;
}(_react.Component);

FlatButton.propTypes = {
  payload: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string, _react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.array]),
  disabled: _react.PropTypes.bool,
  dense: _react.PropTypes.bool,
  mdColor: _react.PropTypes.string,
  fullWidth: _react.PropTypes.bool,
  link: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  onTouchTap: _react.PropTypes.func,
  label: _react.PropTypes.string,
  children: _react.PropTypes.node
};
FlatButton.contextTypes = {
  mdTheme: _react.PropTypes.object,
  mdColor: _react.PropTypes.string
};
FlatButton.defaultProps = {
  label: ''
};
exports.default = FlatButton;


console.log(_Styles.Typography.phone.button.lineHeight);

var styles = {
  flatButton: 'omd_j',
  disabled: 'omd_k',
  dense: 'omd_l',
  fullWidth: 'omd_m'
};