'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    display: 'inline-block',
    verticalAlign: ' middle'
  }
};

var CircularProgress = function (_Component) {
  _inherits(CircularProgress, _Component);

  function CircularProgress() {
    _classCallCheck(this, CircularProgress);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CircularProgress).apply(this, arguments));
  }

  _createClass(CircularProgress, [{
    key: 'getPoint',
    value: function getPoint(size, radius, degree) {
      var distance = degree / 180 * Math.PI;

      return {
        x: radius * Math.sin(distance) + size / 2,
        y: this.props.trackWidth / 2 + radius * (1 - Math.cos(distance))
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var theme = this.context.theme || this.props.theme;
      var units = theme.units;
      var _props = this.props;
      var children = _props.children;
      var startDegree = _props.startDegree;

      var size = this.props.size * units.keylineIncrement;
      var progress = this.props.progress;


      var innerRadius = size / 2 - this.props.trackWidth / 2;
      var endDegree = startDegree + progress * 360 / 100;
      var start = this.getPoint(size, innerRadius, this.props.startDegree);
      var end = this.getPoint(size, innerRadius, endDegree);
      if (progress > 100) {
        progress = 0;
      } else if (progress < 0) {
        progress = 0;
      }
      var progressPath = null;
      if (progress < 50) {
        progressPath = 'M ' + start.x + ' ' + start.y + ' A ' + innerRadius + ' ' + innerRadius + ', 0, 0, 1, ' + end.x + ',' + end.y;
      } else {
        var middle = this.getPoint(size, innerRadius, startDegree + 180);
        progressPath = 'M ' + start.x + ' ' + start.y + ' A ' + innerRadius + ' ' + innerRadius + ', 0, 0, 1, ' + middle.x + ',' + middle.y + '\n        M ' + middle.x + ' ' + middle.y + ' A ' + innerRadius + ' ' + innerRadius + ', 0, 0, 1, ' + end.x + ',' + end.y;
      }

      var trackColor = this.props.trackColor || theme.text.divider;
      var progressColor = this.props.progressColor || theme.primary[500].material;

      var progressStyle = {
        strokeWidth: this.props.progressWidth,
        stroke: progressColor,
        fill: 'none'
      };

      var trackStyle = {
        fill: this.props.fillColor,
        stroke: trackColor,
        strokeWidth: this.props.trackWidth
      };

      var text = void 0;
      if (this.props.progress > 0) {
        text = _react2.default.createElement(
          'text',
          { x: size / 2, y: size / 2, fontSize: size / 4, fill: theme.text.default, textAnchor: 'middle', style: { alignmentBaseline: 'middle' } },
          Math.round(progress)
        );
      }

      return _react2.default.createElement(
        'svg',
        _extends({ style: styles.root }, this.props, { width: size, height: size, viewBox: '0 0 ' + size + ' ' + size }),
        _react2.default.createElement('circle', {
          cx: size / 2,
          cy: size / 2,
          r: innerRadius,
          style: trackStyle
        }),
        progress > 0 ? _react2.default.createElement('path', {
          d: progressPath,
          style: progressStyle
        }) : null,
        progress > 0 ? _react2.default.createElement('circle', {
          cx: start.x,
          cy: start.y,
          r: this.props.cornersWidth,
          fill: progressColor
        }) : null,
        progress > 0 ? _react2.default.createElement('circle', {
          cx: end.x,
          cy: end.y,
          r: this.props.cornersWidth,
          fill: progressColor
        }) : null,
        text,
        children
      );
    }
  }]);

  return CircularProgress;
}(_react.Component);

CircularProgress.displayName = 'CircularProgress';
CircularProgress.propTypes = {
  children: _react.PropTypes.node,
  theme: _react.PropTypes.object,
  size: _react.PropTypes.number,
  startDegree: _react.PropTypes.number,
  endDegree: _react.PropTypes.number,
  progressWidth: _react.PropTypes.number,
  trackWidth: _react.PropTypes.number,
  cornersWidth: _react.PropTypes.number,
  progress: _react.PropTypes.number,
  fillColor: _react.PropTypes.string,
  trackColor: _react.PropTypes.string,
  progressColor: _react.PropTypes.string
};
CircularProgress.contextTypes = {
  theme: _react.PropTypes.object
};
CircularProgress.defaultProps = {
  fillColor: 'transparent',
  startDegree: 0,
  progress: 0,
  progressWidth: 4,
  trackWidth: 3.9,
  cornersWidth: 2,
  size: 1
};
exports.default = CircularProgress;