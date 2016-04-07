'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('../Styles');

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var snackBar = _Styles.Colors.snackBar;

var SnackBar = function (_Component) {
  _inherits(SnackBar, _Component);

  function SnackBar() {
    _classCallCheck(this, SnackBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SnackBar).apply(this, arguments));
  }

  _createClass(SnackBar, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onRequestNext) {
        this.props.onRequestNext();
      }
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      var shade = this.context.theme.shade;
      var position = this.props.position;

      if (position > 1) {
        position = 1;
      }
      return Object.assign({}, {
        transform: 'translate3d(0, ' + -position * 56 + 'px, 0)',
        backgroundColor: snackBar[shade].background,
        color: snackBar[shade].text
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var message = this.props.message;


      return _react2.default.createElement(
        _Portal2.default,
        { tooltip: true },
        _react2.default.createElement(
          'div',
          { className: css.container, style: this.getStyle() },
          message
        )
      );
    }
  }]);

  return SnackBar;
}(_react.Component);

SnackBar.propTypes = {
  message: _react.PropTypes.string,
  position: _react.PropTypes.number,
  onRequestNext: _react.PropTypes.func
};
SnackBar.defaultProps = {};
SnackBar.contextTypes = {
  theme: _react.PropTypes.object
};
exports.default = SnackBar;


var css = {
  container: 'omd_bE'
};