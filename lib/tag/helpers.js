'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, [{
    key: 'removeDuplicates',
    value: function removeDuplicates(tagArray) {

      var result = [];
      for (var i = 0, length = tagArray.length; i < length; i++) {
        if (result.indexOf(tagArray[i]) < 0) {
          result.push(tagArray[i]);
        }
      }
      return result;
    }
  }, {
    key: 'getClipboardData',
    value: function getClipboardData(event) {

      if (window.clipboardData) {
        return window.clipboardData.getData('Text');
      } else if (event.clipboardData) {
        return event.clipboardData.getData('text/plain');
      } else {
        return '';
      }
    }
  }]);

  return Helpers;
}();

module.exports = new Helpers();