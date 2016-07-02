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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drawSize = 66;

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var size = _props.size;
      var className = _props.className;
      var strokeWidth = _props.strokeWidth;

      var other = _objectWithoutProperties(_props, ['size', 'className', 'strokeWidth']);

      var classes = (0, _classnames2.default)(css.spinner, className);
      return _react2.default.createElement(
        'svg',
        _extends({}, other, {
          className: classes,
          width: size - 1 + 'px',
          height: size - 1 + 'px',
          viewBox: '0 0 ' + drawSize + ' ' + drawSize
        }),
        _react2.default.createElement('circle', {
          className: css.path,
          fill: 'none',
          strokeWidth: strokeWidth,
          strokeLinecap: 'round',
          cx: drawSize / 2,
          cy: drawSize / 2,
          r: (drawSize - strokeWidth) / 2 })
      );
    }
  }]);

  return Spinner;
}(_react.Component);

Spinner.propTypes = {
  size: _react.PropTypes.number,
  strokeWidth: _react.PropTypes.number,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};
Spinner.defaultProps = {
  strokeWidth: _Styles.Units.phone.gutter.mini / 2,
  size: 64
};


var css = {
  spinner: 'oui_fu',
  path: 'oui_fv'
};

exports.default = Spinner;