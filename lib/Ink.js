'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Equations = require('./Ink/Equations');

var _Equations2 = _interopRequireDefault(_Equations);

var _store = require('./Ink/store');

var _store2 = _interopRequireDefault(_store);

var _pixelRatio = require('./Ink/pixelRatio');

var _pixelRatio2 = _interopRequireDefault(_pixelRatio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global DocumentTouch*/


var MOUSE_LEFT = 0;
var TAU = Math.PI * 2;
var hasTouch = typeof window !== 'undefined' && ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);

var styles = {
  root: 'omd_9'
};

var Ink = function (_Component) {
  _inherits(Ink, _Component);

  function Ink() {
    _classCallCheck(this, Ink);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ink).apply(this, arguments));

    _this.state = {
      color: 'transparent',
      density: 1,
      height: 0,
      store: (0, _store2.default)(_this.tick.bind(_this)),
      touchEvents: _this.touchEvents(),
      width: 0
    };
    return _this;
  }

  _createClass(Ink, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      for (var prop in nextProps) {
        if (this.props[prop] !== nextProps[prop]) return true;
      }

      for (var _prop in nextState) {
        if (this.state[_prop] !== nextState[_prop]) return true;
      }

      return false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.state.store.stop();
    }
  }, {
    key: 'makeBlot',
    value: function makeBlot(blot) {
      var _state = this.state;
      var ctx = _state.ctx;
      var height = _state.height;
      var width = _state.width;
      var x = blot.x;
      var y = blot.y;
      var radius = blot.radius;


      ctx.globalAlpha = _Equations2.default.getBlotOpacity(blot, this.props.opacity);
      ctx.beginPath();

      if (this.props.recenter) {
        var size = Math.max(height, width);

        x += _Equations2.default.getBlotShiftX(blot, size, width);
        y += _Equations2.default.getBlotShiftY(blot, size, height);
      }

      ctx.arc(x, y, radius * _Equations2.default.getBlotScale(blot), 0, TAU);

      ctx.closePath();
      ctx.fill();
    }
  }, {
    key: 'pushBlot',
    value: function pushBlot(timeStamp, clientX, clientY) {
      var _this2 = this;

      var el = this.refs.canvas;

      var _el$getBoundingClient = el.getBoundingClientRect();

      var top = _el$getBoundingClient.top;
      var bottom = _el$getBoundingClient.bottom;
      var left = _el$getBoundingClient.left;
      var right = _el$getBoundingClient.right;

      var _window$getComputedSt = window.getComputedStyle(el);

      var color = _window$getComputedSt.color;


      var ctx = this.state.ctx || el.getContext('2d');
      var density = (0, _pixelRatio2.default)(ctx);
      var height = bottom - top;
      var width = right - left;
      var radius = this.props.radius || _Equations2.default.getMaxRadius(height, width);

      this.setState({ color: color, ctx: ctx, density: density, height: height, width: width }, function () {
        _this2.state.store.add({
          duration: _this2.props.duration,
          mouseDown: timeStamp,
          mouseUp: 0,
          radius: radius,
          x: clientX - left,
          y: clientY - top
        });
      });
    }
  }, {
    key: 'touchEvents',
    value: function touchEvents() {
      if (this.props.hasTouch) {
        return {
          onTouchStart: this._onPress.bind(this),
          onTouchEnd: this._onRelease.bind(this),
          onTouchCancel: this._onRelease.bind(this),
          onTouchLeave: this._onRelease.bind(this),
          onMouseDown: this._onPress.bind(this),
          onMouseUp: this._onRelease.bind(this),
          onMouseLeave: this._onRelease.bind(this)
        };
      }
      return {
        onMouseDown: this._onPress.bind(this),
        onMouseUp: this._onRelease.bind(this),
        onMouseLeave: this._onRelease.bind(this)
      };
    }
  }, {
    key: 'tick',
    value: function tick() {
      var _state2 = this.state;
      var ctx = _state2.ctx;
      var color = _state2.color;
      var density = _state2.density;
      var height = _state2.height;
      var width = _state2.width;
      var store = _state2.store;

      ctx.save();
      ctx.scale(density, density);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

      if (this.props.background) {
        ctx.globalAlpha = store.getTotalOpacity(this.props.opacity);
        ctx.fillRect(0, 0, width, height);
      }

      store.each(this.makeBlot, this);
      ctx.restore();
    }
  }, {
    key: '_onPress',
    value: function _onPress(event) {
      var button = event.button;
      var ctrlKey = event.ctrlKey;
      var clientX = event.clientX;
      var clientY = event.clientY;
      var changedTouches = event.changedTouches;

      var timeStamp = Date.now();

      if (changedTouches) {
        for (var index = 0; index < changedTouches.length; index++) {
          this.pushBlot(timeStamp, changedTouches[index].clientX, changedTouches[index].clientY);
        }
      } else if (button === MOUSE_LEFT && !ctrlKey) {
        this.pushBlot(timeStamp, clientX, clientY);
      }
    }
  }, {
    key: '_onRelease',
    value: function _onRelease() {
      this.state.store.release(Date.now());
    }
  }, {
    key: 'render',
    value: function render() {
      var _state3 = this.state;
      var density = _state3.density;
      var height = _state3.height;
      var width = _state3.width;
      var touchEvents = _state3.touchEvents;


      return _react2.default.createElement('canvas', _extends({
        ref: 'canvas',
        className: styles.root,
        style: _extends({}, this.props.style),
        height: height * density,
        width: width * density,
        onDragOver: this._onRelease
      }, touchEvents));
    }
  }]);

  return Ink;
}(_react.Component);

Ink.propTypes = {
  background: _react.PropTypes.bool,
  duration: _react.PropTypes.number,
  opacity: _react.PropTypes.number,
  radius: _react.PropTypes.number,
  recenter: _react.PropTypes.bool,
  hasTouch: _react.PropTypes.bool,
  style: _react.PropTypes.object
};
Ink.defaultProps = {
  background: true,
  duration: 1500,
  opacity: 0.4,
  recenter: true,
  hasTouch: hasTouch
};
exports.default = Ink;