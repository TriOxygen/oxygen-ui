'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaQuery = function () {
  function MediaQuery() {
    _classCallCheck(this, MediaQuery);

    var tabletWidth = 768;
    var desktopWidth = 1024;

    this.tabletQuery = '(min-width : ' + tabletWidth + 'px) and (max-width: ' + desktopWidth + 'px)';
    this.tabletDesktopQuery = '(min-width : ' + tabletWidth + 'px)';
    this.desktopQuery = '(min-width : ' + desktopWidth + 'px)';
    this.phoneQuery = '(max-width : ' + (tabletWidth - 1) + 'px)';
    this.portraitPhoneQuery = '(max-width : ' + (tabletWidth - 1) + 'px) and (orientation: portrait)';
  }

  _createClass(MediaQuery, [{
    key: 'detect',
    value: function detect() {
      if (this.phone()) {
        return 'phone';
      } else if (this.tablet()) {
        return 'tablet';
      } else if (this.desktop()) {
        return 'desktop';
      }
    }
  }, {
    key: 'tablet',
    value: function tablet() {
      return window.matchMedia(this.tabletQuery).matches;
    }
  }, {
    key: 'tabletOrDesktop',
    value: function tabletOrDesktop() {
      return window.matchMedia(this.tabletDesktopQuery).matches;
    }
  }, {
    key: 'desktop',
    value: function desktop() {
      return window.matchMedia(this.desktopQuery).matches;
    }
  }, {
    key: 'phone',
    value: function phone() {
      return window.matchMedia(this.phoneQuery).matches;
    }
  }, {
    key: 'portraitPhone',
    value: function portraitPhone() {
      return window.matchMedia(this.portraitPhoneQuery).matches;
    }
  }]);

  return MediaQuery;
}();

exports.default = new MediaQuery();