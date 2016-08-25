'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Li = function (_Component) {
  _inherits(Li, _Component);

  function Li(props) {
    _classCallCheck(this, Li);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Li).call(this, props));

    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(Li, [{
    key: 'toggleHover',
    value: function toggleHover() {
      this.setState({ hover: !this.state.hover });
    }
  }, {
    key: 'render',
    value: function render() {

      var linkStyle = void 0;
      if (this.state.hover) {
        linkStyle = this.props.hoverLinkStyle;
      } else {
        linkStyle = this.props.linkStyle;
      }

      return _react2.default.createElement(
        'li',
        { style: linkStyle, key: this.props.label, onMouseEnter: this.toggleHover, onMouseLeave: this.toggleHover },
        _react2.default.createElement(
          'a',
          { href: this.props.url, style: this.props.navAStyles },
          this.props.label
        )
      );
    }
  }]);

  return Li;
}(_react.Component);

exports.default = Li;