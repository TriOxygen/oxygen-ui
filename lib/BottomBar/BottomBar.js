'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _BottomBarContainer = require('./BottomBarContainer');

var _BottomBarContainer2 = _interopRequireDefault(_BottomBarContainer);

var _EmbeddedBottomBarContainer = require('./EmbeddedBottomBarContainer');

var _EmbeddedBottomBarContainer2 = _interopRequireDefault(_EmbeddedBottomBarContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BottomBar = function (_Component) {
  _inherits(BottomBar, _Component);

  function BottomBar() {
    _classCallCheck(this, BottomBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BottomBar).apply(this, arguments));
  }

  _createClass(BottomBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var open = _props.open;
      var embed = _props.embed;

      return _react2.default.createElement(
        _reactMotion.Motion,
        { style: { opacity: (0, _reactMotion.spring)(open ? 1 : 0), position: (0, _reactMotion.spring)(open ? 1 : 0, { stiffness: 300, damping: 25 }) } },
        function (interpolated) {
          if (interpolated.position > 0) {
            if (embed) {
              return _react2.default.createElement(_EmbeddedBottomBarContainer2.default, _extends({}, _this2.props, interpolated, { top: open ? 0 : -100 }));
            } else {
              return _react2.default.createElement(_BottomBarContainer2.default, _extends({}, _this2.props, interpolated, { top: open ? 0 : -100 }));
            }
          }
          return null;
        }
      );
    }
  }]);

  return BottomBar;
}(_react.Component);

BottomBar.propTypes = {
  open: _react.PropTypes.bool,
  embed: _react.PropTypes.bool
};
BottomBar.defaultProps = {
  embed: false
};
exports.default = BottomBar;