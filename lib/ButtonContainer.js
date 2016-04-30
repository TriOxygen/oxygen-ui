'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonContainer = function (_Component) {
  _inherits(ButtonContainer, _Component);

  function ButtonContainer() {
    _classCallCheck(this, ButtonContainer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonContainer).apply(this, arguments));
  }

  _createClass(ButtonContainer, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        mdColor: this.props.mdColor
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props;
      var children = _props.children;
      var alignRight = _props.alignRight;
      var fullWidth = _props.fullWidth;
      var className = _props.className;

      var other = _objectWithoutProperties(_props, ['children', 'alignRight', 'fullWidth', 'className']);

      var rootClasses = (0, _classnames2.default)(styles.root, className, (_classNames = {}, _defineProperty(_classNames, styles.fullWidth, fullWidth), _defineProperty(_classNames, styles.alignRight, alignRight), _classNames));
      return _react2.default.createElement(
        'div',
        _extends({ className: rootClasses }, other),
        children
      );
    }
  }]);

  return ButtonContainer;
}(_react.Component);

ButtonContainer.propTypes = {
  fullWidth: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  alignRight: _react.PropTypes.bool,
  mdColor: _react.PropTypes.string
};
ButtonContainer.contextTypes = {
  mdTheme: _react.PropTypes.object
};
ButtonContainer.childContextTypes = {
  mdColor: _react.PropTypes.string
};
ButtonContainer.defaultProps = {
  fullWidth: true
};
exports.default = ButtonContainer;


var styles = {
  root: 'omd_R',
  fullWidth: 'omd_S',
  alignRight: 'omd_T'
};