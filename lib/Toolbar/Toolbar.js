'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('../Styles');

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: 'omd_b4'
};

var Toolbar = function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Toolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Toolbar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTouchTapLeftIcon = function () {
      var onTouchTapLeftIcon = _this.props.onTouchTapLeftIcon;

      if (onTouchTapLeftIcon) {
        onTouchTapLeftIcon();
      }
    }, _this.handleTouchTapRightIcon = function () {
      var onTouchTapRightIcon = _this.props.onTouchTapRightIcon;

      if (onTouchTapRightIcon) {
        onTouchTapRightIcon();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toolbar, [{
    key: 'getStyle',
    value: function getStyle() {
      var theme = this.props.theme || this.context.theme;
      var _props = this.props;
      var zDepth = _props.zDepth;
      var primary = _props.primary;
      var secondary = _props.secondary;
      var transparent = _props.transparent;

      return Object.assign({}, transparent ? null : {
        backgroundColor: theme.theme.statusBar.material,
        color: theme.theme.statusBar.text.default,
        boxShadow: _Styles.Shadow[zDepth]
      }, secondary && !transparent ? {
        backgroundColor: theme.secondary1,
        color: theme.secondary1Text
      } : null, primary && !transparent ? {
        backgroundColor: theme.primary1,
        color: theme.primary1Text
      } : null);
    }
  }, {
    key: 'getIconStyle',
    value: function getIconStyle() {
      var theme = this.props.theme || this.context.theme;
      var _props2 = this.props;
      var primary = _props2.primary;
      var secondary = _props2.secondary;
      var transparent = _props2.transparent;
      var zDepth = _props2.zDepth;

      return Object.assign({}, transparent ? null : {
        backgroundColor: theme.theme.statusBar.material,
        color: theme.theme.statusBar.text.default,
        boxShadow: _Styles.Shadow[zDepth]
      }, secondary && !transparent ? {
        backgroundColor: theme.secondary1,
        color: theme.secondary1Text
      } : null, primary && !transparent ? {
        backgroundColor: theme.primary1,
        color: theme.primary1Text
      } : null);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var children = _props3.children;
      var leftElement = _props3.leftElement;
      var rightElement = _props3.rightElement;
      var className = _props3.className;
      var primary = _props3.primary;
      var secondary = _props3.secondary;

      var other = _objectWithoutProperties(_props3, ['children', 'leftElement', 'rightElement', 'className', 'primary', 'secondary']);

      var classes = (0, _classnames2.default)(styles.root, className);
      return _react2.default.createElement(
        _View2.default,
        _extends({ row: true, className: classes, style: this.getStyle() }, other),
        leftElement && _react2.default.createElement(
          _View2.default,
          { grow: 0 },
          leftElement
        ),
        _react2.default.createElement(
          _View2.default,
          { grow: 1 },
          children
        ),
        rightElement && _react2.default.createElement(
          _View2.default,
          { grow: 0 },
          rightElement
        )
      );
    }
  }]);

  return Toolbar;
}(_react.Component);

Toolbar.propTypes = {
  zDepth: _react.PropTypes.number,
  transparent: _react.PropTypes.bool,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  leftElement: _react.PropTypes.node,
  rightElement: _react.PropTypes.node,
  theme: _react.PropTypes.object,
  className: _react.PropTypes.string,
  onTouchTapLeftIcon: _react.PropTypes.func,
  onTouchTapRightIcon: _react.PropTypes.func
};
Toolbar.contextTypes = {
  theme: _react.PropTypes.object
};
Toolbar.defaultProps = {
  zDepth: 1
};
exports.default = Toolbar;