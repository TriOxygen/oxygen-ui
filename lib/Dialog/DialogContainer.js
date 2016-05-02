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

var DialogContainer = function (_Component) {
  _inherits(DialogContainer, _Component);

  function DialogContainer() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DialogContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DialogContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTap = function () {
      if (_this.props.onRequestClose) {
        _this.props.onRequestClose();
      }
    }, _this.handleKey = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === ESC && _this.props.onRequestClose) {
        _this.props.onRequestClose();
      }
    }, _this.stop = function (event) {
      if (_this.props.onRequestOpen) {
        _this.props.onRequestOpen();
      }
      event.preventDefault();
      event.stopPropagation();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DialogContainer, [{
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
      var top = _props.top;
      var y = _props.y;
      var opacity = _props.opacity;

      return _react2.default.createElement(
        _Portal2.default,
        { dialog: true },
        _react2.default.createElement(_Overlay2.default, {
          onTouchTap: this.handleTap,
          key: 'dialog',
          style: { top: top + '%', opacity: opacity }
        }),
        _react2.default.createElement(
          _Paper2.default,
          {
            className: css.container,
            onTouchTap: this.stop,
            style: {
              opacity: opacity,
              transform: 'translate3d(0, ' + y * _Styles.Units.phone.keylineIncrement * 2 / 100 + 'px, 0)'
            }
          },
          children
        )
      );
    }
  }]);

  return DialogContainer;
}(_react.Component);

DialogContainer.propTypes = {
  children: _react.PropTypes.node,
  top: _react.PropTypes.number,
  y: _react.PropTypes.number,
  opacity: _react.PropTypes.number,
  onRequestClose: _react.PropTypes.func,
  onRequestOpen: _react.PropTypes.func
};
exports.default = DialogContainer;


var css = {
  container: 'omd_L'
};