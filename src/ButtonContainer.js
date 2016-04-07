import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { Units } from './Styles';

class ButtonContainer extends Component {

  static displayName = 'ButtonContainer';

  static propTypes = {
    fullWidth: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    alignRight: PropTypes.bool,
    theme: PropTypes.object
  };

  static contextTypes = {
    theme: PropTypes.object
  };

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
    padding: `${(Units.phone.button.lineHeight - Units.phone.button.height) / 2}px`,
    '@desktop': {
      padding: `${(Units.desktop.button.lineHeight - Units.desktop.button.height) / 2}px`,
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
