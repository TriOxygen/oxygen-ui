import React, { Component, PropTypes } from 'react';
import ExecutionEnvironment from 'exenv';
import classNames from 'classnames';

const css = oxygenCss({
  root: {
    flex: 1,
    height: '100%',
    position: 'relative',
    overflow: 'auto',
    boxSizing: 'border-box'
  }
});

class ContentContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    onScroll: PropTypes.func,
    onScrollChange: PropTypes.func,
    className: PropTypes.string
  };

  _scrollTop = 0;
  _direction = null;

  handleScroll = event => {
    const { onScroll, onScrollChange } = this.props;
    const { scrollTop } = this._node;
    const direction = scrollTop - this._scrollTop < 0 ? 'up' : 'down';
    if (direction !== this._direction) {
      this._direction = direction;
      onScrollChange && onScrollChange(direction, scrollTop);
    }
    this._scrollTop = scrollTop;
    onScroll && onScroll(direction, scrollTop);
  };

  render() {
    const { children, className, ...other } = this.props;
    const classes = classNames(css.root, className);
    return (
      <div ref={node => this._node = node} {...other} className={classes} onScroll={this.handleScroll}>
        {children}
      </div>
    );
  }
}

export default ContentContainer;
