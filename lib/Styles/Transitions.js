'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut: function easeOut(duration, property, delay, func) {

    var easeFunction = func || this.easeOutFunction;

    if (property && Object.prototype.toString.call(property) === '[object Array]') {

      var transitions = '';
      for (var index = 0; index < property.length; index++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[index], delay, easeFunction);
      }
      return transitions;
    }
    return this.create(duration, property, delay, easeFunction);
  },
  create: function create() {
    var duration = arguments.length <= 0 || arguments[0] === undefined ? '450ms' : arguments[0];
    var property = arguments.length <= 1 || arguments[1] === undefined ? 'all' : arguments[1];
    var delay = arguments.length <= 2 || arguments[2] === undefined ? '0ms' : arguments[2];
    var easeFunction = arguments.length <= 3 || arguments[3] === undefined ? 'linear' : arguments[3];

    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
  }
};