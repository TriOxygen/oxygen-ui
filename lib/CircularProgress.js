'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('./Styles');

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var css = {
  root: 'omd_cJ',
  fg: 'omd_cK',
  bg: 'omd_cL'
};

var CircularProgress = function (_Component) {
  _inherits(CircularProgress, _Component);

  function CircularProgress() {
    _classCallCheck(this, CircularProgress);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CircularProgress).apply(this, arguments));
  }

  _createClass(CircularProgress, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var strokeWidth = _props.strokeWidth;
      var size = _props.size;
      var progress = _props.progress;
      var backgroundColor = _props.backgroundColor;
      var mdColor = _props.mdColor;

      var radius = size / 2;
      var _context = this.context;
      var mdTheme = _context.mdTheme;
      var contextColor = _context.mdColor;

      var colors = mdTheme.colors[mdColor || contextColor];
      var foregroundColor = colors && colors[500].hex || mdTheme.colors[mdTheme.primary][500].hex;
      var innerRadius = radius - strokeWidth / 2;
      var viewBox = '0 0 ' + size + ' ' + size;
      var dashArray = innerRadius * Math.PI * 2;
      var dashOffset = dashArray - dashArray * progress / 100;

      return _react2.default.createElement(
        'svg',
        {
          className: css.root,
          width: size,
          height: size,
          viewBox: viewBox
        },
        _react2.default.createElement('circle', {
          className: css.bg,
          style: {
            stroke: backgroundColor
          },
          cx: radius,
          cy: radius,
          r: innerRadius,
          strokeWidth: strokeWidth + 'px'
        }),
        _react2.default.createElement('circle', {
          className: css.fg,
          cx: radius,
          cy: radius,
          r: innerRadius,
          strokeLinecap: 'round',
          strokeWidth: strokeWidth + 'px',
          style: {
            stroke: foregroundColor,
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }
        })
      );
    }
  }]);

  return CircularProgress;
}(_react.Component);

CircularProgress.propTypes = {
  children: _react.PropTypes.node,
  strokeWidth: _react.PropTypes.number,
  size: _react.PropTypes.number,
  progress: _react.PropTypes.number,
  backgroundColor: _react.PropTypes.string,
  mdColor: _react.PropTypes.string
};
CircularProgress.defaultProps = {
  backgroundColor: '#DDDDDD',
  size: _Styles.Units.phone.keylineIncrement,
  progress: 50,
  strokeWidth: 4
};
CircularProgress.contextTypes = {
  mdTheme: _react.PropTypes.object,
  mdColor: _react.PropTypes.string
};
exports.default = CircularProgress;