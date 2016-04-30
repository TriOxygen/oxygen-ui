'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('../Styles');

var _Ink = require('../Ink');

var _Ink2 = _interopRequireDefault(_Ink);

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Divider = require('../Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  listItem: 'omd_bH',
  icon: 'omd_bI',
  root: 'omd_bJ',
  dense: 'omd_bK'
};

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ListItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.handleTouchTap = function () {
      var _this$props = _this.props;
      var onTouchTap = _this$props.onTouchTap;
      var payload = _this$props.payload;

      if (onTouchTap) {
        onTouchTap(payload);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListItem, [{
    key: 'getStyle',
    value: function getStyle() {
      var _context = this.context;
      var mdTheme = _context.mdTheme;
      var contextColor = _context.mdColor;
      var _state = this.state;
      var hover = _state.hover;
      var hasFocus = _state.hasFocus;
      var _props = this.props;
      var active = _props.active;
      var divider = _props.divider;
      var mdColor = _props.mdColor;
      var style = _props.style;

      var colors = mdTheme.colors[mdColor || contextColor || mdTheme.primary];
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
      } : null, style);
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      this.setState({ hover: true });
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.setState({ hover: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var dense = _props2.dense;
      var children = _props2.children;
      var icon = _props2.icon;
      var style = _props2.style;
      var onTouchTap = _props2.onTouchTap;

      var other = _objectWithoutProperties(_props2, ['dense', 'children', 'icon', 'style', 'onTouchTap']);

      var iconElement = void 0;
      if (icon) {
        iconElement = _react2.default.cloneElement(icon, { className: styles.icon });
      }
      var rootClasses = (0, _classnames2.default)(styles.root, _defineProperty({}, styles.dense, dense));
      return _react2.default.createElement(
        'div',
        _extends({
          onMouseEnter: this.handleMouseEnter.bind(this),
          onMouseLeave: this.handleMouseLeave.bind(this),
          style: this.getStyle(),
          onTouchTap: this.handleTouchTap,
          className: rootClasses
        }, other),
        _react2.default.createElement(
          _View2.default,
          { className: styles.listItem, row: true },
          iconElement,
          _react2.default.createElement(_Ink2.default, null),
          children
        )
      );
    }
  }]);

  return ListItem;
}(_react.Component);

ListItem.propTypes = {
  payload: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string, _react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.array]),
  mdColor: _react.PropTypes.string,
  style: _react.PropTypes.object,
  dense: _react.PropTypes.bool,
  active: _react.PropTypes.bool,
  divider: _react.PropTypes.bool,
  icon: _react.PropTypes.node,
  children: _react.PropTypes.node,
  onTouchTap: _react.PropTypes.func
};
ListItem.contextTypes = {
  mdTheme: _react.PropTypes.object,
  mdColor: _react.PropTypes.string
};
exports.default = ListItem;