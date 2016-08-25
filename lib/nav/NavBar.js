'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavStyles = require('./NavStyles');

var _NavStyles2 = _interopRequireDefault(_NavStyles);

var _Li = require('./Li');

var _Li2 = _interopRequireDefault(_Li);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_Component) {
  _inherits(NavBar, _Component);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NavBar).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {

      var links = this.props.links.map(function (link) {
        return _react2.default.createElement(_Li2.default, {
          linkStyle: _NavStyles2.default.li,
          hoverLinkStyle: _NavStyles2.default.liHovered,
          label: link.label,
          url: link.url,
          navAStyles: _NavStyles2.default.a,
          key: link.label });
      });
      return _react2.default.createElement(
        'nav',
        { style: _NavStyles2.default },
        _react2.default.createElement(
          'section',
          { style: _NavStyles2.default.menuHeader },
          _react2.default.createElement(
            'div',
            { style: _NavStyles2.default.menuHeader.brand },
            this.props.brand || ''
          )
        ),
        _react2.default.createElement(
          'ul',
          { style: _NavStyles2.default.ul },
          links
        )
      );
    }
  }]);

  return NavBar;
}(_react.Component);

exports.default = NavBar;