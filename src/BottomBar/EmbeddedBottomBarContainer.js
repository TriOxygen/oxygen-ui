import React, { PropTypes, Component } from 'react';
import Paper from '../Paper';

export default class EmbeddedBottomBarContainer extends Component {

  static propTypes = {
    position: PropTypes.number,
    children: PropTypes.node
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  getStyle() {
    let { position } = this.props;
    if (position > 1) {
      position = 1;
    }
    return Object.assign({}, {
      transform: `translate3d(0, ${(1 - position)  * 100}%, 0)`,
    });
  }

  render() {
    const { children, ...other } = this.props;

    return (
      <Paper {...other} zDepth={2} className={css.root} rounded={false} style={this.getStyle()}>
        {children}
      </Paper>
    );
  }
}

const css = oxygenCss({
  root: {
    zIndex: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});