'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./badge.sass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Badge = function (_Component) {
  _inherits(Badge, _Component);

  function Badge(props) {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Badge).call(this, props));
  }

  _createClass(Badge, [{
    key: 'render',
    value: function render() {

      var kind = this.props.disabled ? 'disabled' : this.props.primary ? 'primary' : this.props.secondary ? 'secondary' : 'default';
      var badgeClass = 'badge ' + kind;

      return _react2.default.createElement(
        'span',
        { className: badgeClass },
        this.props.children
      );
    }
  }]);

  return Badge;
}(_react.Component);

exports.default = Badge;


function exclusiveTypeCheck(props, propName) {
  if (props['primary'] && props['secondary']) {
    return new Error('A button can not be more than one type');
  }
  return null;
}

Badge.propTypes = {
  primary: exclusiveTypeCheck,
  secondary: exclusiveTypeCheck
};