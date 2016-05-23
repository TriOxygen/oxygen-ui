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

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Styles = require('../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ESC = 27;

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Menu)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onMenuItemTap = function (furtherTap, payload, label, event) {
      var _this$props = _this.props;
      var onMenuItemTap = _this$props.onMenuItemTap;
      var disabled = _this$props.disabled;

      if (disabled) {
        return;
      }
      if (furtherTap) {
        furtherTap(payload, label);
      }
      onMenuItemTap && onMenuItemTap(payload, label);
      if (_this.props.onRequestClose) {
        _this.props.onRequestClose();
      }
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, _this.handleKey = function (event) {
      var keyCode = event.keyCode;
      var _this$props2 = _this.props;
      var onRequestClose = _this$props2.onRequestClose;
      var disabled = _this$props2.disabled;

      if (disabled) {
        return;
      }
      onRequestClose && keyCode === ESC && onRequestClose();
    }, _this.onBodyTouchStart = function (event) {
      if (!_this.isDescendant(_this._node, event.target)) {
        if (_this.props.onRequestClose) {
          _this.props.onRequestClose();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        mdColor: this.props.mdColor
      };
    }
  }, {
    key: 'isDescendant',
    value: function isDescendant(parent, child) {
      var node = child.parentNode;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var closeOnEsc = _props.closeOnEsc;
      var onRequestClose = _props.onRequestClose;

      if (onRequestClose) {
        this._node = _reactDom2.default.findDOMNode(this);
        document.body.addEventListener('touchstart', this.onBodyTouchStart);
        document.body.addEventListener('mousedown', this.onBodyTouchStart);
      }
      if (closeOnEsc) {
        document.addEventListener('keyup', this.handleKey);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('touchstart', this.onBodyTouchStart);
      document.body.removeEventListener('mousedown', this.onBodyTouchStart);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var children = _props2.children;
      var mdColor = _props2.mdColor;
      var padded = _props2.padded;

      var other = _objectWithoutProperties(_props2, ['children', 'mdColor', 'padded']);

      return _react2.default.createElement(
        _Paper2.default,
        _extends({}, other, { className: padded && css.padded || null }),
        _react2.default.Children.map(children, function (child) {
          return _react2.default.cloneElement(child, { onTouchTap: _this2.onMenuItemTap.bind(_this2, child.props.onTouchTap) });
        })
      );
    }
  }]);

  return Menu;
}(_react.Component);

Menu.propTypes = {
  children: _react.PropTypes.node,
  closeOnEsc: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  padded: _react.PropTypes.bool,
  mdColor: _react.PropTypes.string,
  onMenuItemTap: _react.PropTypes.func,
  onRequestClose: _react.PropTypes.func
};
Menu.defaultProps = {
  closeOnEsc: true,
  padded: true
};
Menu.childContextTypes = {
  mdColor: _react.PropTypes.string
};


var css = {
  padded: 'omd_bp'
};

exports.default = Menu;