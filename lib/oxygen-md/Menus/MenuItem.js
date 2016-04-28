'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Styles = require('../Styles');

var _Ink = require('../Ink');

var _Ink2 = _interopRequireDefault(_Ink);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  icon: 'omd_dn',
  root: 'omd_do',
  dense: 'omd_dp'
};

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(MenuItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hover: false,
      hasFocus: false
    }, _this.handleMouseEnter = function () {
      var disabled = _this.props.disabled;

      if (!disabled) {
        _this.setState({ hover: true });
      }
    }, _this.handleMouseLeave = function () {
      var disabled = _this.props.disabled;

      if (!disabled) {
        _this.setState({ hover: false });
      }
    }, _this.handleTouchTap = function (event) {
      var _this$props = _this.props;
      var disabled = _this$props.disabled;
      var payload = _this$props.payload;
      var label = _this$props.label;
      var onTouchTap = _this$props.onTouchTap;
      var href = _this$props.href;

      if (!disabled && onTouchTap) {
        event.preventDefault();
        event.stopPropagation();
        if (href) {
          onTouchTap(href, label, event);
        } else {
          onTouchTap(payload, label, event);
        }
      }
    }, _this.handleClick = function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, _this.handleFocus = function () {
      if (!_this.state.hasFocus) {
        _this.setState({ hasFocus: true });
      }
    }, _this.handleBlur = function () {
      if (_this.state.hasFocus) {
        _this.setState({ hasFocus: false });
      }
    }, _this.handleKeyPress = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
        _this.handleTouchTap(event);
        event.preventDefault();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuItem, [{
    key: 'getStyle',
    value: function getStyle() {
      var mdTheme = this.context.mdTheme;
      var _state = this.state;
      var hover = _state.hover;
      var hasFocus = _state.hasFocus;
      var _props = this.props;
      var active = _props.active;
      var divider = _props.divider;
      var color = _props.color;

      var colors = mdTheme.colors[color || mdTheme.primary];
      return (0, _Styles.mergeStyles)(hasFocus ? {
        backgroundColor: colors[200].hex,
        color: colors[200].text.default
      } : null, hover ? {
        backgroundColor: colors[100].hex,
        color: colors[100].text.default
      } : null, divider ? {
        borderColor: mdTheme.text.divider
      } : null, active ? {
        backgroundColor: colors[700].hex,
        color: colors[700].text.default
      } : null);
    }
  }, {
    key: 'getIconStyle',
    value: function getIconStyle() {
      var units = this.context.mdTheme.units;

      return (0, _Styles.mergeStyles)(styles.icon, {
        marginRight: units.menu.padding
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.autoFocus) {
        this._timer = setTimeout(function () {
          _reactDom2.default.findDOMNode(_this2).focus();
        }, 200);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._timer) {
        clearTimeout(this._timer);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var disabled = _props2.disabled;
      var children = _props2.children;
      var icon = _props2.icon;
      var dense = _props2.dense;
      var href = _props2.href;
      var label = _props2.label;
      var className = _props2.className;

      var other = _objectWithoutProperties(_props2, ['disabled', 'children', 'icon', 'dense', 'href', 'label', 'className']);

      var iconElement = void 0;
      var tabIndex = void 0;
      if (icon) {
        iconElement = _react2.default.cloneElement(icon, { className: styles.icon });
      }
      var rootClasses = (0, _classnames2.default)(styles.root, className, _defineProperty({}, styles.dense, dense));

      if (!disabled) {
        tabIndex = 0;
      }
      var props = _extends({}, other, {
        onTouchTap: this.handleTouchTap,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onKeyPress: this.handleKeyPress,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        style: this.getStyle(),
        tabIndex: tabIndex,
        className: rootClasses
      });

      var containerElement = href ? disabled ? 'span' : 'a' : 'div';
      return _react2.default.createElement(containerElement, props, iconElement, _react2.default.createElement(_Ink2.default, null), label, children);
    }
  }]);

  return MenuItem;
}(_react.Component);

MenuItem.propTypes = {
  payload: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string, _react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.array]),
  color: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  dense: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  active: _react.PropTypes.bool,
  icon: _react.PropTypes.node,
  label: _react.PropTypes.node,
  divider: _react.PropTypes.bool,
  autoFocus: _react.PropTypes.bool,
  onTouchTap: _react.PropTypes.func,
  children: _react.PropTypes.node
};
MenuItem.defaultProps = {};
MenuItem.contextTypes = {
  mdTheme: _react.PropTypes.object
};
exports.default = MenuItem;