import React, { Component, PropTypes } from 'react';
import { Units } from '../Styles';
import classNames from 'classnames';

class EnhancedTextArea extends Component {
  static propTypes = {
    limited: PropTypes.bool
  };

  handleInput = event => {
    const { _span } = this;
    _span.textContent = event.target.value;
  };

  focus() {
    this._textarea.focus();
  }

  select() {
    this._textarea.select();
  }

  componentDidMount() {
    const { _textarea, _span } = this;
    if (_textarea.addEventListener) {
      _textarea.addEventListener('input', this.handleInput, false);
      _span.textContent = _textarea.value;
    }
  }

  getValue() {
    return this._textarea.value;
  }

  componentWillUnmount() {
    this._textarea.removeEventListener('input', this.handleInput);
  }

  render() {
    const { limited } = this.props;
    return (
      <div className={css.expandingArea}>
        <pre className={classNames(css.shared, css.pre, { [css.limited]: limited})}>
          <span ref={span => this._span = span}></span><br />
        </pre>
        <textarea {...this.props} ref={textarea => this._textarea = textarea} className={classNames(css.shared, css.textarea, { [css.limited]: limited})}/>
      </div>
    );
  }
}

const css = oxygenCss({
  expandingArea: {
    position: 'relative',
  },
  shared: {
    background: 'transparent',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    margin: 0,
    padding: 0,
    fontFamily: 'inherit',
    fontSize: 'inherit'
  },
  limited: {
    maxHeight: 200,
  },
  textarea: {
    border: 0,
    boxSizing: 'border-box',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    resize: 'none',
    overflow: 'hidden'
  },
  pre: {
    display: 'block',
    visibility: 'hidden'
  }
});

export default EnhancedTextArea;
