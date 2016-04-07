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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RaisedButton = function (_Component) {
  _inherits(RaisedButton, _Component);

  function RaisedButton() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, RaisedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RaisedButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hover: false,
      active: false
    }, _this.handleTouchTap = function (event) {
      var _this$props = _this.props;
      var disabled = _this$props.disabled;
      var onTouchTap = _this$props.onTouchTap;
      var href = _this$props.href;

      if (!disabled && onTouchTap) {
        event.preventDefault();
        event.stopPropagation();
        onTouchTap(href, event);
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RaisedButton, [{
    key: 'getButtonStyles',
    value: function getButtonStyles(theme) {
      var _props = this.props;
      var disabled = _props.disabled;
      var primary = _props.primary;
      var secondary = _props.secondary;
      var inversed = _props.inversed;
      var _state = this.state;
      var hover = _state.hover;
      var active = _state.active;

      var style = void 0;
      if (disabled) {
        style = {
          boxShadow: 'none',
          backgroundColor: theme.button.raised.disabled
        };
      } else if (primary) {
        style = inversed ? {
          color: active ? theme.primary[700].hex : hover ? theme.primary[600].hex : theme.primary[500].hex,
          backgroundColor: active ? theme.primary[700].text.default : hover ? theme.primary[600].text.default : theme.primary[500].text.default
        } : {
          backgroundColor: active ? theme.primary[700].hex : hover ? theme.primary[600].hex : theme.primary[500].hex,
          color: active ? theme.primary[700].text.default : hover ? theme.primary[600].text.default : theme.primary[500].text.default
        };
      } else if (secondary) {
        style = inversed ? {
          color: active ? theme.secondary[700].hex : hover ? theme.secondary[600].hex : theme.secondary[500].hex,
          backgroundColor: active ? theme.secondary[700].text.default : hover ? theme.secondary[600].text.default : theme.secondary[500].text.default
        } : {
          backgroundColor: active ? theme.secondary[700].hex : hover ? theme.secondary[600].hex : theme.secondary[500].hex,
          color: active ? theme.secondary[700].text.default : hover ? theme.secondary[600].text.default : theme.secondary[500].text.default
        };
      } else {
        style = inversed ? {
          backgroundColor: theme.text.default,
          color: hover | active ? 'rgba(0, 0, 0, 0.1)' : theme.theme.card.hex
        } : {
          color: theme.text.default,
          backgroundColor: hover | active ? 'rgba(0, 0, 0, 0.1)' : theme.theme.card.hex
        };
      }
      return style;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var theme = this.props.theme || this.context.theme;
      var _props2 = this.props;
      var link = _props2.link;
      var disabled = _props2.disabled;
      var fullWidth = _props2.fullWidth;
      var dense = _props2.dense;
      var label = _props2.label;
      var children = _props2.children;

      var other = _objectWithoutProperties(_props2, ['link', 'disabled', 'fullWidth', 'dense', 'label', 'children']);

      var ink = !disabled && _react2.default.createElement(_Ink2.default, null);
      var buttonClasses = (0, _classnames2.default)(styles.raisedButton, (_classNames = {}, _defineProperty(_classNames, styles.dense, dense), _defineProperty(_classNames, styles.fullWidth, fullWidth), _classNames));
      var props = _extends({
        className: buttonClasses,
        disabled: disabled,
        style: this.getButtonStyles(theme)
      }, other, {
        tabIndex: 0,
        onKeyPress: this.handleKeyPress,
        onTouchTap: this.handleTouchTap,
        onClick: this.handleClick
      });
      var containerElement = link ? disabled ? 'span' : 'a' : 'div';
      return _react2.default.createElement(containerElement, props, ink, children, label);
    }
  }]);

  return RaisedButton;
}(_react.Component);

RaisedButton.propTypes = {
  disabled: _react.PropTypes.bool,
  dense: _react.PropTypes.bool,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  theme: _react.PropTypes.object,
  fullWidth: _react.PropTypes.bool,
  label: _react.PropTypes.string,
  link: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  onTouchTap: _react.PropTypes.func,
  children: _react.PropTypes.node,
  inversed: _react.PropTypes.bool
};
RaisedButton.contextTypes = {
  theme: _react.PropTypes.object
};
RaisedButton.defaultProps = {
  label: ''
};


var styles = {
  raisedButton: 'omd_bz',
  dense: 'omd_bA',
  fullWidth: 'omd_bB'
};

exports.default = RaisedButton;