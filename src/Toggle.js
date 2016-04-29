import React, { PropTypes, Component } from 'react';
import Ink from './Ink';
import { Units, Colors } from './Styles';
import classNames from 'classnames';

class Toggle extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    rightAlign: PropTypes.bool,
    left: PropTypes.bool,
    fullWidth: PropTypes.bool,
    label: PropTypes.node,
    mdColor: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    defaultColor: 'teal'
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  state = {
    checked: this.props.checked,
    active: false
  };

  handleTouchTap() {
    const { disabled, onChange } = this.props;
    if (!disabled) {
      const { checked } = this.state;
      this.setState({ checked: !checked });
      if (onChange) {
        onChange(!checked);
      }
    }
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

  getStyles(gradient = 500) {
    const { mdTheme, mdColor: contextColor } = this.context;
    const { mdColor, defaultColor } = this.props;
    const { checked } = this.state;
    const colors = mdTheme.colors[mdColor || contextColor || defaultColor];
    return {
      backgroundColor: checked ? colors[gradient].hex : null
    }
  }

  render() {
    const { left, fullWidth, label, disabled, rightAlign } = this.props;
    const { checked, active } = this.state;
    let tabIndex = null;
    let ink;

    const labelClasses = classNames(toggleStyles.border, {
      [toggleStyles.checked]: checked,
      [toggleStyles.active]: active,
    });

    if (!disabled) {
      tabIndex = 0;
      ink = <Ink radius={56}/>;
    }

    return (
      <div
        className={classNames(toggleStyles.root, {
          [toggleStyles.left]: left,
          [toggleStyles.rightAlign]: rightAlign,
          [toggleStyles.disabled]: disabled,
          [toggleStyles.fullWidth]: fullWidth
        })}
        disabled={disabled}
        onKeyPress={this.handleKeyPress.bind(this)}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        tabIndex={tabIndex}
        onTouchTap={this.handleTouchTap.bind(this)}
      >
        {left ? label : null}
        <div
          className={labelClasses}
          style={this.getStyles(200)}
        >
          <div className={toggleStyles.toggle} style={this.getStyles()}>
            {ink}
          </div>
        </div>
        {!left ? label : null}
      </div>
    );
  }
}

export default Toggle;

const toggleStyles = oxygenCss({
  root: {
    userSelect: 'none',
    padding: Units.phone.gutter.mini,
    outline: 'none',
    cursor: 'pointer',
    position: 'relative',
    '&fullWidth': {
      display: 'block'
    },
    '&rightAlign': {
      textAlign: 'right'
    },
    '&disabled': {
      cursor: 'default',
      border: {
        opacity: 0.25,
      }
    },
  },
  left: {
    border: {
      marginLeft: Units.phone.gutter.mini,
      marginRight: 0,
    },
  },
  border: {
    position: 'relative',
    height: 20,
    width: 44,
    transition: 'all 0.3s ease',
    borderRadius: 100,
    backgroundColor: Colors.material.grey[500].hex,
    margin: `${Units.phone.gutter.mini / 2 + 2}px  ${Units.phone.gutter.mini}px ${Units.phone.gutter.mini / 2 + 2}px 0`,
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    outline: 'none',
    verticalAlign: 'middle',
    display: 'inline-block',
    '&active': {
      boxShadow: '0 0 10px rgba(255 , 255, 0, 1)',
    },
    '&checked': {
      background: Colors.material.teal[200].hex,
      ' toggle': {
        left: 20,
        backgroundColor: Colors.material.teal[500].hex
      }
    }
  },
  toggle: {
    position: 'absolute',
    left: -2,
    top: -3,
    display: 'block',
    width: 26,
    height: 26,
    borderRadius: 100,
    background: '#fff',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    content: '',
    transition: 'all 0.3s ease',
  }
});
