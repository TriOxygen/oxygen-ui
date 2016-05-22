'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Styles = require('../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridCell = function (_Component) {
  _inherits(GridCell, _Component);

  function GridCell() {
    _classCallCheck(this, GridCell);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GridCell).apply(this, arguments));
  }

  _createClass(GridCell, [{
    key: 'getStyle',
    value: function getStyle() {
      var _props = this.props;
      var size = _props.size;
      var style = _props.style;

      var flexSize = size && (size < 1 ? size * 100 + '%' : size + 'px') || null;
      return Object.assign({}, style, {
        flex: flexSize ? '0 0 ' + flexSize : 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props;
      var top = _props2.top;
      var className = _props2.className;
      var gutter = _props2.gutter;
      var bottom = _props2.bottom;
      var center = _props2.center;
      var children = _props2.children;

      var other = _objectWithoutProperties(_props2, ['top', 'className', 'gutter', 'bottom', 'center', 'children']);

      var classes = (0, _classnames2.default)(css.cell, className, (_classNames = {}, _defineProperty(_classNames, css.top, top), _defineProperty(_classNames, css.bottom, bottom), _defineProperty(_classNames, css.gutter, gutter), _defineProperty(_classNames, css.center, center), _classNames));
      return _react2.default.createElement(
        'div',
        _extends({}, other, { style: this.getStyle(), className: classes }),
        children
      );
    }
  }]);

  return GridCell;
}(_react.Component);

GridCell.propTypes = {
  gutter: _react.PropTypes.bool,
  top: _react.PropTypes.bool,
  bottom: _react.PropTypes.bool,
  center: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  size: _react.PropTypes.number,
  style: _react.PropTypes.object,
  children: _react.PropTypes.node
};
GridCell.defaultProps = {
  // center: true,
  top: true
};
exports.default = GridCell;


var css = {
  cell: 'omd_cj',
  gutter: 'omd_ck',
  top: 'omd_cl',
  bottom: 'omd_cm',
  center: 'omd_cn'
};