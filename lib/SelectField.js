'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TextField = require('./TextField/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Menu = require('./Menus/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _reactMotion = require('react-motion');

var _ArrowDropDown = require('oxygen-md-svg-icons/lib/Navigation/ArrowDropDown');

var _ArrowDropDown2 = _interopRequireDefault(_ArrowDropDown);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectField = function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField() {
    _classCallCheck(this, SelectField);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectField).apply(this, arguments));

    _initialiseProps.call(_this);

    var defaultValue = _this.props.defaultValue;

    var value = void 0;
    var payload = void 0;
    if (_this.props.children.length) {
      _this.props.children.some(function (child) {
        if (child.props.payload === defaultValue) {
          value = child.props.label;
          payload = child.props.payload;
          return true;
        }
      });
    }
    _this.state = {
      value: value,
      payload: payload,
      hover: false,
      active: false,
      menu: false
    };
    return _this;
  }

  _createClass(SelectField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props;
      var children = _props.children;
      var defaultValue = _props.defaultValue;

      if (nextProps.defaultValue !== defaultValue) {
        if (children.length) {
          var selectedChild = children.find(function (child) {
            return child.props.payload === nextProps.defaultValue;
          });
          if (selectedChild) {
            this.setState({
              value: selectedChild.props.label,
              payload: selectedChild.props.payload
            });
          }
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._node = _reactDom2.default.findDOMNode(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('mousewheel', this.handleMenuClose);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.payload;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var payload = this.state.payload;

      return _react2.default.Children.map(this.props.children, function (child) {
        return _react2.default.cloneElement(child, {
          active: payload === child.props.payload
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state;
      var left = _state.left;
      var top = _state.top;
      var width = _state.width;
      var menu = _state.menu;
      var value = _state.value;
      var _props2 = this.props;
      var children = _props2.children;

      var other = _objectWithoutProperties(_props2, ['children']);

      return _react2.default.createElement(
        _TextField2.default,
        _extends({}, other, {
          readOnly: true,
          className: css.select,
          value: value || menu && ' ' || '',
          ref: 'field',
          onFocus: this.handleTouchTap,
          onTouchTap: this.handleTouchTap
        }),
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { progress: (0, _reactMotion.spring)(menu ? 1 : 0) } },
          function (interpolated) {
            var progress = interpolated.progress;

            if (progress > 0) {
              return _react2.default.createElement(
                _Portal2.default,
                { positioned: true, menu: true, style: { transform: 'translate3d(' + (left + 4) + 'px, ' + top + 'px, 0)' } },
                _react2.default.createElement(
                  _Menu2.default,
                  {
                    rounded: false,
                    padded: false,
                    zDepth: 2,
                    disabled: progress < 1,
                    onMenuItemTap: _this2.select,
                    onRequestClose: _this2.handleMenuClose,
                    style: {
                      position: 'relative',
                      width: width - 8,
                      top: 60 - progress * 32,
                      opacity: progress
                    }
                  },
                  _this2.renderChildren()
                )
              );
            }
            return null;
          }
        ),
        _react2.default.createElement(_ArrowDropDown2.default, { className: css.arrow })
      );
    }
  }]);

  return SelectField;
}(_react.Component);

SelectField.propTypes = {
  disabled: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  onChange: _react.PropTypes.func,
  theme: _react.PropTypes.object,
  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string, _react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.array]),
  fullWidth: _react.PropTypes.bool,
  placeholder: _react.PropTypes.string
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleClick = function (event) {
    event.preventDefault();
    event.stopPropagation();
  };

  this.handleTouchTap = function (event) {
    event.preventDefault();
    event.stopPropagation();

    var _node$getBoundingClie = _this3._node.getBoundingClientRect();

    var left = _node$getBoundingClie.left;
    var top = _node$getBoundingClie.top;
    var width = _node$getBoundingClie.width;

    window.addEventListener('mousewheel', _this3.handleMenuClose);
    _this3.setState({ menu: true, left: left + document.body.scrollLeft, top: top + document.body.scrollTop, width: width });
  };

  this.handleMenuClose = function () {
    _this3.setState({ menu: false });
  };

  this.handleKeyPress = function (event) {
    var keyCode = event.keyCode;

    if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
      _this3.handleTouchTap(event);
      event.preventDefault();
    }
  };

  this.select = function (payload, label) {
    if (_this3.state.payload !== payload) {
      var onChange = _this3.props.onChange;

      _this3.setState({ value: label, payload: payload });
      onChange && onChange(payload);
    }
  };
};

var css = {
  select: 'oui_fr',
  arrow: 'oui_fs'
};

exports.default = SelectField;