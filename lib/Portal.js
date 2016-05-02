'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CSSPropertyOperations = require('react/lib/CSSPropertyOperations');

var _CSSPropertyOperations2 = _interopRequireDefault(_CSSPropertyOperations);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Portal).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _classNames;

      var _props = this.props;
      var style = _props.style;
      var className = _props.className;
      var menu = _props.menu;
      var positioned = _props.positioned;
      var dialog = _props.dialog;
      var tooltip = _props.tooltip;

      this.node = document.createElement('div');
      this.node.className = (0, _classnames2.default)(className, css.root, (_classNames = {}, _defineProperty(_classNames, css.dialog, dialog), _defineProperty(_classNames, css.positioned, positioned), _defineProperty(_classNames, css.menu, menu), _defineProperty(_classNames, css.tooltip, tooltip), _classNames));
      document.body.appendChild(this.node);
      _CSSPropertyOperations2.default.setValueForStyles(this.node, style);
      this.renderPortal(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.renderPortal(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.closePortal();
    }
  }, {
    key: 'closePortal',
    value: function closePortal() {
      if (this.node) {
        (0, _reactDom.unmountComponentAtNode)(this.node);
        document.body.removeChild(this.node);
      }
      this.node = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      var children = props.children;

      if (children.length > 0) {
        _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react2.default.createElement(
          'div',
          null,
          children
        ), this.node);
      } else {
        _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react2.default.Children.only(children), this.node);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(_react.Component);

Portal.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  positioned: _react.PropTypes.bool,
  dialog: _react.PropTypes.bool,
  tooltip: _react.PropTypes.bool,
  menu: _react.PropTypes.bool
};
exports.default = Portal;


var css = {
  root: 'omd_bm',
  menu: 'omd_bn',
  dialog: 'omd_bo',
  tooltip: 'omd_bp',
  positioned: 'omd_bq'
};