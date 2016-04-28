function easeOutQuint(step, initial, change, duration) {
  const time = step / duration - 1;
  return change * ( time * time * time * time * time + 1) + initial;
}

const SQRT_2 = Math.sqrt(2);
const { cos, max, min } = Math;

function getPress(blot) {
  return min(blot.duration, Date.now() - blot.mouseDown);
}

function getRelease(blot) {
  return blot.mouseUp > 0 ? Date.now() - blot.mouseUp : 0;
}

function getRadius(blot) {
  const { duration, radius } = blot;

  const down = easeOutQuint(getPress(blot), 0, radius, duration) * 0.85;
  const up = easeOutQuint(getRelease(blot), 0, radius, duration) * 0.15;
  const undulation = radius * 0.02 * cos(Date.now() / duration);

  return max(0, down + up + undulation);
}

export default {

  getMaxRadius(height, width) {
    return max(height, width);
  },

  getBlotOpacity(blot, opacity) {
    return easeOutQuint(getRelease(blot), opacity, -opacity, blot.duration);
  },

  getBlotOuterOpacity(blot, opacity) {
    return min(this.getBlotOpacity(blot, opacity), easeOutQuint(getPress(blot), 0, 0.3, blot.duration * 3));
  },

  getBlotShiftX(blot, size, width) {
    return min(1, getRadius(blot) / size * 2 / SQRT_2) * (width / 2 - blot.x);
  },

  getBlotShiftY(blot, size, height) {
    return min(1, getRadius(blot) / size * 2 / SQRT_2) * (height / 2 - blot.y);
  },

  getBlotScale(blot) {
    return getRadius(blot) / blot.radius;
  }
};
