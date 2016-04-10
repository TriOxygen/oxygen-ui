import React, { Component, PropTypes } from 'react';
import { Units } from '../Styles';
import classNames from 'classnames';

class EnhancedTextArea extends Component {
  static propTypes = {
  };

  handleInput = event => {
    const { _span } = this;
    _span.textContent = event.target.value;
  };

  focus() {
    this._textarea.focus();
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
    return (
      <div className={css.expandingArea}>
        <pre className={classNames(css.shared, css.pre)}>
          <span ref={span => this._span = span}></span><br />
        </pre>
        <textarea {...this.props} ref={textarea => this._textarea = textarea} className={classNames(css.shared, css.textarea)}/>
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
    maxHeight: 200,
    fontFamily: 'inherit',
    fontSize: 'inherit'
  },
  textarea: {
    border: 0,
    boxSizing: 'border-box',
    width: '100%',
    // overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    resize: 'none'
  },
  pre: {
    display: 'block',
    visibility: 'hidden'
  }
});

export default EnhancedTextArea;
