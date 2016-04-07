"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function easeOutQuint(step, initial, change, duration) {
  var time = step / duration - 1;
  return change * (time * time * time * time * time + 1) + initial;
}

var SQRT_2 = Math.sqrt(2);
var cos = Math.cos;
var max = Math.max;
var min = Math.min;


function getPress(blot) {
  return min(blot.duration, Date.now() - blot.mouseDown);
}

function getRelease(blot) {
  return blot.mouseUp > 0 ? Date.now() - blot.mouseUp : 0;
}

function getRadius(blot) {
  var duration = blot.duration;
  var radius = blot.radius;


  var down = easeOutQuint(getPress(blot), 0, radius, duration) * 0.85;
  var up = easeOutQuint(getRelease(blot), 0, radius, duration) * 0.15;
  var undulation = radius * 0.02 * cos(Date.now() / duration);

  return max(0, down + up + undulation);
}

exports.default = {
  getMaxRadius: function getMaxRadius(height, width) {
    return max(height, width);
  },
  getBlotOpacity: function getBlotOpacity(blot, opacity) {
    return easeOutQuint(getRelease(blot), opacity, -opacity, blot.duration);
  },
  getBlotOuterOpacity: function getBlotOuterOpacity(blot, opacity) {
    return min(this.getBlotOpacity(blot, opacity), easeOutQuint(getPress(blot), 0, 0.3, blot.duration * 3));
  },
  getBlotShiftX: function getBlotShiftX(blot, size, width) {
    return min(1, getRadius(blot) / size * 2 / SQRT_2) * (width / 2 - blot.x);
  },
  getBlotShiftY: function getBlotShiftY(blot, size, height) {
    return min(1, getRadius(blot) / size * 2 / SQRT_2) * (height / 2 - blot.y);
  },
  getBlotScale: function getBlotScale(blot) {
    return getRadius(blot) / blot.radius;
  }
};