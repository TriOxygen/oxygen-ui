'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMotion = require('react-motion');

var _Styles = require('./Styles');

var _Paper = require('./Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SplitPane = function (_Component) {
  _inherits(SplitPane, _Component);

  function SplitPane() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, SplitPane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SplitPane)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hasChild: !!_this.props.children
    }, _this.handleResize = function () {
      var _this$_node$getBoundi = _this._node.getBoundingClientRect();

      var width = _this$_node$getBoundi.width;
      var hasChild = _this.state.hasChild;
      var onRest = _this.props.onRest;

      _this._width = width;
      _this.forceUpdate();
      onRest && onRest(hasChild);
    }, _this.handleRest = function () {
      var onRest = _this.props.onRest;
      var hasChild = _this.state.hasChild;

      onRest && onRest(hasChild);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SplitPane, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasChild = !!nextProps.children;
      if (this.state.hasChild !== hasChild) {
        this.setState({
          hasChild: hasChild
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._node = _reactDom2.default.findDOMNode(this);

      var _node$getBoundingClie = this._node.getBoundingClientRect();

      var width = _node$getBoundingClie.width;

      this._width = width;
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var leftComponent = _props.leftComponent;
      var hasChild = this.state.hasChild;

      var width = this._width;
      return _react2.default.createElement(
        _reactMotion.Motion,
        { onRest: this.handleRest, style: { progress: (0, _reactMotion.spring)(hasChild ? 1 : 0, { stiffness: 300, damping: 25, precision: 0.01 }) } },
        function (interpolated) {
          var leftStyle = void 0,
              rightStyle = void 0;
          var deficit = (width - _this2.props.leftWidth) * interpolated.progress;
          if (width) {
            leftStyle = {
              width: width - deficit
            };
            rightStyle = {
              width: deficit
            };
          } else {
            if (hasChild) {
              leftStyle = {
                width: _this2.props.leftWidth
              };
              rightStyle = {
                left: _this2.props.leftWidth
              };
            } else {
              leftStyle = {
                right: 0
              };
              rightStyle = {
                width: 0
              };
            }
          }
          return _react2.default.createElement(
            'div',
            { className: css.root, style: { overflow: interpolated.progress ? 'hidden' : null } },
            _react2.default.createElement(
              'div',
              { className: css.left, style: leftStyle },
              leftComponent
            ),
            hasChild && _react2.default.createElement(
              _Paper2.default,
              { rounded: false, className: css.right, style: rightStyle },
              children
            )
          );
        }
      );
    }
  }]);

  return SplitPane;
}(_react.Component);

SplitPane.propTypes = {
  children: _react.PropTypes.node,
  leftComponent: _react.PropTypes.node,
  onRest: _react.PropTypes.func,
  leftWidth: _react.PropTypes.number
};
SplitPane.defaultProps = {
  leftWidth: _Styles.Units.phone.keylineIncrement * 10
};


var css = {
  root: 'omd_co',
  left: 'omd_cp',
  right: 'omd_cq'
};

exports.default = SplitPane;