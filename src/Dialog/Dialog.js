import React, { PropTypes, Component } from 'react';
import { Motion, spring } from 'react-motion';
import DialogContainer from './DialogContainer';

export default class Dialog extends Component {

  static propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onRequestClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
  };

  static defaultProps = {
    open: false
  };

  handleRequestOpen = () => {
    const { open, onRequestOpen } = this.props;
    if (!open && onRequestOpen) {
      onRequestOpen();
    }
  };

  handleRequestClose = () => {
    const { open, onRequestClose } = this.props;
    if (open && onRequestClose) {
      onRequestClose();
    }
  };

  handleRest = () => {
    const { open, onOpen, onClose } = this.props;
    if (open && onOpen) {
      onOpen();
    } else if (!open && onClose) {
      onClose();
    }
  }

  render() {
    const { open, children } = this.props;

    return (
      <Motion style={{ y: spring(open ? 100 : 0, { stiffness: 300, damping: 25 }), opacity: spring(open ? 1 : 0)}} onRest={this.handleRest}>
        {interpolated => {
          if (interpolated.opacity > 0) {
            return <DialogContainer {...interpolated} top={open ? 0 : -100} onRequestClose={this.handleRequestClose} onRequestOpen={this.handleRequestOpen}>{children}</DialogContainer>;
          }
          return null;
        }}
      </Motion>
    );
  }
}