'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Colors = require('./Colors');

var _Colors2 = _interopRequireDefault(_Colors);

var _Units = require('./Units');

var _Units2 = _interopRequireDefault(_Units);

var _Typography = require('./Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
  function Theme(primary, secondary, tertiary) {
    var main = arguments.length <= 3 || arguments[3] === undefined ? 'light' : arguments[3];

    _classCallCheck(this, Theme);

    this.setTheme(primary, secondary, tertiary, main);
  }

  _createClass(Theme, [{
    key: 'setTheme',
    value: function setTheme(primary, secondary, tertiary, main) {
      var themeText = main === 'light' ? 'dark' : 'light';
      // this.primary1 = primary[500].hex;
      // this.primary1Text = primary[500].text.default;
      // this.primary2 = primary[700].hex;
      // this.primary2Text = primary[700].text.default;
      // this.primary3 = primary[100].hex;
      // this.primary3Text = primary[100].text.default;

      // this.secondary1 = secondary[500].hex;
      // this.secondary1Text = secondary[500].text.default;
      // this.secondary2 = secondary[700].hex;
      // this.secondary2Text = secondary[700].text.default;
      // this.secondary3 = secondary[100].hex;
      // this.secondary3Text = secondary[100].text.default;

      // this.tertiary1 = tertiary[600].hex;
      // this.tertiary1Text = tertiary[600].text.default;
      // this.tertiary2 = tertiary[800].hex;
      // this.tertiary2Text = tertiary[800].text.default;
      // this.tertiary3 = tertiary[300].hex;
      // this.tertiary3Text = tertiary[300].text.default;

      this.primary = primary;
      this.secondary = secondary;
      this.tertiary = tertiary;
      this.shade = main;

      this.theme = _Colors2.default.theme[main];
      this.alternate = _Colors2.default.theme[themeText];
      this.alternateText = _Colors2.default.text[main];
      this.text = _Colors2.default.text[themeText];
      this.button = _Colors2.default.button[main];
      this.units = _Units2.default.phone;
      this.typography = _Typography2.default;

      this.colors = _Colors2.default.material;
    }
  }]);

  return Theme;
}();

exports.default = Theme;