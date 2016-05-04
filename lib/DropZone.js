'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('./Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _attrAccept = require('attr-accept');

var _attrAccept2 = _interopRequireDefault(_attrAccept);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;

var css = {
  root: 'omd_cv',
  active: 'omd_cx',
  reject: 'omd_cy',
  input: 'omd_cw'
};

var DropZone = function (_Component) {
  _inherits(DropZone, _Component);

  function DropZone() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DropZone);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DropZone)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.defaultProps = {
      disablePreview: false,
      disableClick: false,
      multiple: true
    }, _this.state = {
      isDragActive: false
    }, _this.onDragEnter = function (event) {
      var onDragEnter = _this.props.onDragEnter;
      // Count the dropzone and any children that are entered.

      ++_this._enterCount;

      // This is tricky. During the drag even the dataTransfer.files is null
      // But Chrome implements some drag store, which is accesible via dataTransfer.items
      var dataTransferItems = event.dataTransfer && event.dataTransfer.items ? event.dataTransfer.items : [];

      // Now we need to convert the DataTransferList to Array
      var allFilesAccepted = _this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));

      _this.setState({
        isDragActive: allFilesAccepted,
        isDragReject: !allFilesAccepted
      });

      onDragEnter && onDragEnter(event);
    }, _this.onDragOver = function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }, _this.onDragLeave = function (event) {
      var onDragLeave = _this.props.onDragLeave;

      event.preventDefault();

      if (--_this._enterCount > 0) {
        return;
      }

      _this.setState({
        isDragActive: false,
        isDragReject: false
      });

      onDragLeave && onDragLeave(event);
    }, _this.onDrop = function (event) {
      var _this$props = _this.props;
      var onDrop = _this$props.onDrop;
      var onDropAccepted = _this$props.onDropAccepted;
      var onDropRejected = _this$props.onDropRejected;

      event.preventDefault();

      _this._enterCount = 0;

      _this.setState({
        isDragActive: false,
        isDragReject: false
      });

      var droppedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      var max = _this.props.multiple ? droppedFiles.length : Math.min(droppedFiles.length, 1);
      var files = [];

      for (var i = 0; i < max; i++) {
        var file = droppedFiles[i];
        // We might want to disable the preview creation to support big files
        if (!_this.props.disablePreview) {
          file.preview = window.URL.createObjectURL(file);
        }
        files.push(file);
      }

      onDrop && onDrop(files, event);

      if (_this.props.onDrop) {
        _this.props.onDrop.call(_this, files, event);
      }

      if (_this.allFilesAccepted(files)) {
        onDropAccepted && onDropAccepted(files, event);
      } else {
        onDropRejected && onDropRejected(files, event);
      }
    }, _this.onClick = function () {
      if (!_this.props.disableClick) {
        _this.open();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropZone, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._enterCount = 0;
    }
  }, {
    key: 'allFilesAccepted',
    value: function allFilesAccepted(files) {
      var _this2 = this;

      return files.every(function (file) {
        return (0, _attrAccept2.default)(file, _this2.props.accept);
      });
    }
  }, {
    key: 'open',
    value: function open() {
      this.fileInputEl.value = null;
      this.fileInputEl.click();
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this3 = this;

      var _props = this.props;
      var accept = _props.accept;
      var inputProps = _props.inputProps;
      var multiple = _props.multiple;
      var name = _props.name;
      var className = _props.className;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ['accept', 'inputProps', 'multiple', 'name', 'className', 'children']);

      var _state = this.state;
      var isDragActive = _state.isDragActive;
      var isDragReject = _state.isDragReject;


      var classes = (0, _classnames2.default)(className, css.root, (_classNames = {}, _defineProperty(_classNames, css.active, isDragActive), _defineProperty(_classNames, css.reject, isDragReject), _classNames));

      return _react2.default.createElement(
        _Paper2.default,
        _extends({
          className: classes,
          onClick: this.onClick,
          onDragEnter: this.onDragEnter,
          onDragOver: this.onDragOver,
          onDragLeave: this.onDragLeave,
          onDrop: this.onDrop
        }, other),
        children,
        _react2.default.createElement('input', {
          name: name,
          accept: accept,
          type: 'file',
          className: css.input,
          multiple: supportMultiple && multiple,
          ref: function ref(el) {
            return _this3.fileInputEl = el;
          },
          onChange: this.onDrop
        })
      );
    }
  }]);

  return DropZone;
}(_react.Component);

DropZone.propTypes = {
  onDrop: _react.PropTypes.func,
  onDropAccepted: _react.PropTypes.func,
  onDropRejected: _react.PropTypes.func,
  onDragEnter: _react.PropTypes.func,
  onDragLeave: _react.PropTypes.func,
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  disablePreview: _react.PropTypes.bool,
  disableClick: _react.PropTypes.bool,
  inputProps: _react.PropTypes.object,
  multiple: _react.PropTypes.bool,
  accept: _react.PropTypes.string,
  name: _react.PropTypes.string
};
exports.default = DropZone;