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

var styles = {
  floatingActionButton: 'omd_4',
  disabled: 'omd_5',
  mini: 'omd_6'
};

var FloatingActionButton = function (_Component) {
  _inherits(FloatingActionButton, _Component);

  function FloatingActionButton() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, FloatingActionButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FloatingActionButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hover: false,
      active: false
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
    }, _this.handleKeyPress = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
        _this.handleTouchTap();
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

  _createClass(FloatingActionButton, [{
    key: 'getButtonStyles',
    value: function getButtonStyles() {
      var _props = this.props;
      var inversed = _props.inversed;
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
          boxShadow: 'none',
          backgroundColor: mdTheme.button.raised.disabled
        };
      } else if (colors) {
        style = inversed ? {
          boxShadow: hover ? _Styles.Shadow[3] : _Styles.Shadow[2],
          color: active ? colors[700].hex : hover ? colors[600].hex : colors[500].hex,
          backgroundColor: active ? colors[700].text.default : hover ? colors[600].text.default : colors[500].text.default
        } : {
          boxShadow: hover ? _Styles.Shadow[3] : _Styles.Shadow[2],
          backgroundColor: active ? colors[700].hex : hover ? colors[600].hex : colors[500].hex,
          color: active ? colors[700].text.default : hover ? colors[600].text.default : colors[500].text.default
        };
      } else {
        style = inversed ? {
          boxShadow: hover ? _Styles.Shadow[3] : _Styles.Shadow[2],
          backgroundColor: mdTheme.text.default,
          color: hover | active ? 'rgba(0, 0, 0, 0.1)' : mdTheme.theme.card.hex
        } : {
          boxShadow: hover ? _Styles.Shadow[3] : _Styles.Shadow[2],
          color: mdTheme.text.default,
          backgroundColor: hover | active ? 'rgba(0, 0, 0, 0.1)' : mdTheme.theme.card.hex
        };
      }
      return style;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props;
      var disabled = _props2.disabled;
      var children = _props2.children;
      var link = _props2.link;
      var mini = _props2.mini;
      var icon = _props2.icon;

      var other = _objectWithoutProperties(_props2, ['disabled', 'children', 'link', 'mini', 'icon']);

      var ink = !disabled && _react2.default.createElement(_Ink2.default, null);
      var classes = (0, _classnames2.default)(styles.floatingActionButton, (_classNames = {}, _defineProperty(_classNames, styles.mini, mini), _defineProperty(_classNames, styles.disabled, disabled), _classNames));

      var props = _extends({
        className: classes,
        disabled: disabled,
        style: this.getButtonStyles()
      }, other, {
        tabIndex: 0,
        onKeyPress: this.handleKeyPress,
        onTouchTap: this.handleTouchTap,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      });

      var containerElement = link ? disabled ? 'span' : 'a' : 'div';
      return _react2.default.createElement(containerElement, props, ink, icon, children);
    }
  }]);

  return FloatingActionButton;
}(_react.Component);

FloatingActionButton.propTypes = {
  disabled: _react.PropTypes.bool,
  mini: _react.PropTypes.bool,
  mdColor: _react.PropTypes.string,
  link: _react.PropTypes.bool,
  onTouchTap: _react.PropTypes.func,
  href: _react.PropTypes.string,
  style: _react.PropTypes.object,
  icon: _react.PropTypes.node,
  children: _react.PropTypes.node,
  inversed: _react.PropTypes.bool
};
FloatingActionButton.contextTypes = {
  mdTheme: _react.PropTypes.object,
  mdColor: _react.PropTypes.string
};
FloatingActionButton.defaultProps = {
  primary: true
};
exports.default = FloatingActionButton;