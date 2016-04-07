'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (publicize) {
  var _data = [];
  var _playing = false;
  var _frame = void 0;

  var Store = {
    each: function each(callback, scope) {
      for (var index = 0, length = _data.length; index < length; index++) {
        callback.call(scope, _data[index]);
      }
    },
    play: function play() {
      if (!_playing) {
        _playing = true;
        Store.update();
      }
    },
    stop: function stop() {
      _playing = false;
      cancelAnimationFrame(_frame);
    },
    getTotalOpacity: function getTotalOpacity(opacity) {
      var answer = 0;

      for (var index = 0, length = _data.length; index < length; index++) {
        answer += _Equations2.default.getBlotOuterOpacity(_data[index], opacity);
      }

      return answer;
    },
    update: function update() {
      _data = _data.filter(killStale);

      if (_data.length) {
        _frame = requestAnimationFrame(Store.update);
        publicize();
      } else {
        Store.stop();
      }
    },
    add: function add(props) {
      _data.push(props);
      Store.play();
    },
    release: function release(time) {
      for (var index = _data.length - 1; index >= 0; index--) {
        if (!_data[index].mouseUp) {
          _data[index].mouseUp = time;
          break;
        }
      }
    }
  };

  return Store;
};

var _Equations = require('./Equations');

var _Equations2 = _interopRequireDefault(_Equations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var killStale = function killStale(_ref) {
  var mouseUp = _ref.mouseUp;
  var duration = _ref.duration;
  return !mouseUp || Date.now() - mouseUp < duration;
};