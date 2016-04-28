export Colors from './Colors';
export Theme from './Theme';
export Typography from './Typography';
export Units from './Units';
export Shadow from './Shadow';
export Transitions from './Transitions';

export function mergeStyles() {
  return Object.assign({}, ...arguments);
}