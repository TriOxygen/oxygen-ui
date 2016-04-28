'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _DialogContainer = require('./DialogContainer');

var _DialogContainer2 = _interopRequireDefault(_DialogContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Dialog)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleRequestOpen = function () {
      var _this$props = _this.props;
      var open = _this$props.open;
      var onRequestOpen = _this$props.onRequestOpen;

      if (!open && onRequestOpen) {
        onRequestOpen();
      }
    }, _this.handleRequestClose = function () {
      var _this$props2 = _this.props;
      var open = _this$props2.open;
      var onRequestClose = _this$props2.onRequestClose;

      if (open && onRequestClose) {
        onRequestClose();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dialog, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var open = _props.open;
      var children = _props.children;


      return _react2.default.createElement(
        _reactMotion.Motion,
        { style: { y: (0, _reactMotion.spring)(open ? 100 : 0, { stiffness: 300, damping: 25 }), opacity: (0, _reactMotion.spring)(open ? 1 : 0), top: open ? 0 : -100 } },
        function (interpolated) {
          if (interpolated.opacity > 0) {
            return _react2.default.createElement(
              _DialogContainer2.default,
              _extends({}, interpolated, { onRequestClose: _this2.handleRequestClose, onRequestOpen: _this2.handleRequestOpen }),
              children
            );
          }
          return null;
        }
      );
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.propTypes = {
  children: _react.PropTypes.node,
  open: _react.PropTypes.bool,
  onRequestClose: _react.PropTypes.func,
  onRequestOpen: _react.PropTypes.func
};
Dialog.defaultProps = {
  open: false
};
exports.default = Dialog;