/* global DocumentTouch*/
import React, { Component, PropTypes } from 'react';
import Equations from './Ink/Equations';
import inkStore from './Ink/store';
import pixelRatio from './Ink/pixelRatio';

const MOUSE_LEFT = 0;
const TAU = Math.PI * 2;
const hasTouch = typeof window !== 'undefined' && (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);

const styles = oxygenCss({
  root: {
    borderRadius: 'inherit',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  }
});

class Ink extends Component {

  static propTypes = {
    background: PropTypes.bool,
    duration: PropTypes.number,
    opacity: PropTypes.number,
    radius: PropTypes.number,
    recenter: PropTypes.bool,
    hasTouch: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultProps = {
    background: true,
    duration: 1500,
    opacity: 0.4,
    recenter: true,
    hasTouch: hasTouch
  };

  constructor() {
    super(...arguments);
    this.state = {
      color: 'transparent',
      density: 1,
      height: 0,
      store: inkStore(this.tick.bind(this)),
      touchEvents: this.touchEvents(),
      width: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    for (const prop in nextProps) {
      if (this.props[prop] !== nextProps[prop]) return true;
    }

    for (const prop in nextState) {
      if (this.state[prop] !== nextState[prop]) return true;
    }

    return false;
  }

  componentWillUnmount() {
    this.state.store.stop();
  }

  makeBlot(blot) {
    const { ctx, height, width } = this.state;
    let { x, y } = blot;
    const { radius } = blot;

    ctx.globalAlpha = Equations.getBlotOpacity(blot, this.props.opacity);
    ctx.beginPath();

    if (this.props.recenter) {
      const size = Math.max(height, width);

      x += Equations.getBlotShiftX(blot, size, width);
      y += Equations.getBlotShiftY(blot, size, height);
    }

    ctx.arc(x, y, radius * Equations.getBlotScale(blot), 0, TAU);

    ctx.closePath();
    ctx.fill();
  }

  pushBlot(timeStamp, clientX, clientY) {
    const el = this._canvas;

    const { top, bottom, left, right } = el.getBoundingClientRect();
    const { color } = window.getComputedStyle(el);

    const ctx = this.state.ctx || el.getContext('2d');
    const density = pixelRatio(ctx);
    const height = bottom - top;
    const width = right - left;
    const radius = this.props.radius || Equations.getMaxRadius(height, width);

    this.setState({ color, ctx, density, height, width }, () => {
      this.state.store.add({
        duration: this.props.duration,
        mouseDown: timeStamp,
        mouseUp: 0,
        radius: radius,
        x: clientX - left,
        y: clientY - top
      });
    });
  }
  touchEvents() {
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

  tick() {
    const { ctx, color, density, height, width, store } = this.state;
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

  _onPress(event) {
    const { button, ctrlKey, clientX, clientY, changedTouches } = event;
    const timeStamp = Date.now();

    if (changedTouches) {
      for (let index = 0; index < changedTouches.length; index++) {
        this.pushBlot(timeStamp, changedTouches[index].clientX, changedTouches[index].clientY);
      }
    } else if (button === MOUSE_LEFT && !ctrlKey) {
      this.pushBlot(timeStamp, clientX, clientY);
    }
  }

  _onRelease() {
    this.state.store.release(Date.now());
  }

  render() {
    const { density, height, width, touchEvents } = this.state;

    return (
      <canvas
        ref={canvas => this._canvas = canvas}
        className={styles.root}
        style={{ ...this.props.style }}
        height={ height * density }
        width={ width * density }
        onDragOver={ this._onRelease }
        { ...touchEvents }
      />
    );
  }

}

export default Ink;
