import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const css = oxygenCss({
  'cover': {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: 320
  }
});

class Cover extends Component {

  static propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
  };

  getStyle() {
    const { src } = this.props;
    return Object.assign({}, {
      backgroundImage: `url(${src})`
    });
  }

  render() {
    const { className, src, ...other } = this.props;
    const classes = classNames(className, css.cover);
    return (
      <div {...other} className={classes} style={this.getStyle()}/>
    );
  }
}

export default Cover;
