'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('../Styles');

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: 'omd_cy'
};

var Toolbar = function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Toolbar).apply(this, arguments));
  }

  _createClass(Toolbar, [{
    key: 'getStyle',
    value: function getStyle() {
      var mdTheme = this.context.mdTheme;
      var _props = this.props;
      var zDepth = _props.zDepth;
      var mdColor = _props.mdColor;
      var transparent = _props.transparent;

      var colors = mdTheme.colors[mdColor];

      return Object.assign({}, transparent ? null : {
        backgroundColor: mdTheme.theme.statusBar.hex,
        color: mdTheme.theme.statusBar.text.default,
        boxShadow: _Styles.Shadow[zDepth]
      }, colors && !transparent ? {
        backgroundColor: colors[500].hex,
        color: colors[500].text.default
      } : null);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var leftElement = _props2.leftElement;
      var rightElement = _props2.rightElement;
      var className = _props2.className;
      var primary = _props2.primary;
      var secondary = _props2.secondary;

      var other = _objectWithoutProperties(_props2, ['children', 'leftElement', 'rightElement', 'className', 'primary', 'secondary']);

      var classes = (0, _classnames2.default)(styles.root, className);
      return _react2.default.createElement(
        _View2.default,
        _extends({ row: true, className: classes, style: this.getStyle() }, other),
        leftElement && _react2.default.createElement(
          _View2.default,
          { grow: 0 },
          leftElement
        ),
        _react2.default.createElement(
          _View2.default,
          { middle: true, grow: 1 },
          children
        ),
        rightElement && _react2.default.createElement(
          _View2.default,
          { grow: 0 },
          rightElement
        )
      );
    }
  }]);

  return Toolbar;
}(_react.Component);

Toolbar.propTypes = {
  zDepth: _react.PropTypes.number,
  transparent: _react.PropTypes.bool,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  leftElement: _react.PropTypes.node,
  rightElement: _react.PropTypes.node,
  mdColor: _react.PropTypes.string,
  className: _react.PropTypes.string
};
Toolbar.contextTypes = {
  mdTheme: _react.PropTypes.object
};
Toolbar.defaultProps = {
  zDepth: 1
};
exports.default = Toolbar;