'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _DrawerContainer = require('./DrawerContainer');

var _DrawerContainer2 = _interopRequireDefault(_DrawerContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawer = function (_Component) {
  _inherits(Drawer, _Component);

  function Drawer() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Drawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Drawer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      position: _this.props.position
    }, _this.handleRequestOpen = function () {
      var onRequestOpen = _this.props.onRequestOpen;
      var position = _this.state.position;

      if (position < 1 && onRequestOpen) {
        onRequestOpen();
      }
    }, _this.handleRequestClose = function () {
      var onRequestClose = _this.props.onRequestClose;
      var position = _this.state.position;

      if (position > 0 && onRequestClose) {
        onRequestClose();
      }
    }, _this.onBodyTouchMove = function (event) {
      var right = _this.props.right;

      var deltaX = right ? _this.touchStartX - event.touches[0].pageX : event.touches[0].pageX - _this.touchStartX;
      var position = deltaX > 500 ? 1 : deltaX / 500;
      if (_this.state.position === 0 && deltaX < 0 || _this.state.position === 1 && deltaX > 0) {
        return;
      }
      if (position > 0.5 && deltaX > 0 && _this.props.onRequestOpen) {
        _this.touchStartX = event.touches[0].pageX;
        _this.touchStartY = event.touches[0].pageY;
        _this.props.onRequestOpen();
      } else if (position < 0.5 && deltaX < 1 && _this.props.onRequestClose) {
        _this.touchStartX = event.touches[0].pageX;
        _this.touchStartY = event.touches[0].pageY;
        _this.props.onRequestClose();
      } else if (Math.abs(position - _this.state.position) > 0.1) {
        _this.setState({ position: position });
      }
    }, _this.onBodyTouchEnd = function (event) {
      var position = _this.state.position;

      document.body.removeEventListener('touchmove', _this.onBodyTouchMove);
      document.body.removeEventListener('touchend', _this.onBodyTouchEnd);
      document.body.removeEventListener('touchcancel', _this.onBodyTouchEnd);
      if (position < 0.5 && _this.props.position === 0) {
        _this.setState({ position: 0 });
      }
    }, _this.onBodyTouchStart = function (event) {
      var right = _this.props.right;


      _this.touchStartX = event.touches[0].pageX;
      _this.touchStartY = event.touches[0].pageY;
      if (_this.state.position === 0 && (!right && _this.touchStartX > 100 || right && _this.touchStartX + 100 < window.innerWidth)) {
        return;
      }

      document.body.addEventListener('touchmove', _this.onBodyTouchMove);
      document.body.addEventListener('touchend', _this.onBodyTouchEnd);
      document.body.addEventListener('touchcancel', _this.onBodyTouchEnd);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Drawer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.position !== this.state.position) {
        this.setState({ position: nextProps.position });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('touchstart', this.onBodyTouchStart);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ['children']);

      var position = this.state.position;

      return _react2.default.createElement(
        _reactMotion.Motion,
        {
          style: {
            position: (0, _reactMotion.spring)(position, { stiffness: 300, damping: 25, precision: 0.01 })
          }
        },
        function (interpolated) {
          if (interpolated.position > 0) {
            return _react2.default.createElement(
              _DrawerContainer2.default,
              _extends({}, other, { onRequestClose: _this2.handleRequestClose, onRequestOpen: _this2.handleRequestOpen }, interpolated),
              children
            );
          }
          return null;
        }
      );
    }
  }]);

  return Drawer;
}(_react.Component);

Drawer.propTypes = {
  right: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  position: _react.PropTypes.number,
  onRequestClose: _react.PropTypes.func,
  onRequestOpen: _react.PropTypes.func
};
Drawer.defaultProps = {
  position: 0
};
exports.default = Drawer;