'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('./Styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var css = {
  root: 'omd_cM',
  margin: 'omd_cU',
  display1: 'omd_cN',
  display2: 'omd_cO',
  display3: 'omd_cP',
  display4: 'omd_cQ',
  headline: 'omd_cR',
  subheading: 'omd_cS',
  title: 'omd_cT'
};

var Heading = function (_Component) {
  _inherits(Heading, _Component);

  function Heading() {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Heading).apply(this, arguments));
  }

  _createClass(Heading, [{
    key: 'getStyle',
    value: function getStyle(theme) {
      var mdColor = this.props.mdColor;
      var _context = this.context;
      var mdTheme = _context.mdTheme;
      var contextColor = _context.mdColor;

      var colors = mdTheme.colors[mdColor || contextColor];
      return Object.assign({}, colors && {
        backgroundColor: colors[500].hex,
        color: colors[500].text.default
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var margin = _props.margin;
      var display4 = _props.display4;
      var display3 = _props.display3;
      var display2 = _props.display2;
      var display1 = _props.display1;
      var subheading = _props.subheading;
      var title = _props.title;

      var other = _objectWithoutProperties(_props, ['className', 'children', 'margin', 'display4', 'display3', 'display2', 'display1', 'subheading', 'title']);

      var classes = (0, _classnames2.default)(css.root, className, (_classNames = {}, _defineProperty(_classNames, css.margin, margin), _defineProperty(_classNames, css.display4, display4), _defineProperty(_classNames, css.display3, display3), _defineProperty(_classNames, css.display2, display2), _defineProperty(_classNames, css.display1, display1), _defineProperty(_classNames, css.subheading, subheading), _defineProperty(_classNames, css.title, title), _classNames));
      return _react2.default.createElement(
        'div',
        _extends({}, other, { className: classes, style: this.getStyle() }),
        children
      );
    }
  }]);

  return Heading;
}(_react.Component);

Heading.propTypes = {
  children: _react.PropTypes.node,
  display4: _react.PropTypes.bool,
  display3: _react.PropTypes.bool,
  display2: _react.PropTypes.bool,
  display1: _react.PropTypes.bool,
  subheading: _react.PropTypes.bool,
  mdColor: _react.PropTypes.string,
  title: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  margin: _react.PropTypes.bool
};
Heading.defaultProps = {
  margin: true
};
Heading.contextTypes = {
  mdTheme: _react.PropTypes.object
};
exports.default = Heading;