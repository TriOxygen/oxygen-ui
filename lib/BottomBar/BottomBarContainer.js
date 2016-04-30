'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('../Styles');

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var snackBar = _Styles.Colors.snackBar;

var BottomBarContainer = function (_Component) {
  _inherits(BottomBarContainer, _Component);

  function BottomBarContainer() {
    _classCallCheck(this, BottomBarContainer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BottomBarContainer).apply(this, arguments));
  }

  _createClass(BottomBarContainer, [{
    key: 'getStyle',
    value: function getStyle() {
      var position = this.props.position;

      if (position > 1) {
        position = 1;
      }
      return Object.assign({}, {
        transform: 'translate3d(0, ' + (1 - position) * 100 + '%, 0)'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        _Paper2.default,
        _extends({}, other, { zDepth: 2, className: css.root, rounded: false, style: this.getStyle() }),
        children
      );
    }
  }]);

  return BottomBarContainer;
}(_react.Component);

BottomBarContainer.propTypes = {
  position: _react.PropTypes.number,
  children: _react.PropTypes.node
};
BottomBarContainer.defaultProps = {};
BottomBarContainer.contextTypes = {
  mdTheme: _react.PropTypes.object
};
exports.default = BottomBarContainer;


var css = {
  root: 'omd_cs'
};