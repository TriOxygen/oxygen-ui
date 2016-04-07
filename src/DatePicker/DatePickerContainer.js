import React, { PropTypes, Component } from 'react';
import Portal from '../Portal';
import Overlay from '../Overlay';
import Paper from '../Paper';
import ButtonContainer from '../ButtonContainer';
import FlatButton from '../FlatButton';
import { Units } from '../Styles';
import { addMessages, translate as _l } from 'lib/I18n';
import DatePickerMonth from './DatePickerMonth';

addMessages({
  ['en-US']: {
    'Cancel': 'Cancel',
    'Ok': 'Ok',
  }
});


const ESC = 27;

export default class DialogContainer extends Component {

  static contextTypes = {
    theme: PropTypes.object
  };

  static propTypes = {
    date: PropTypes.object,
    cancel: PropTypes.string,
    ok: PropTypes.string,
    children: PropTypes.node,
    top: PropTypes.number,
    theme: PropTypes.object,
    y: PropTypes.number,
    opacity: PropTypes.number,
    onRequestClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
    onOK: PropTypes.func,
    onChange: PropTypes.func,
  };

  state = {
    date: this.props.date || new Date(),
    chosenDate: this.props.date || new Date()
  };

  static defaultProps = {
    cancel: _l`Cancel`,
    ok: _l`Ok`,
  };

  handleTap = () => {
    if (this.props.onRequestClose && this.props.opacity >= 1) {
      this.props.onRequestClose();
    }
  };

  componentWillMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event) => {
    const { keyCode } = event;
    if (keyCode === ESC && this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  };

  stop = (event) => {
    if (this.props.onRequestOpen) {
      this.props.onRequestOpen();
    }
    event.preventDefault();
    event.stopPropagation();
  };

  handleCancel = () => {
    if (this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  };

  handleOK = () => {
    const { onOK, onRequestClose } = this.props;
    const { chosenDate } = this.state;
    onOK && onOK(chosenDate);
    onRequestClose && onRequestClose();
  };

  setChosenDate = chosenDate => {
    if (this.state.chosenDate - chosenDate !== 0) {
      const { onChange } = this.props;
      this.setState({ chosenDate });
      onChange && onChange(chosenDate);
    }
  };

  nextMonth = () => {
    const date = new Date(this.state.date.getTime());
    let next;
    if (date.getMonth() == 11) {
      next = new Date(date.getFullYear() + 1, 0, 1);
    } else {
      next = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }
    this.setState({ date: next });
  };

  previousMonth = () => {
    const date = new Date(this.state.date.getTime());
    let previous;
    if (date.getMonth() == 0) {
      previous = new Date(date.getFullYear() - 1, 11, 1);
    } else {
      previous = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    }
    this.setState({ date: previous });
  };

  getDate() {
    return this.state.chosenDate;
  }

  render() {
    const { top, y, opacity, cancel, ok, ...other } = this.props;
    const { chosenDate, date } = this.state;
    return (
      <Portal dialog>
        <Overlay
          onTouchTap={this.handleTap}
          key="dialog" onKeyup={this.handleKey}
          style={{ top: `${top}%`, opacity }}
        />
        <Paper
          rounded={false}
          className={css.container}
          onTouchTap={this.stop}
          style={{
            // scale: y / 100,
            opacity,
            transform: `translate3d(0, ${y * Units.phone.keylineIncrement * 2 / 100}px, 0)`
          }}
        >
          <DatePickerMonth
            {...other}
            date={date}
            chosenDate={chosenDate}
            onSelectDate={this.setChosenDate}
            onPreviousMonth={this.previousMonth}
            onNextMonth={this.nextMonth}
          />
          <ButtonContainer alignRight fullWidth>
            <FlatButton primary label={cancel} onTouchTap={this.handleCancel}/>
            <FlatButton primary label={ok} onTouchTap={this.handleOK}/>
          </ButtonContainer>
        </Paper>
      </Portal>
    );
  }
}

const css = oxygenCss({
  container: {
    position: 'fixed',
    top: 0,
    '@desktop': {
      left: '50%',
      marginLeft: `${-3.5 * 36 - Units.phone.gutter.mini}px`,
      width: `${7 * 36 + Units.phone.gutter.mini * 2}px`,
    },
  },

});
