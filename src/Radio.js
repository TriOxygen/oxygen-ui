import React, { PropTypes, Component } from 'react';
import { Units, Colors } from './Styles';
import classNames from 'classnames';

class Radio extends Component {
  static propTypes = {
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.bool,
      React.PropTypes.array,
      React.PropTypes.object,
    ]),
    fullWidth: PropTypes.bool,
    label: PropTypes.node,
    left: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    mdColor: PropTypes.string,
    defaultColor: PropTypes.string,
    onTouchTap: PropTypes.func
  };

  static defaultProps = {
    defaultColor: 'teal'
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
    mdColor: PropTypes.string
  };

  state = {
    active: false
  };

  handleTouchTap() {
    const { disabled, } = this.props;
    !disabled && this.props.onTouchTap && this.props.onTouchTap(this.props.value);
  }

  handleFocus() {
    this.setState({ active: true });
  }

  handleBlur() {
    this.setState({ active: false });
  }

  handleKeyPress(e) {
    if (e.keyCode === 0 || e.keyCode === 32 || e.keyCode == 13) {
      this.handleTouchTap();
      e.preventDefault();
    }
  }

  getStyles() {
    const { mdTheme, mdColor: contextColor } = this.context;
    const { mdColor, checked } = this.props;
    const colors = mdTheme.colors[mdColor || contextColor || this.props.defaultColor];
    return {
      root: {
        borderColor: colors[500].hex
      },
      check: {
        backgroundColor: colors[500].hex
      }
    };
  }

  render() {
    const { disabled, checked, label, left, fullWidth } = this.props;
    const { active } = this.state;
    let tabIndex = null;

    if (!disabled) {
      tabIndex = 0;
    }

    const classes = classNames(radioStyles.border, {
      [radioStyles.active]: active,
      [radioStyles.checked]: checked,
    });

    const styles = this.getStyles();
    return (
      <div
        disabled={disabled}
        onKeyPress={this.handleKeyPress.bind(this)}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        className={classNames(radioStyles.root, { [radioStyles.left]: left, [radioStyles.fullWidth]: fullWidth, [radioStyles.disabled]: disabled, })}
        tabIndex={tabIndex}
        onTouchTap={this.handleTouchTap.bind(this)}
      >
        {left ? label : null}
        <div className={classes} style={styles.root}>
          <span className={radioStyles.check} style={styles.check}/>
        </div>
        {!left ? label : null}
      </div>
    );
  }
}

const radioStyles = oxygenCss({
  root: {
    userSelect: 'none',
    display: 'inline-block',
    outline: 'none',
    cursor: 'pointer',
    padding: Units.phone.gutter.mini / 4,
    position: 'relative',
    '&disabled': {
      opacity: 0.25,
      cursor: 'default'
    },
    '&fullWidth': {
      display: 'block',
    },
    '&left': {
      textAlign: 'right'
    }
  },
  left: {
    border: {
      marginLeft: Units.phone.gutter.mini,
      marginRight: 0,
    },
  },
  border: {
    display: 'inline-block',
    height: 20,
    width: 20,
    margin: `${Units.phone.gutter.mini / 2}px  ${Units.phone.gutter.mini}px ${Units.phone.gutter.mini /2}px ${Units.phone.gutter.mini}px`,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.material.grey[500].hex,
    borderRadius: '50%',
    transition: 'border-color .25s ease',
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    '&active': {
      boxShadow: '0 0 10px rgba(255 , 255, 0, 1)',
    },
    '&checked': {
      borderColor: Colors.material.teal[500].hex,
      check: {
        backgroundColor: Colors.material.teal[500].hex,
        transform: 'scale(0.75, 0.75)',
        opacity: 1
      }
    },
    check: {
      transformOrigin: '50% 50%',
      display: 'block',
      transform: 'scale(1, 1)',
      height: 16,
      width: 16,
      boxSizing: 'border-box',
      backgroundColor: Colors.material.grey[500].hex,
      borderRadius: '50%',
      opacity: 0,
      zIndex: -1,
      transition: 'transform .25s ease, opacity .25s ease, background-color .25s ease',
    }
  },
});

export default Radio;
