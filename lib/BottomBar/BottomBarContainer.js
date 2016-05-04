'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Overlay = require('../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ESC = 27;

var BottomBarContainer = function (_Component) {
  _inherits(BottomBarContainer, _Component);

  function BottomBarContainer() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, BottomBarContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(BottomBarContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTap = function () {
      var onRequestClose = _this.props.onRequestClose;

      onRequestClose && onRequestClose();
    }, _this.handleKey = function (event) {
      var keyCode = event.keyCode;
      var onRequestClose = _this.props.onRequestClose;

      var escPressed = keyCode === ESC;
      escPressed && onRequestClose && onRequestClose();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BottomBarContainer, [{
    key: 'getStyle',
    value: function getStyle() {
      var position = this.props.position;

      if (position > 1) {
        position = 1;
      }
      return Object.assign({}, {
        transform: 'translate3d(0, ' + (1 - position) * 100 + '%, 0)'
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keyup', this.handleKey);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keyup', this.handleKey);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var position = _props.position;
      var opacity = _props.opacity;
      var top = _props.top;

      var other = _objectWithoutProperties(_props, ['children', 'position', 'opacity', 'top']);

      return _react2.default.createElement(
        _Portal2.default,
        { dialog: true },
        _react2.default.createElement(_Overlay2.default, {
          onTouchTap: this.handleTap,
          onKeyup: this.handleKey,
          style: { top: top + '%', opacity: opacity }
        }),
        _react2.default.createElement(
          _Paper2.default,
          _extends({}, other, { className: css.container, rounded: false, style: this.getStyle() }),
          children
        )
      );
    }
  }]);

  return BottomBarContainer;
}(_react.Component);

BottomBarContainer.propTypes = {
  position: _react.PropTypes.number,
  onRequestClose: _react.PropTypes.func,
  children: _react.PropTypes.node
};
BottomBarContainer.defaultProps = {};
BottomBarContainer.contextTypes = {
  mdTheme: _react.PropTypes.object
};
exports.default = BottomBarContainer;


var css = {
  container: 'omd_ct'
};