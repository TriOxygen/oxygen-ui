import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { Colors, Typography, Units } from '../Styles';
import EnhancedTextArea from './EnhancedTextArea';

const ENTER = 13;


class TextField extends Component {

  static propTypes = {
    children: PropTypes.node,
    onTouchTap: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    autoFocus: PropTypes.bool,
    readOnly: PropTypes.bool,
    dense: PropTypes.bool,
    icon: PropTypes.node,
    color: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    floatingLabelText: PropTypes.string,
    onPressEnter: PropTypes.func,
    errorText: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    type: 'text',
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  state = {
    focused: false,
    value: this.props.value || this.props.defaultValue || '',
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

  handleKey = (event) => {
    const { keyCode } = event;
    const { onPressEnter } = this.props;
    if (keyCode === ENTER) {
      onPressEnter && onPressEnter(this.state.value);
    }
  };

  focus = () => {
    this.refs.input.focus();
  };

  select = () => {
    this.refs.input.select();
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
    const { mdTheme } = this.context;
    return Object.assign({}, {
      color: mdTheme.text.disabled
    });
  }

  getUnderlineStyle(active = false) {
    const { mdTheme } = this.context;
    const { color, errorText } = this.props;
    const colors = mdTheme.colors[color || mdTheme.primary];
    const { focused } = this.state;
    return Object.assign({
      borderColor: active && focused ? colors[500].hex : errorText ? Colors.material.red[500].hex : theme.text.disabled,
      transform: focused? 'scaleX(1)' : null,
    });
  }

  getLabelStyle() {
    const { mdTheme } = this.context;
    const { color } = this.props;
    const colors = mdTheme.colors[color || mdTheme.primary];
    const { focused, value } = this.state;
    return Object.assign({
      color: ( focused && !value) ? colors[500].text.secondary : mdTheme.text.secondary,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (typeof value !== 'undefined') {
      this.setState({ value });
    }
  }

  getValue() {
    if (this.props.multiline) {
      return this.refs.input.getValue();
    }
    return this.refs.input.value;
  }

  renderInputElement(props) {
    const { readOnly, type, multiline } = this.props;
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
      if (multiline) {
        return (
          <EnhancedTextArea
            ref="input"
            className={inputStyles.root}
            type={type}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onKeyUp={this.handleKey}
            onFocus={this.handleFocus}
            {...props}
            value={value}
          />
        );
      }
      return (
        <input
          ref="input"
          className={inputStyles.root}
          type={type}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onKeyUp={this.handleKey}
          onFocus={this.handleFocus}
          {...props}
          value={value}
        />
      );
    }
  }

  render() {
    const { placeholder, fullWidth, dense, defaultValue, floatingLabelText, icon, children, className, onTouchTap, errorText, ...other } = this.props;
    const { focused, value } = this.state;
    let placeholderText;
    let floatingLabelEl;
    if (floatingLabelText) {
      placeholderText = !value ? placeholder : null;
    } else {
      placeholderText = !value ? placeholder : null;
    }
    const rootClasses = classNames(styles.root, className, {
      [styles.fullWidth]: fullWidth,
      [styles.hasIcon]: icon,
      [styles.dense]: dense,
      [styles.hasFloatingLabel]: floatingLabelText,
    });
    const placeHolderClasses = classNames(placeHolderStyles.root, {
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
          <span className={placeHolderStyles.text} style={this.getPlaceholderStyle()}>{placeholderText}</span>
          {this.renderInputElement(other)}
          {floatingLabelText && <hr className={underlineStyles.root} style={this.getUnderlineStyle()}/>}
          {floatingLabelText && <hr className={underlineClasses} style={this.getUnderlineStyle(true)}/>}
          {floatingLabelEl}
          {children}
        </div>
        {errorText && <div className={styles.errorText}>{errorText}</div>}
      </div>
    );
  }
}

export default TextField;

const styles = oxygenCss({
  root: {
    '&fullWidth': {
      display: 'block',
      flexGrow: 1
    },
    position: 'relative',
    paddingTop: Units.phone.gutter.mini * 2,
    paddingBottom: Units.phone.gutter.mini * 2,
    '&dense': {
      paddingTop: Units.phone.gutter.mini * 1.5,
      paddingBottom: Units.phone.gutter.mini * 1.5,
      ' iconContainer': {
        height: 32,
        padding: '8px 12px' ,
      }
    },
    '&hasFloatingLabel': {
      ' iconContainer': {
        padding: '32px 12px',
      },
      ' errorText': {
        top: 10,
        // left: 48 + Units.phone.gutter.mini
      }
    },
    '&hasIcon': {
      paddingLeft: 48,
      ' errorText': {
        // left: 48 + Units.phone.gutter.mini
      }
    },
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
    position: 'relative',
    left: Units.phone.gutter.mini,
    right: Units.phone.gutter.mini,
    top: 2,
    color: Colors.material.red[500].hex,
    fontSize: 12,
    lineHeight: '12px'
  }
});

const underlineStyles = oxygenCss({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderStyle: 'none none solid none',
    borderWidth: 1,
    bottom: - 8,
    margin: 0,
    padding: 0,
    '&active': {
      transition: 'all 0.3s ease',
      transform: 'scaleX(0)',
      borderWidth: 2,
    }
  },
});


const inputStyles = oxygenCss({
  root: {
    position: 'relative',
    border: 0,
    resize: 'none',
    background: 'transparent',
    lineHeight: '16px',
    minHeight: 16,
    fontSize: Typography.phone.body1.fontSize,
    fontWeight: Typography.phone.body1.fontWeight,
    margin: 0,
    padding: 0,
    width: '100%',
    ':focus': {
      outline: 'none',
    },
  }
})

const placeHolderStyles = oxygenCss({
  root: {
    position: 'relative',
    lineHeight: '16px',
    boxSizing: 'border-box',
    marginLeft: Units.phone.gutter.mini,
    marginRight: Units.phone.gutter.mini,
    text: {
      lineHeight: 'inherit',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    // paddingTop: Units.phone.gutter.mini * 1,
    '&hasFloatingLabel': {
      paddingTop: Units.phone.gutter.mini * 3,
    }
  }
});

const labelStyles = oxygenCss({
  root: {
    fontSize: Typography.phone.body1.fontSize,
    fontWeight: Typography.phone.body1.fontWeight,
    top: 24,
    height: 16,
    right: 0,
    position: 'absolute',
    left: 0,
    transition: 'all 0.3s ease',
    transformOrigin: 'bottom left',
    cursor: 'pointer',
    '&focus': {
      transform: 'scale(0.75) translate3d(0, -28px, 0) ',
    }
  }
});
