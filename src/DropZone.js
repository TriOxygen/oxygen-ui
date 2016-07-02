import React, { Component, PropTypes } from 'react';
import Paper from './Paper';
import classNames from 'classnames';
import accepts from 'attr-accept';

const supportMultiple = (typeof document !== 'undefined' && document && document.createElement) ?
  'multiple' in document.createElement('input') :
  true;

const css = oxygenCss({
  root: {
    position: 'relative',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#DDD',
    cursor: 'pointer',
    '&active': {
      borderStyle: 'solid',
      borderColor: '#CFC',
    },
    '&reject': {
      borderStyle: 'solid',
      backgroundColor: '#FCC'
    },
  },
  input: {
    display: 'none'
  },
});

class DropZone extends Component {
  static propTypes = {
    onDrop: PropTypes.func,
    onDropAccepted: PropTypes.func,
    onDropRejected: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragLeave: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    disablePreview: PropTypes.bool,
    disableClick: PropTypes.bool,
    inputProps: PropTypes.object,
    multiple: PropTypes.bool,
    accept: PropTypes.string,
    name: PropTypes.string,
  };

  static defaultProps = {
    disablePreview: false,
    disableClick: false,
    multiple: true
  };

  state = {
    isDragActive: false
  };

  componentDidMount() {
    this._enterCount = 0;
  }

  onDragEnter = event => {
    const { onDragEnter } = this.props;
    // Count the dropzone and any children that are entered.
    ++this._enterCount;

    // This is tricky. During the drag even the dataTransfer.files is null
    // But Chrome implements some drag store, which is accesible via dataTransfer.items
    const dataTransferItems = event.dataTransfer && event.dataTransfer.items ? event.dataTransfer.items : [];

    // Now we need to convert the DataTransferList to Array
    const allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));

    this.setState({
      isDragActive: allFilesAccepted,
      isDragReject: !allFilesAccepted
    });

    onDragEnter && onDragEnter(event);
  };

  onDragOver = event => {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  onDragLeave = event => {
    const { onDragLeave } = this.props;
    event.preventDefault();

    if (--this._enterCount > 0) {
      return;
    }

    this.setState({
      isDragActive: false,
      isDragReject: false
    });

    onDragLeave && onDragLeave(event);
  };

  onDrop = event => {
    const { onDrop, onDropAccepted, onDropRejected } = this.props;
    event.preventDefault();

    this._enterCount = 0;

    this.setState({
      isDragActive: false,
      isDragReject: false
    });

    const droppedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    const max = this.props.multiple ? droppedFiles.length : Math.min(droppedFiles.length, 1);
    const files = [];

    for (let i = 0; i < max; i++) {
      const file = droppedFiles[i];
      // We might want to disable the preview creation to support big files
      if (!this.props.disablePreview) {
        file.preview = window.URL.createObjectURL(file);
      }
      files.push(file);
    }

    onDrop && onDrop(files, event);

    if (this.props.onDrop) {
      this.props.onDrop.call(this, files, event);
    }

    if (this.allFilesAccepted(files)) {
      onDropAccepted && onDropAccepted(files, event);
    } else {
      onDropRejected && onDropRejected(files, event);
    }
  };

  onClick = () => {
    if (!this.props.disableClick) {
      this.open();
    }
  };

  allFilesAccepted(files) {
    return files.every(file => accepts(file, this.props.accept));
  }

  open() {
    this.fileInputEl.value = null;
    this.fileInputEl.click();
  }

  render() {
    const {
      accept,
      inputProps,
      multiple,
      name,
      className,
      children,
      disablePreview,
      onDropAccepted,
      disableClick,
      onDropRejected,
      ...other
    } = this.props;

    const { isDragActive, isDragReject } = this.state;

    const classes = classNames(className, css.root, {
      [css.active]: isDragActive,
      [css.reject]: isDragReject
    });
    return (
      <Paper
        className={classes}
        onClick={this.onClick}
        onDragEnter={this.onDragEnter}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        {...other}
      >
        {children}
        <input
          name={name}
          accept={accept}
          type={'file'}
          className={css.input}
          multiple={supportMultiple && multiple}
          ref={el => this.fileInputEl = el}
          onChange={this.onDrop}
        />
      </Paper>
    );
  }
}

export default DropZone;
