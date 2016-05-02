import React, { PropTypes, Component } from 'react';
import { Motion, spring } from 'react-motion';
import BottomBarContainer from './BottomBarContainer';
import EmbeddedBottomBarContainer from './EmbeddedBottomBarContainer';

export default class BottomBar extends Component {

  static propTypes = {
    open: PropTypes.bool,
    embed: PropTypes.bool
  };

  static defaultProps = {
    embed: false
  };

  render() {
    const { open, embed } = this.props;
    return (
      <Motion style={{ opacity: spring(open ? 1 : 0), position: spring(open ? 1 : 0, { stiffness: 300, damping: 25 }) }}>
        {interpolated => {
          if (interpolated.position > 0) {
            if (embed) {
              return <EmbeddedBottomBarContainer {...this.props} {...interpolated} top={open ? 0 : -100} />;
            } else {
              return <BottomBarContainer {...this.props} {...interpolated} top={open ? 0 : -100} />;
            }
          }
          return null;
        }}
      </Motion>
    );
  }
}