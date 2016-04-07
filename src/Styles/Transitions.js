export default {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut(duration, property, delay, func) {

    const easeFunction = func || this.easeOutFunction;

    if (property &&
      Object.prototype.toString.call(property) === '[object Array]' ) {

      let transitions = '';
      for (let index = 0; index < property.length; index++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[index], delay, easeFunction);
      }
      return transitions;

    }
    return this.create(duration, property, delay, easeFunction);
  },

  create(duration = '450ms', property = 'all', delay = '0ms', easeFunction = 'linear') {
    return property + ' ' +
      duration + ' ' +
      easeFunction + ' ' +
      delay;
  }
};
