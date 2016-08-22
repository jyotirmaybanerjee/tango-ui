var React = require('react');
var raisedButtonStyles = require('./RaisedButtonStyle');

module.exports = React.createClass({

  getInitialState: function(){
    return {hover: false}
  },

  toggleHover: function(){
    this.setState({hover: !this.state.hover})
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

  render: function() {

    let kind = this.props.disabled ? 'disabled' : (this.props.primary ? 'primary' : this.props.secondary ? 'secondary' : 'default');

    let raisedBtnStyle = {};
    let btnStyle = {};
    let innerContainerStyle = {};
    let innerSpanStyle = {};

    if(this.props.fullWidth) {
      raisedBtnStyle = raisedButtonStyles.raisedBtnFullWidth;
    } else {
      raisedBtnStyle = raisedButtonStyles.raisedBtnBasic;
    }

    if(kind === 'disabled') {
      btnStyle = raisedButtonStyles.buttonDisabled;
      innerContainerStyle = raisedButtonStyles.innerContainer;
      innerSpanStyle = raisedButtonStyles.innerSpanBasic;
    } else if(kind === 'primary') {
      btnStyle = raisedButtonStyles.buttonPrimary;
      if (this.state.hover) {
        innerContainerStyle = raisedButtonStyles.innerContainerNormaltHover;
      } else {
        innerContainerStyle = raisedButtonStyles.innerContainer;
      }
      innerSpanStyle = raisedButtonStyles.innerSpanNormal;
    } else if(kind === 'secondary') {
      btnStyle = raisedButtonStyles.buttonSecondary;
      if (this.state.hover) {
        innerContainerStyle = raisedButtonStyles.innerContainerNormaltHover;
      } else {
        innerContainerStyle = raisedButtonStyles.innerContainer;
      }
      innerSpanStyle = raisedButtonStyles.innerSpanNormal;
    } else if(kind === 'default') {
      btnStyle = raisedButtonStyles.buttonBasic;
      if (this.state.hover) {
        innerContainerStyle = raisedButtonStyles.innerContainerDefaultHover;
      } else {
        innerContainerStyle = raisedButtonStyles.innerContainer;
      }
      innerSpanStyle = raisedButtonStyles.innerSpanBasic;
    }

  	let btn = (

		<button type="button" style={btnStyle} >
			<div>
				<div style={innerContainerStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
					<span style={innerSpanStyle}>{this.props.children}</span>
				</div>
			</div>
		</button>
  	);

  	if(this.props.kind === 'disabled') {
  		btn = (
			<button disabled='' type="button" style={btnStyle} >
				<div style={innerContainerStyle}>
					<span style={innerSpanStyle}>{this.props.children}</span>
				</div>
			</button>
	  	);
  	}

    return (
		<div style={raisedBtnStyle}>
			{btn}
		</div>
    );
  }
});
