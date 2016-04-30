import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Units } from './Styles';

const css = oxygenCss({
  root: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
    width: 36,
    height: 36,
    lineHeight: `${36}px`,
    textAlign: 'center',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderStyle: 'solid',
    borderWidth: '1px',
    '&double': {
    lineHeight: `${36 * 2}px`,
      width: 36 * 2,
      height: 36 * 2,
    }
  }
});

class Avatar extends Component {
  static propTypes = {
    children: PropTypes.node,
    double: PropTypes.bool,
    className: PropTypes.string,
    mdColor: PropTypes.string,
    src: PropTypes.string,
    style: PropTypes.object,
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  getStyle() {
    const { style, mdColor, src } = this.props;
    const { mdTheme } = this.context;
    const colors = mdTheme.colors[mdColor];
    return Object.assign({}, style, {
      backgroundColor: src ? null : mdColor ? colors[500].hex : mdTheme.theme.background.hex,
      borderColor: mdColor ? colors[500].hex : mdTheme.theme.background.hex,
      color: mdColor ? colors[500].text.default : mdTheme.text.default,
      backgroundImage: src ? `url(${src})` : null
    });
  }

  render() {
    const { children, double, className, ...other } = this.props;
    const classes = classNames(className, css.root, {
      [css.double]: double
    });
    return (
      <div {...other} className={classes} style={this.getStyle()}>
        {children}
      </div>
    );
  }
}

export default Avatar;
