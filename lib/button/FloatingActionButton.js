'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var floatingButtonStyles = require('./FloatingButtonStyle');

module.exports = React.createClass({
  displayName: 'exports',


  getInitialState: function getInitialState() {
    return { hover: false };
  },

  toggleHover: function toggleHover() {
    this.setState({ hover: !this.state.hover });
  },

  // exclusiveTypeCheck: function(props, propName) {
  //   if(props['primary'] && props['secondary']) {
  //   	return new Error('A button can not be more than one type');
  //   }
  //   return null;
  // },
  //
  // propTypes: {
  //   primary: this.exclusiveTypeCheck,
  // 	secondary: this.exclusiveTypeCheck
  // },

  render: function render() {

    var kind = this.props.disabled ? 'disabled' : this.props.primary ? 'primary' : this.props.secondary ? 'secondary' : 'default';

    var floatingBtnStyle = {};
    var btnStyle = {};
    var innerContainerStyle = {};
    var innerSpanStyle = {};

    if (kind === 'disabled') {
      floatingBtnStyle = floatingButtonStyles.floatingBtnDisabled;
      btnStyle = floatingButtonStyles.buttonDisabled;
      innerContainerStyle = floatingButtonStyles.innerContainer;
      innerSpanStyle = floatingButtonStyles.innerSpanDisabled;
    } else if (kind === 'primary') {
      floatingBtnStyle = floatingButtonStyles.floatingBtnNormal;
      btnStyle = floatingButtonStyles.buttonPrimary;
      if (this.state.hover) {
        innerContainerStyle = floatingButtonStyles.innerContainerNormaltHover;
      } else {
        innerContainerStyle = floatingButtonStyles.innerContainer;
      }
      innerSpanStyle = floatingButtonStyles.innerSpanNormal;
    } else if (kind === 'secondary') {
      floatingBtnStyle = floatingButtonStyles.floatingBtnNormal;
      btnStyle = floatingButtonStyles.buttonSecondary;
      if (this.state.hover) {
        innerContainerStyle = floatingButtonStyles.innerContainerNormaltHover;
      } else {
        innerContainerStyle = floatingButtonStyles.innerContainer;
      }
      innerSpanStyle = floatingButtonStyles.innerSpanNormal;
    } else if (kind === 'default') {
      floatingBtnStyle = floatingButtonStyles.floatingBtnNormal;
      btnStyle = floatingButtonStyles.buttonBasic;
      if (this.state.hover) {
        innerContainerStyle = floatingButtonStyles.innerContainerDefaultHover;
      } else {
        innerContainerStyle = floatingButtonStyles.innerContainer;
      }
      innerSpanStyle = floatingButtonStyles.innerSpanDefault;
    }

    var btn = React.createElement(
      'button',
      { type: 'button', style: btnStyle },
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: innerContainerStyle, onMouseEnter: this.toggleHover, onMouseLeave: this.toggleHover },
          React.createElement(
            'span',
            { style: innerSpanStyle },
            this.props.children
          )
        )
      )
    );

    if (this.props.kind === 'disabled') {
      btn = React.createElement(
        'button',
        { disabled: '', type: 'button', style: btnStyle },
        React.createElement(
          'div',
          { style: innerContainerStyle },
          React.createElement(
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

    return React.createElement(
      'div',
      { style: consolidatedStyle },
      btn
    );
  }
});