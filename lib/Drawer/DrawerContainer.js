'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Overlay = require('../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Styles = require('../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ESC = 27;

var DrawerContainer = function (_Component) {
  _inherits(DrawerContainer, _Component);

  function DrawerContainer() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DrawerContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DrawerContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTap = function () {
      if (_this.props.onRequestClose) {
        _this.props.onRequestClose();
      }
    }, _this.handleKey = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === ESC && _this.props.onRequestClose) {
        _this.props.onRequestClose();
      }
    }, _this.stop = function (event) {
      var onRequestOpen = _this.props.onRequestOpen;

      if (onRequestOpen) {
        onRequestOpen();
      }
      event.preventDefault();
      event.stopPropagation();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DrawerContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var closeOnEsc = this.props.closeOnEsc;

      if (closeOnEsc) {
        document.addEventListener('keyup', this.handleKey);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var closeOnEsc = this.props.closeOnEsc;

      if (closeOnEsc) {
        document.removeEventListener('keyup', this.handleKey);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var overlay = _props.overlay;
      var width = _props.width;
      var right = _props.right;
      var children = _props.children;
      var position = this.props.position;

      if (position > 1) {
        position = 1;
      }
      var transform = right ? 'translate3d(100vw,0,0) translateX(' + position * -100 + '%)' : 'translate3d(' + (position - 1) * 100 + '%, 0, 0)';
      var overlayPosition = position > 0 ? 0 : -100;
      return _react2.default.createElement(
        _Portal2.default,
        { menu: true },
        overlay && _react2.default.createElement(_Overlay2.default, {
          center: false,
          onTouchTap: this.handleTap,
          onKeyup: this.handleKey,
          style: { opacity: position, top: overlayPosition + '%' }
        }),
        _react2.default.createElement(
          _Paper2.default,
          {
            rounded: false,
            style: { width: width, transform: transform },
            className: css.container,
            onTouchTap: this.stop
          },
          children
        )
      );
    }
  }]);

  return DrawerContainer;
}(_react.Component);

DrawerContainer.propTypes = {
  position: _react.PropTypes.number,
  width: _react.PropTypes.number,
  children: _react.PropTypes.node,
  right: _react.PropTypes.bool,
  overlay: _react.PropTypes.bool,
  closeOnEsc: _react.PropTypes.bool,
  onRequestClose: _react.PropTypes.func,
  onRequestOpen: _react.PropTypes.func
};
DrawerContainer.defaultProps = {
  overlay: true,
  right: false,
  closeOnEsc: true,
  width: _Styles.Units.phone.keylineIncrement * 4
};
exports.default = DrawerContainer;


var css = {
  container: 'omd_P'
};