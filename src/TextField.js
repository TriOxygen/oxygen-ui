import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { Colors, Typography, Units } from './Styles';

class TextField extends Component {

  static propTypes = {
    children: PropTypes.node,
    onTouchTap: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    autoFocus: PropTypes.bool,
    readOnly: PropTypes.bool,
    icon: PropTypes.node,
    theme: PropTypes.object,
    type: PropTypes.string,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    floatingLabelText: PropTypes.string,
    errorText: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string
  };

  static contextTypes = {
    theme: PropTypes.object
  };

  state = {
    focused: false,
    value: this.props.value || this.props.defaultValue,
  };

  handleBlur = () => {
    const { onBlur } = this.props;
    this.setState({ focused: false });
    onBlur && onBlur();
  };

  handleFocus = () => {
    const { onFocus } = this.props;
    this.setState({ focused: true });
    onFocus && onFocus();
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  focus = () => {
    this.refs.input.focus();
  };

  blur = () => {
    this.refs.input.blur();
  };

  componentDidMount() {
    if (this.props.autoFocus) {
      this._timer = setTimeout(() => {
        this.refs.input.focus();
        this.refs.input.select();
      }, 200);
    }
  }

  componentWillUnmount() {
    if (this._timer) {
      clearTimeout(this._timer);
    }
  }

  getPlaceholderStyle() {
    const theme = this.props.theme || this.context.theme;
    return Object.assign({}, {
      color: theme.text.disabled
    });
  }

  getUnderlineStyle(active = false) {
    const theme = this.props.theme || this.context.theme;
    const { errorText } = this.props;
    const { focused } = this.state;
    return Object.assign({
      borderColor: active && focused ? theme.primary1 : errorText ? Colors.material.red[500].hex : theme.text.disabled,
      transform: focused? 'scaleX(1)' : null,
    });
  }

  getLabelStyle() {
    const theme = this.props.theme || this.context.theme;
    const { focused, value } = this.state;
    return Object.assign({
      color: ( focused && !value) ? theme.primary1 : theme.text.disabled,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (typeof value !== 'undefined') {
      this.setState({ value });
    }
  }

  getValue() {
    return this.refs.input.value;
  }

  renderInputElement(props) {
    const { readOnly, type } = this.props;
    const { value } = this.state;
    if (readOnly) {
      return (
        <div
          ref="input"
          className={inputStyles.root}
          type={type}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          tabIndex={0}
          {...props}
        >
          {value}
        </div>
      );

    } else {
      return (
        <input
          ref="input"
          className={inputStyles.root}
          type={type}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          {...props}
          value={value}
        />
      );

    }
  }

  render() {
    const { placeholder, floatingLabelText, icon, children, className, onTouchTap, errorText, ...other } = this.props;
    const { focused, value } = this.state;
    let placeholderText;
    let floatingLabelEl;
    if (floatingLabelText) {
      placeholderText = !value ? placeholder : null;
    } else {
      placeholderText = !value ? placeholder : null;
    }
    const rootClasses = classNames(styles.root, className, {
      [styles.hasIcon]: icon,
      [styles.hasFloatingLabel]: floatingLabelText,
    });
    const placeHolderClasses = classNames(placeHolderStyles.root, {
      [placeHolderStyles.hasIcon]: icon,
      [placeHolderStyles.hasFloatingLabel]: floatingLabelText,
    });
    const underlineClasses = classNames(underlineStyles.root, underlineStyles.active, {
      [underlineStyles.focus]: focused
    });

    if (floatingLabelText) {
      const labelClasses = classNames(labelStyles.root, {
        [labelStyles.focus]: focused || value
      });
      floatingLabelEl = <label className={labelClasses} style={this.getLabelStyle()} onTouchTap={this.focus}>{floatingLabelText}</label>;
    }
    return (
      <div className={rootClasses} onTouchTap={onTouchTap}>
        {icon && <div className={styles.iconContainer}>{icon}</div>}
        <div className={placeHolderClasses}>
          <span style={this.getPlaceholderStyle()}>{placeholderText}</span>
          {this.renderInputElement(other)}
          {floatingLabelText && <hr className={underlineStyles.root} style={this.getUnderlineStyle()}/>}
          {floatingLabelText && <hr className={underlineClasses} style={this.getUnderlineStyle(true)}/>}
          {floatingLabelEl}
        </div>
        {children}
        {errorText && <div className={styles.errorText}>{errorText}</div>}
      </div>
    );
  }
}

export default TextField;

const styles = oxygenCss({
  root: {
    position: 'relative',
    height: 48,
    '&hasFloatingLabel': {
       height: 72,
      ' errorText': {
        bottom: Units.phone.gutter.mini
      },
      ' iconContainer': {
        padding: '24px 12px',
      }
    },
    '&hasIcon': {
      ' errorText': {
        left: 48
      }
    }
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    boxSizing: 'border-box',
    width: 48,
    height: 48,
    padding: 12,
  },
  errorText: {
    position: 'absolute',
    left: Units.phone.gutter.mini,
    right: Units.phone.gutter.mini,
    bottom: Units.phone.gutter.mini / 2,
    color: Colors.material.red[500].hex,
    fontSize: 11,
  }
});

const underlineStyles = oxygenCss({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderStyle: 'none none solid none',
    borderWidth: 1,
    bottom: - 4,
    '&active': {
      transition: 'all 0.3s ease',
      transform: 'scaleX(0)',
      borderWidth: 2,
    }
  },
});


const inputStyles = oxygenCss({
  root: {
    border: 0,
    position: 'absolute',
    left: 0,
    width: '100%',
    resize: 'none',
    background: 'transparent',
    lineHeight: '24px',
    fontSize: Typography.phone.body1.fontSize,
    fontWeight: Typography.phone.body1.fontWeight,
    ':focus': {
      outline: 'none',
    },
  }
})

const placeHolderStyles = oxygenCss({
  root: {
    position: 'absolute',
    left: Units.phone.gutter.mini,
    right: Units.phone.gutter.mini,
    top: 12,
    height: 24,
    lineHeight: '24px',
    boxSizing: 'border-box',
    padding: `0 0 ${Units.phone.gutter.mini}px 0`,
    '&hasFloatingLabel': {
       top: 24,
    },
    '&hasIcon': {
      left: 48,
    }
  }
  //       color: theme.text.disabled,

});

const labelStyles = oxygenCss({
  root: {
    fontSize: Typography.phone.body1.fontSize,
    fontWeight: Typography.phone.body1.fontWeight,
    top: 0,
    height: 16,
    right: 0,
    position: 'absolute',
    left: 0,
    marginBottom: 2,
    transition: 'all 0.3s ease',
    transformOrigin: 'bottom left',
    cursor: 'pointer',
    '&focus': {
      transform: 'scale(0.75) translate3d(0, -24px, 0) ',
    }
  }
});
