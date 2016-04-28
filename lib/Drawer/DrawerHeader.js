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

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

var _Styles = require('../Styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrawerHeader = function (_Component) {
  _inherits(DrawerHeader, _Component);

  function DrawerHeader() {
    _classCallCheck(this, DrawerHeader);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DrawerHeader).apply(this, arguments));
  }

  _createClass(DrawerHeader, [{
    key: 'getStyle',
    value: function getStyle() {
      var mdTheme = this.context.mdTheme;
      var _props = this.props;
      var zDepth = _props.zDepth;
      var color = _props.color;
      var transparent = _props.transparent;

      var colors = mdTheme.colors[color || mdTheme.primary];

      return {
        backgroundColor: transparent ? mdTheme.theme.statusBar.material : colors[500].hex,
        color: transparent ? mdTheme.theme.statusBar.text.default : colors[500].text.default,
        boxShadow: _Styles.Shadow[zDepth]
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var children = _props2.children;

      var other = _objectWithoutProperties(_props2, ['className', 'children']);

      var classes = (0, _classnames2.default)(styles.root, className);
      return _react2.default.createElement(
        _View2.default,
        _extends({ row: true, className: classes, style: this.getStyle() }, other),
        children
      );
    }
  }]);

  return DrawerHeader;
}(_react.Component);

DrawerHeader.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  color: _react.PropTypes.string,
  transparent: _react.PropTypes.bool,
  zDepth: _react.PropTypes.number
};
DrawerHeader.contextTypes = {
  mdTheme: _react.PropTypes.object
};
exports.default = DrawerHeader;


var styles = {
  root: 'omd_Q'
};