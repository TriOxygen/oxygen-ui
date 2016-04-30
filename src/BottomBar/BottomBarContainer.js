import React, { PropTypes, Component } from 'react';
import { Shadow, Colors, Units, Typography } from '../Styles';
import Paper from '../Paper';

const { snackBar } = Colors;

export default class BottomBarContainer extends Component {

  static propTypes = {
    position: PropTypes.number,
    children: PropTypes.node
  };

  static defaultProps = {
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
      <Paper zDepth={2} className={css.root} rounded={false} style={this.getStyle()} {...other}>
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
})