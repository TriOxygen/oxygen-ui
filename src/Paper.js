import React, { Component, PropTypes } from 'react';
import { Units, Shadow } from './Styles';
import classNames from 'classnames';

class Paper extends Component {
  static propTypes = {
    zDepth: PropTypes.number,
    transparent: PropTypes.bool,
    padded: PropTypes.bool,
    spaced: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    theme: PropTypes.object,
    hover: PropTypes.bool
  };

  static contextTypes = {
    theme: PropTypes.object
  };

  static defaultProps = {
    zDepth: 1,
    rounded: true,
  };

  state = {
    hover: false
  };

  getStyle() {
    const theme = this.props.theme || this.context.theme;
    const { zDepth, transparent, style } = this.props;
    const { hover } = this.state;
    return Object.assign({},
      transparent ? null : {
        backgroundColor: theme.theme.card.hex,
        color: theme.text.default,
        boxShadow: hover ? Shadow[zDepth + 1] : Shadow[zDepth]
      }, style);
  }

  handleEnter = () => {
    this.setState({ hover: true });
  };

  handleLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const { children, spaced, padded, rounded, className, hover, ...other } = this.props;
    const classes = classNames(className, styles.root, {
      [styles.spaced]: spaced,
      [styles.padded]: padded,
      [styles.rounded]: rounded,
    });
    const props = {
      className: classes,
      style: this.getStyle(),
    };
    if (hover) {
      props.onMouseEnter = this.handleEnter;
      props.onMouseLeave = this.handleLeave;
    };
    return (
      <div {...other} {...props} >
        {children}
      </div>
    );
  }
}

export default Paper;

const styles = oxygenCss({
  root: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    transition: 'box-shadow 450ms cubic-bezier(0.23, 1, 0.32, 1)',
    '&padded': {
      padding: Units.phone.gutter.mini,
    },
    '&spaced': {
      margin: Units.phone.gutter.mini,
    },
    '&rounded': {
      borderRadius: Units.phone.borderRadius
    }
  },
});
