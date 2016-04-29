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

var _Ink = require('./Ink');

var _Ink2 = _interopRequireDefault(_Ink);

var _Styles = require('./Styles');

var _IconButton2 = require('./IconButton');

var _IconButton3 = _interopRequireDefault(_IconButton2);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Menu = require('./Menus/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuButton = function (_IconButton) {
  _inherits(MenuButton, _IconButton);

  function MenuButton() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(MenuButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hover: false,
      active: false,
      menu: false
    }, _this.handleClick = function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, _this.handleTouchTap = function (event) {
      event.preventDefault();
      event.stopPropagation();

      var _this$_node$getBoundi = _this._node.getBoundingClientRect();

      var left = _this$_node$getBoundi.left;
      var top = _this$_node$getBoundi.top;
      var width = _this$_node$getBoundi.width;

      _this.setState({ menu: !_this.state.menu, left: left, top: top, width: width });
    }, _this.handleMenuClose = function () {
      _this.setState({ menu: false });
    }, _this.handleKeyPress = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
        _this.handleTouchTap(event);
        event.preventDefault();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._node = _reactDom2.default.findDOMNode(this);
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _this2 = this;

      var children = this.props.children;
      var _state = this.state;
      var left = _state.left;
      var top = _state.top;
      var width = _state.width;
      var menu = _state.menu;

      return _react2.default.createElement(
        _reactMotion.Motion,
        { style: { progress: (0, _reactMotion.spring)(menu ? 1 : 0) } },
        function (interpolated) {
          var progress = interpolated.progress;

          if (progress > 0) {
            return _react2.default.createElement(
              _Portal2.default,
              { positioned: true, menu: true, style: { transform: 'translate3d(' + (left - 256 + width) + 'px, ' + top + 'px, 0)' } },
              _react2.default.createElement(
                _Menu2.default,
                { onRequestClose: _this2.handleMenuClose, style: { position: 'relative', width: 256, top: 32 - progress * 32, opacity: progress } },
                children
              )
            );
          }
          return null;
        }
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var dense = _props.dense;
      var disabled = _props.disabled;
      var children = _props.children;
      var link = _props.link;
      var icon = _props.icon;

      var other = _objectWithoutProperties(_props, ['dense', 'disabled', 'children', 'link', 'icon']);

      var theme = this.props.theme || this.context.theme;
      var ink = !disabled && _react2.default.createElement(_Ink2.default, null);
      var buttonClasses = (0, _classnames2.default)(_IconButton2.styles.iconButton, dense ? _IconButton2.styles.dense : null);
      var menuElement = this.renderMenu();
      var props = _extends({
        className: buttonClasses,
        disabled: disabled,
        style: this.getButtonStyles(theme)
      }, other, {
        onKeyPress: this.handleKeyPress,
        onTouchTap: this.handleTouchTap,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      });
      var containerElement = link ? disabled ? 'span' : 'a' : 'button';
      return _react2.default.createElement(containerElement, props, icon, ink, menuElement);
    }
  }]);

  return MenuButton;
}(_IconButton3.default);

MenuButton.propTypes = {
  disabled: _react.PropTypes.bool,
  dense: _react.PropTypes.bool,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  mdColor: _react.PropTypes.string,
  hoverColor: _react.PropTypes.string,
  children: _react.PropTypes.node,
  icon: _react.PropTypes.node,
  link: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  onTouchTap: _react.PropTypes.func,
  theme: _react.PropTypes.object
};
exports.default = MenuButton;