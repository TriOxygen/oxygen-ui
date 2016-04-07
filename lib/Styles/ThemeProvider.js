'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Colors = require('./Colors');

var _Colors2 = _interopRequireDefault(_Colors);

var _Theme = require('./Theme');

var _Theme2 = _interopRequireDefault(_Theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var material = _Colors2.default.material;

var ThemeProvider = function (_Component) {
  _inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    _classCallCheck(this, ThemeProvider);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ThemeProvider).apply(this, arguments));

    var _this$props = _this.props;
    var primary = _this$props.primary;
    var secondary = _this$props.secondary;
    var tertiary = _this$props.tertiary;
    var main = _this$props.main;

    _this.theme = new _Theme2.default(material[primary], material[secondary], material[tertiary], main);
    return _this;
  }

  _createClass(ThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        theme: this.theme
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var primary = nextProps.primary;
      var secondary = nextProps.secondary;
      var tertiary = nextProps.tertiary;
      var main = nextProps.main;

      this.theme = new _Theme2.default(material[primary], material[secondary], material[tertiary], main);
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.Children.only(children);
    }
  }]);

  return ThemeProvider;
}(_react.Component);

ThemeProvider.propTypes = {
  children: _react.PropTypes.node,
  primary: _react.PropTypes.string,
  secondary: _react.PropTypes.string,
  tertiary: _react.PropTypes.string,
  main: _react.PropTypes.string
};
ThemeProvider.childContextTypes = {
  theme: _react.PropTypes.object,
  primary: _react.PropTypes.string,
  secondary: _react.PropTypes.string,
  tertiary: _react.PropTypes.string,
  main: _react.PropTypes.string
};


function mapStateToProps(state) {
  var theme = state.profile.settings.theme;

  return _extends({}, theme);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ThemeProvider);