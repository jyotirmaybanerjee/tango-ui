'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BadgeStyles = require('./BadgeStyles');

var _BadgeStyles2 = _interopRequireDefault(_BadgeStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function exclusiveTypeCheck(props, propName) {
  if (props['primary'] && props['secondary']) {
    return new Error('A BADGE can not be more than one type');
  }
  return null;
}

var Badge = function (_Component) {
  _inherits(Badge, _Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Badge).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: 'render',
    value: function render() {

      var kind = this.props.primary ? 'primary' : this.props.secondary ? 'secondary' : 'default';
      var badgeKind = {};
      if (kind === 'primary') {
        badgeKind = _BadgeStyles2.default.badgePrimary;
      } else if (kind === 'secondary') {
        badgeKind = _BadgeStyles2.default.badgeSecondary;
      } else if (kind === 'default') {
        badgeKind = _BadgeStyles2.default.badgeDefault;
      }

      return _react2.default.createElement(
        'span',
        { style: badgeKind },
        this.props.children
      );
    }
  }]);

  return Badge;
}(_react.Component);

exports.default = Badge;


Badge.propTypes = {
  primary: exclusiveTypeCheck,
  secondary: exclusiveTypeCheck
};