'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapsible = function (_Component) {
  _inherits(Collapsible, _Component);

  function Collapsible() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Collapsible);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Collapsible)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._mount = true, _this.state = {
      height: 0
    }, _this.checkChange = function () {
      var open = _this.props.open;

      if (open) {
        var height = _this.state.height;

        if (_this._content.offsetHeight !== height) {
          _this.setState({ height: _this._content.offsetHeight });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Collapsible, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mount = false;
      var height = this._content.offsetHeight;
      this.setState({ height: height }); //eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var open = nextProps.open;

      if (nextProps.open !== this.props.open) {
        var height = this._content.offsetHeight;
        if (open) {
          this.setState({ height: height });
        } else {
          this.setState({ height: 0 });
        }
      }
      if (nextProps.children !== this.props.children && nextProps.open) {
        this.setState({ height: this._content.offsetHeight });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var open = _props.open;
      var height = this.state.height;

      if (this._mount) {
        return _react2.default.createElement(
          'div',
          { ref: function ref(_wrapper) {
              return _this2._wrapper = _wrapper;
            }, style: { height: open ? 'auto' : 0 } },
          _react2.default.createElement(
            'div',
            { ref: function ref(_content) {
                return _this2._content = _content;
              } },
            children
          )
        );
      }
      return _react2.default.createElement(
        _reactMotion.Motion,
        { style: { height: (0, _reactMotion.spring)(open ? height : 0, { stiffness: 300, damping: 25, precision: 0.01 }) } },
        function (interpolated) {
          return _react2.default.createElement(
            'div',
            { ref: function ref(_wrapper) {
                return _this2._wrapper = _wrapper;
              }, style: { height: interpolated.height } },
            _react2.default.createElement(
              'div',
              { ref: function ref(_content) {
                  return _this2._content = _content;
                }, onKeyUp: _this2.checkChange },
              children
            )
          );
        }
      );
    }
  }]);

  return Collapsible;
}(_react.Component);

Collapsible.propTypes = {
  children: _react.PropTypes.node,
  open: _react.PropTypes.bool
};
Collapsible.defaultProps = {
  open: true
};
exports.default = Collapsible;