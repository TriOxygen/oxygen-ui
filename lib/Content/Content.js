'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContentContainer = require('./ContentContainer');

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentWithFixedHeader = function (_Component) {
  _inherits(ContentWithFixedHeader, _Component);

  function ContentWithFixedHeader() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ContentWithFixedHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ContentWithFixedHeader)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      headerVisible: true,
      autoHide: false
    }, _this.handleScroll = function (direction, scrollTop) {

      if (direction === 'down' && scrollTop > 64 && _this.state.headerVisible) {
        _this.setState({ headerVisible: false });
      } else if (direction === 'up' && !_this.state.headerVisible) {
        _this.setState({ headerVisible: true });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContentWithFixedHeader, [{
    key: 'renderSimple',
    value: function renderSimple(props, children) {
      return _react2.default.createElement(
        _ContentContainer2.default,
        props,
        children
      );
    }
  }, {
    key: 'renderAutoHide',
    value: function renderAutoHide(props, children, header, Wrapper) {
      var _this2 = this;

      var headerVisible = this.state.headerVisible;

      return _react2.default.createElement(
        _reactMotion.Motion,
        { style: { top: (0, _reactMotion.spring)(headerVisible ? 0 : 1, { stiffness: 300, damping: 25 }) } },
        function (interpolated) {
          var top = Math.floor(interpolated.top * 100) / 100;
          var headerComponent = _react2.default.cloneElement(header, _extends({}, header.props, {
            style: {
              transform: 'translate3d(0, ' + top * -60 + 'px, 0)'
            }
          }));
          return _react2.default.createElement(
            Wrapper,
            props,
            headerComponent,
            _react2.default.createElement(
              _ContentContainer2.default,
              { onScroll: _this2.handleScroll, style: { top: top * -56 } },
              children
            )
          );
        }
      );
    }
  }, {
    key: 'renderFixed',
    value: function renderFixed(props, children, header, Wrapper) {
      return _react2.default.createElement(
        Wrapper,
        props,
        header,
        _react2.default.createElement(
          _ContentContainer2.default,
          null,
          children
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var header = _props.header;
      var Wrapper = _props.Wrapper;
      var autoHide = _props.autoHide;

      var other = _objectWithoutProperties(_props, ['children', 'header', 'Wrapper', 'autoHide']);

      if (!header || !Wrapper) {
        return this.renderSimple(other, children);
      }
      if (autoHide) {
        return this.renderAutoHide(other, children, header, Wrapper);
      }
      return this.renderFixed(other, children, header, Wrapper);
    }
  }]);

  return ContentWithFixedHeader;
}(_react.Component);

ContentWithFixedHeader.propTypes = {
  children: _react.PropTypes.node,
  Wrapper: _react.PropTypes.func,
  header: _react.PropTypes.node,
  autoHide: _react.PropTypes.bool
};
exports.default = ContentWithFixedHeader;