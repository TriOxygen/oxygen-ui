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

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Collapsible = require('./Collapsible');

var _Collapsible2 = _interopRequireDefault(_Collapsible);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _RemoveCircleOutline = require('oxygen-md-svg-icons/lib/Content/RemoveCircleOutline');

var _RemoveCircleOutline2 = _interopRequireDefault(_RemoveCircleOutline);

var _AddCircleOutline = require('oxygen-md-svg-icons/lib/Content/AddCircleOutline');

var _AddCircleOutline2 = _interopRequireDefault(_AddCircleOutline);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var css = {
  heading: 'omd_c8'
};

var InputGroup = function (_Component) {
  _inherits(InputGroup, _Component);

  function InputGroup() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, InputGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputGroup)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      open: _this.props.open
    }, _this.toggle = function () {
      _this.setState({ open: !_this.state.open });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputGroup, [{
    key: 'render',
    value: function render() {
      var mdTheme = this.context.mdTheme;
      var open = this.state.open;
      var _props = this.props;
      var children = _props.children;
      var title = _props.title;
      var closedColor = _props.closedColor;

      var other = _objectWithoutProperties(_props, ['children', 'title', 'closedColor']);

      var mdColor = open && mdTheme.secondary || closedColor;
      var iconColor = mdTheme.colors[mdColor][300].text.disabled;
      return _react2.default.createElement(
        _Paper2.default,
        _extends({ spaced: true }, other),
        _react2.default.createElement(
          _Heading2.default,
          {
            onTouchTap: this.toggle,
            mdColor: mdColor,
            margin: false,
            className: css.heading,
            title: true
          },
          _react2.default.createElement(
            _View2.default,
            null,
            _react2.default.createElement(
              _View2.default,
              { grow: 1, auto: true, column: true, wrap: true },
              title
            ),
            _react2.default.createElement(
              _View2.default,
              { grow: 0, style: { color: iconColor } },
              open && _react2.default.createElement(_RemoveCircleOutline2.default, { block: true }),
              !open && _react2.default.createElement(_AddCircleOutline2.default, { block: true })
            )
          )
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          _Collapsible2.default,
          { open: open },
          children
        )
      );
    }
  }]);

  return InputGroup;
}(_react.Component);

InputGroup.propTypes = {
  children: _react.PropTypes.node,
  open: _react.PropTypes.bool,
  title: _react.PropTypes.node,
  closedColor: _react.PropTypes.string
};
InputGroup.defaultProps = {
  open: true,
  closedColor: 'grey'
};
InputGroup.contextTypes = {
  mdTheme: _react.PropTypes.object
};
exports.default = InputGroup;