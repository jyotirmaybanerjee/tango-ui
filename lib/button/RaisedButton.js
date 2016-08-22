'use strict';

var React = require('react');
var raisedButtonStyles = require('./RaisedButtonStyle');

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

    var raisedBtnStyle = {};
    var btnStyle = {};
    var innerContainerStyle = {};
    var innerSpanStyle = {};

    if (this.props.fullWidth) {
      raisedBtnStyle = raisedButtonStyles.raisedBtnFullWidth;
    } else {
      raisedBtnStyle = raisedButtonStyles.raisedBtnBasic;
    }

    if (kind === 'disabled') {
      btnStyle = raisedButtonStyles.buttonDisabled;
      innerContainerStyle = raisedButtonStyles.innerContainer;
      innerSpanStyle = raisedButtonStyles.innerSpanBasic;
    } else if (kind === 'primary') {
      btnStyle = raisedButtonStyles.buttonPrimary;
      if (this.state.hover) {
        innerContainerStyle = raisedButtonStyles.innerContainerNormaltHover;
      } else {
        innerContainerStyle = raisedButtonStyles.innerContainer;
      }
      innerSpanStyle = raisedButtonStyles.innerSpanNormal;
    } else if (kind === 'secondary') {
      btnStyle = raisedButtonStyles.buttonSecondary;
      if (this.state.hover) {
        innerContainerStyle = raisedButtonStyles.innerContainerNormaltHover;
      } else {
        innerContainerStyle = raisedButtonStyles.innerContainer;
      }
      innerSpanStyle = raisedButtonStyles.innerSpanNormal;
    } else if (kind === 'default') {
      btnStyle = raisedButtonStyles.buttonBasic;
      if (this.state.hover) {
        innerContainerStyle = raisedButtonStyles.innerContainerDefaultHover;
      } else {
        innerContainerStyle = raisedButtonStyles.innerContainer;
      }
      innerSpanStyle = raisedButtonStyles.innerSpanBasic;
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

    return React.createElement(
      'div',
      { style: raisedBtnStyle },
      btn
    );
  }
});