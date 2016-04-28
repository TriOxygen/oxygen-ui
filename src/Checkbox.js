import React from 'react';
import classNames from 'classnames';
import Toggle from './Toggle';
import { Units, Colors } from './Styles';

class Checkbox extends Toggle {
  getStyles() {
    const { mdTheme } = this.context;
    const { color } = this.props;
    const { checked } = this.state;
    const colors = mdTheme.colors[color];
    return {
      backgroundColor: checked ? colors[500].hex : null,
      borderColor: checked ? colors[500].hex : null
    }
  }

  render() {
    const { disabled, left, fullWidth, label, rightAlign } = this.props;
    const { checked, active } = this.state;
    let tabIndex = null;

    const toggleClasses = classNames(checkStyles.border, {
      [checkStyles.checked]: checked,
      [checkStyles.active]: active
    });


    if (!disabled) {
      tabIndex = 0;
    }

    return (
      <div
        className={classNames(checkStyles.root, {
          [checkStyles.left]: left,
          [checkStyles.rightAlign]: rightAlign,
          [checkStyles.fullWidth]: fullWidth,
          [checkStyles.disabled]: disabled
        })}
        onTouchTap={this.handleTouchTap.bind(this)}
        onKeyPress={this.handleKeyPress.bind(this)}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        disabled={disabled}
        tabIndex={tabIndex}
      >
        {left ? label : null}
        <div
          style={this.getStyles()}
          className={toggleClasses}
        >
          <span className={checkStyles.check}/>
        </div>
        {!left ? label : null}
      </div>
    );
  }
}

export default Checkbox;

const checkStyles = oxygenCss({
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
        opacity: 0.25
      }
    }
  },
  left: {
    border: {
      margin: `${Units.phone.gutter.mini / 2 + 2}px  ${Units.phone.gutter.mini}px ${Units.phone.gutter.mini / 2 + 2}px ${Units.phone.gutter.mini}px`,
      marginRight: 0,
    },
  },
  border: {
    width: 20,
    height: 20,
    margin: `${Units.phone.gutter.mini / 2 + 2}px  ${Units.phone.gutter.mini}px ${Units.phone.gutter.mini / 2 + 2}px 0`,
    position: 'relative',
    outline: 'none',
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Colors.material.grey[500].hex,
    transition: 'border-color .25s, background-color .25s',
    verticalAlign: 'middle',
    display: 'inline-block',
    overflow: 'visible',
    boxSizing: 'border-box',
    '&active': {
      boxShadow: '0 0 10px rgba(255 , 255, 0, 1)',
    },
    '&checked': {
      background: Colors.material.teal[500].hex,
      borderColor: Colors.material.teal[500].hex,
      ' check': {
        opacity: 1,
        transform: 'translate(-4px, -4px) scale(1) rotate(45deg) '
      }
    },
  },
  check: {
    display: 'block',
    position: 'absolute',
    transition: 'opacity .25s, transform .25s',
    top: 0,
    left: 7,
    width: 7,
    height: 15,
    border: '3px solid #fff',
    borderRadius: 2,
    borderTop: 'none',
    borderLeft: 'none',
    opacity: 0,
    marginRight: Units.phone.gutter.mini,
  }
});
