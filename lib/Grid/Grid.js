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

var _GridCell = require('./GridCell');

var _GridCell2 = _interopRequireDefault(_GridCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props;
      var top = _props.top;
      var gutter = _props.gutter;
      var className = _props.className;
      var bottom = _props.bottom;
      var center = _props.center;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ['top', 'gutter', 'className', 'bottom', 'center', 'children']);

      var classes = (0, _classnames2.default)(css.grid, className, (_classNames = {}, _defineProperty(_classNames, css.top, top), _defineProperty(_classNames, css.bottom, bottom), _defineProperty(_classNames, css.gutter, gutter), _defineProperty(_classNames, css.center, center), _classNames));
      return _react2.default.createElement(
        'div',
        _extends({ className: classes }, other),
        _react2.default.Children.map(children, function (child) {
          if (child.type == _GridCell2.default) {
            return _react2.default.cloneElement(child, { gutter: gutter });
          }
          return child;
        })
      );
    }
  }]);

  return Grid;
}(_react.Component);

Grid.propTypes = {
  theme: _react.PropTypes.object,
  top: _react.PropTypes.bool,
  bottom: _react.PropTypes.bool,
  gutter: _react.PropTypes.bool,
  center: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};
Grid.defaultProps = {};
Grid.contextTypes = {
  theme: _react.PropTypes.object
};
exports.default = Grid;


var css = {
  grid: 'omd_W',
  gutter: 'omd_X',
  top: 'omd_Y',
  bottom: 'omd_Z',
  center: 'omd_0'
};