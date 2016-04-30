import React, { PropTypes, Component } from 'react';
import { Motion, spring } from 'react-motion';
import BottomBarContainer from './BottomBarContainer';

export default class BottomBar extends Component {

  static propTypes = {
    open: PropTypes.bool
  };

  static defaultProps = {
  };

  render() {
    const { open } = this.props;
    return (
      <Motion style={{ position: spring(open ? 1 : 0, { stiffness: 300, damping: 25 }) }}>
        {interpolated => {
          if (interpolated.position > 0) {
            return <BottomBarContainer {...this.props} {...interpolated}  />;
          }
          return null;
        }}
      </Motion>
    );
  }
}