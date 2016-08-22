var React = require('react');
var floatingButtonStyles = require('./FloatingButtonStyle');

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

    let floatingBtnStyle = {};
    let btnStyle = {};
    let innerContainerStyle = {};
    let innerSpanStyle = {};

    if(kind === 'disabled') {
        floatingBtnStyle = floatingButtonStyles.floatingBtnDisabled;
        btnStyle = floatingButtonStyles.buttonDisabled;
        innerContainerStyle = floatingButtonStyles.innerContainer;
        innerSpanStyle = floatingButtonStyles.innerSpanDisabled;
    } else if(kind === 'primary') {
        floatingBtnStyle = floatingButtonStyles.floatingBtnNormal;
        btnStyle = floatingButtonStyles.buttonPrimary;
        if (this.state.hover) {
          innerContainerStyle = floatingButtonStyles.innerContainerNormaltHover;
        } else {
          innerContainerStyle = floatingButtonStyles.innerContainer;
        }
        innerSpanStyle = floatingButtonStyles.innerSpanNormal;
    } else if(kind === 'secondary') {
        floatingBtnStyle = floatingButtonStyles.floatingBtnNormal;
        btnStyle = floatingButtonStyles.buttonSecondary;
        if (this.state.hover) {
          innerContainerStyle = floatingButtonStyles.innerContainerNormaltHover;
        } else {
          innerContainerStyle = floatingButtonStyles.innerContainer;
        }
        innerSpanStyle = floatingButtonStyles.innerSpanNormal;
    } else if(kind === 'default') {
        floatingBtnStyle = floatingButtonStyles.floatingBtnNormal;
        btnStyle = floatingButtonStyles.buttonBasic;
        if (this.state.hover) {
          innerContainerStyle = floatingButtonStyles.innerContainerDefaultHover;
        } else {
          innerContainerStyle = floatingButtonStyles.innerContainer;
        }
        innerSpanStyle = floatingButtonStyles.innerSpanDefault;
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

    let consolidatedStyle = {};
    if(this.props.style) {
      consolidatedStyle = {...floatingBtnStyle, ...this.props.style};
    }

    return (
		<div style={consolidatedStyle}>
			{btn}
		</div>
    );
  }
});
