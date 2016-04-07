import React, { PropTypes, Component } from 'react';

export default class Overlay extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    backgroundColor: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };

  componentDidMount() {
    this.bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // make body none scrolling
  }

  componentWillUnmount() {
    // make body scrolling again
    document.body.style.overflow = this.bodyOverflow;
  }


  render() {
    const { backgroundColor, children, style, ...other } = this.props;
    return (
      <div className={css.overlay} style={Object.assign({ backgroundColor }, style)} {...other}>{children}</div>
    );
  }
}

const css = oxygenCss({
  overlay: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },
});
