'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: 'omd_cB',
  row: 'omd_cC',
  middle: 'omd_cD',
  responsiveRow: 'omd_cE',
  column: 'omd_cF'
};

var mixProps = function mixProps(style, props) {
  var divStyle = {};
  if (props.flex) {
    divStyle.flex = props.flex;
  }
  if (props.grow) {
    divStyle.flexGrow = props.grow;
  }
  if (props.shrink) {
    divStyle.flexShrink = props.shrink;
  }
  if (props.style) {
    return _extends({}, style, divStyle, props.style);
  } else {
    return _extends({}, style, divStyle);
  }
};

var View = function (_Component) {
  _inherits(View, _Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(View).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props;
      var className = _props.className;
      var middle = _props.middle;
      var row = _props.row;
      var column = _props.column;
      var children = _props.children;
      var responsiveRow = _props.responsiveRow;

      var other = _objectWithoutProperties(_props, ['className', 'middle', 'row', 'column', 'children', 'responsiveRow']);

      var classes = (0, _classnames2.default)(className, styles.root, (_classNames = {}, _defineProperty(_classNames, styles.row, row), _defineProperty(_classNames, styles.middle, middle), _defineProperty(_classNames, styles.responsiveRow, responsiveRow), _defineProperty(_classNames, styles.column, !row && column), _classNames));
      return _react2.default.createElement(
        'div',
        _extends({ className: classes }, other, { style: mixProps({}, this.props) }),
        children
      );
    }
  }]);

  return View;
}(_react.Component);

View.propTypes = {
  row: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  column: _react.PropTypes.bool,
  middle: _react.PropTypes.bool,
  auto: _react.PropTypes.bool,
  height: _react.PropTypes.string,
  style: _react.PropTypes.object,
  children: _react.PropTypes.node,
  flex: _react.PropTypes.number,
  grow: _react.PropTypes.number,
  shrink: _react.PropTypes.number,
  responsiveRow: _react.PropTypes.bool,
  width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
exports.default = View;