import Equations from './Equations';

const killStale = ({ mouseUp, duration }) => !mouseUp || (Date.now() - mouseUp) < duration;

export default function(publicize) {
  let _data = [];
  let _playing = false;
  let _frame;

  const Store = {

    each(callback, scope) {
      for (let index = 0, length = _data.length; index < length; index++) {
        callback.call(scope, _data[index]);
      }
    },

    play() {
      if (!_playing) {
        _playing = true;
        Store.update();
      }
    },

    stop() {
      _playing = false;
      cancelAnimationFrame(_frame);
    },

    getTotalOpacity(opacity) {
      let answer = 0;

      for (let index = 0, length = _data.length; index < length; index++) {
        answer += Equations.getBlotOuterOpacity(_data[index], opacity);
      }

      return answer;
    },

    update() {
      _data = _data.filter(killStale);

      if (_data.length) {
        _frame = requestAnimationFrame(Store.update);
        publicize();
      } else {
        Store.stop();
      }
    },

    add(props) {
      _data.push(props);
      Store.play();
    },

    release(time) {
      for (let index = _data.length - 1; index >= 0; index--) {
        if (!_data[index].mouseUp) {
          _data[index].mouseUp = time;
          break;
        }
      }
    }
  };

  return Store;
}
