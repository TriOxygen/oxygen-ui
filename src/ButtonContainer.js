import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { Units } from './Styles';

class ButtonContainer extends Component {
  static propTypes = {
    fullWidth: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    alignRight: PropTypes.bool,
    mdColor: PropTypes.string
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  static childContextTypes = {
    mdColor: PropTypes.string,
  };

  getChildContext() {
    return {
      mdColor: this.props.mdColor
    }
  }

  static defaultProps = {
    fullWidth: true
  };

  render() {
    const { children, alignRight, fullWidth, className, ...other } = this.props;
    const rootClasses = classNames(styles.root, className, {
      [styles.fullWidth]: fullWidth,
      [styles.alignRight]: alignRight
    });
    return (
      <div className={rootClasses} {...other}>
        {children}
      </div>
    );
  }
}

export default ButtonContainer;

const styles = oxygenCss({
  root: {
    display: 'inline-block',
    padding: Units.phone.gutter.mini,
    '@desktop': {
      padding: Units.phone.gutter.mini,
    }
    // padding: `${Units.gutter.mini}px 0`,
  },
  fullWidth: {
    display: 'block'
  },
  alignRight: {
    textAlign: 'right'
  }
});
