'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FloatingButtonStyle = require('./FloatingButtonStyle');

var _FloatingButtonStyle2 = _interopRequireDefault(_FloatingButtonStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',


  getInitialState: function getInitialState() {
    return { hover: false };
  },

  toggleHover: function toggleHover() {
    this.setState({ hover: !this.state.hover });
  },

  render: function render() {

    var kind = this.props.disabled ? 'disabled' : this.props.primary ? 'primary' : this.props.secondary ? 'secondary' : 'default';

    var floatingBtnStyle = {};
    var btnStyle = {};
    var innerContainerStyle = {};
    var innerSpanStyle = {};

    if (kind === 'disabled') {
      floatingBtnStyle = _FloatingButtonStyle2.default.floatingBtnDisabled;
      btnStyle = _FloatingButtonStyle2.default.buttonDisabled;
      innerContainerStyle = _FloatingButtonStyle2.default.innerContainer;
      innerSpanStyle = _FloatingButtonStyle2.default.innerSpanDisabled;
    } else if (kind === 'primary') {
      floatingBtnStyle = _FloatingButtonStyle2.default.floatingBtnNormal;
      btnStyle = _FloatingButtonStyle2.default.buttonPrimary;
      if (this.state.hover) {
        innerContainerStyle = _FloatingButtonStyle2.default.innerContainerNormaltHover;
      } else {
        innerContainerStyle = _FloatingButtonStyle2.default.innerContainer;
      }
      innerSpanStyle = _FloatingButtonStyle2.default.innerSpanNormal;
    } else if (kind === 'secondary') {
      floatingBtnStyle = _FloatingButtonStyle2.default.floatingBtnNormal;
      btnStyle = _FloatingButtonStyle2.default.buttonSecondary;
      if (this.state.hover) {
        innerContainerStyle = _FloatingButtonStyle2.default.innerContainerNormaltHover;
      } else {
        innerContainerStyle = _FloatingButtonStyle2.default.innerContainer;
      }
      innerSpanStyle = _FloatingButtonStyle2.default.innerSpanNormal;
    } else if (kind === 'default') {
      floatingBtnStyle = _FloatingButtonStyle2.default.floatingBtnNormal;
      btnStyle = _FloatingButtonStyle2.default.buttonBasic;
      if (this.state.hover) {
        innerContainerStyle = _FloatingButtonStyle2.default.innerContainerDefaultHover;
      } else {
        innerContainerStyle = _FloatingButtonStyle2.default.innerContainer;
      }
      innerSpanStyle = _FloatingButtonStyle2.default.innerSpanDefault;
    }

    var btn = _react2.default.createElement(
      'button',
      { type: 'button', style: btnStyle },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: innerContainerStyle, onMouseEnter: this.toggleHover, onMouseLeave: this.toggleHover },
          _react2.default.createElement(
            'span',
            { style: innerSpanStyle },
            this.props.children
          )
        )
      )
    );

    if (this.props.kind === 'disabled') {
      btn = _react2.default.createElement(
        'button',
        { disabled: '', type: 'button', style: btnStyle },
        _react2.default.createElement(
          'div',
          { style: innerContainerStyle },
          _react2.default.createElement(
            'span',
            { style: innerSpanStyle },
            this.props.children
          )
        )
      );
    }

    var consolidatedStyle = {};
    if (this.props.style) {
      consolidatedStyle = _extends({}, floatingBtnStyle, this.props.style);
    }

    return _react2.default.createElement(
      'div',
      { style: consolidatedStyle },
      btn
    );
  }
});