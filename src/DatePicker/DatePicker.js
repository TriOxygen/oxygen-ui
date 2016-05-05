import React, { PropTypes, Component } from 'react';
import { Motion, spring } from 'react-motion';
import DatePickerContainer from './DatePickerContainer';
import IconButton from '../IconButton';
import TextField from '../TextField/TextField';
import { Units } from '../Styles';

import ContentClear from 'oxygen-md-svg-icons/lib/Content/Clear';

const css = oxygenCss({
  clearButton: {
    position: 'absolute',
    right: -4,
    bottom: -16,
  }
});

export default class DatePicker extends Component {

  static propTypes = {
    onOK: PropTypes.func,
    locale: PropTypes.string,
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
    mdColor: PropTypes.string,
    floatingLabelText: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  static defaultProps = {
    locale: 'en-US',
  };

  static childContextTypes = {
    mdColor: PropTypes.string,
  };

  getChildContext() {
    return {
      mdColor: this.props.mdColor
    }
  }

  state = {
    open: false,
    value: this.props.defaultValue,
  };

  constructor() {
    super(...arguments);
    this.setupFormats(this.props.locale);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.locale !== nextProps.locale) {
      this.setupFormats(this.props.locale);
    }
  }

  setupFormats(locale) {
    this.dateTimeFormat = new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }


  open = event => {
    if (!this.state.open) {
      this.setState({ open: true });
    }
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  close = () => {
    if (this.state.open) {
      this.setState({ open: false });
    }
  };

  handleOK = date => {
    const { onOK } = this.props;
    this.setState({ value: date });
    onOK && onOK(date);
  };

  handleClear = event => {
    this.setState({ value: '' });
  };

  getValue() {
    return this.state.date;
  }

  render() {
    const { open, value } = this.state;
    const { placeholder, fullWidth, type, floatingLabelText, ...other } = this.props;
    const readable = value && this.dateTimeFormat.format(value) || '';
    const styles = this.getStyles();

    return (
      <TextField
        placeholder={placeholder}
        fullWidth={fullWidth}
        type={type}
        floatingLabelText={floatingLabelText}
        value={readable}
        ref="field"
        onFocus={this.open}
        onTouchTap={this.open}
      >
        <Motion style={{ y: spring(open ? 100 : 0, { stiffness: 300, damping: 25 }), opacity: spring(open ? 1 : 0), top: open ? 0 : -100 }}>
          {interpolated => {
            if (interpolated.opacity > 0) {
              return <DatePickerContainer {...other} onOK={this.handleOK} {...interpolated} onRequestClose={this.close} onRequestOpen={this.open}/>;
            }
            return null;
          }}
        </Motion>
        {readable && <IconButton onTouchTap={this.handleClear} className={css.clearButton}><ContentClear block/></IconButton>}
      </TextField>
    );
  }
}