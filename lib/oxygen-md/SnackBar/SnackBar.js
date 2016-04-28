'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _SnackBarContainer = require('./SnackBarContainer');

var _SnackBarContainer2 = _interopRequireDefault(_SnackBarContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnackBar = function (_Component) {
  _inherits(SnackBar, _Component);

  function SnackBar() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, SnackBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SnackBar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleRequestNext = function () {
      if (_this.props.onRequestNext) {
        _this.props.onRequestNext();
      }
    }, _this.hide = function () {
      _this.setState({ open: false });
    }, _this.show = function () {
      var timeout = _this.props.timeout;

      _this.setState({ open: true });
      _this._timer = setTimeout(function () {
        _this._timer = null;
        _this.hide();
      }, timeout);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SnackBar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.time != nextProps.time && nextProps.time) {
        this.show();
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.message) {
        this.show();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var open = this.state.open;


      return _react2.default.createElement(
        _reactMotion.Motion,
        { style: { position: (0, _reactMotion.spring)(open ? 1 : 0, { stiffness: 300, damping: 25 }) } },
        function (interpolated) {
          if (interpolated.position > 0) {
            return _react2.default.createElement(_SnackBarContainer2.default, _extends({}, _this2.props, interpolated, { onRequestNext: _this2.handleRequestNext }));
          }
          return null;
        }
      );
    }
  }]);

  return SnackBar;
}(_react.Component);

SnackBar.propTypes = {
  message: _react.PropTypes.string,
  time: _react.PropTypes.number,
  timeout: _react.PropTypes.number,
  onRequestNext: _react.PropTypes.func
};
SnackBar.defaultProps = {
  timeout: 2500
};
exports.default = SnackBar;