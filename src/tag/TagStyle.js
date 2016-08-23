import variables from '../styles/styleVariables';

module.exports = {
  tags: {
    backgroundColor: variables.inverseColor,
    // border: 1px solid #cccccc;
    overflow: "hidden",
    paddingLeft: "5px",
    paddingTop: "5px"
  },
  tagsFocused: {
    borderColor: variables.menuColorDarken
  },
  tag: {
    backgroundColor: variables.inverseColor,
    borderRadius: "4px",
    border: "1px solid " + variables.activeColor,
    color: variables.activeColor,
    display: "inline-block",
    fontFamily: "sans-serif",
    fontSize: "13px",
    fontWeight: "400",
    marginBottom: "5px",
    marginRight: "5px",
    padding: "5px"
  },
  tagRemove: {
    cursor: "pointer",
  	fontWeight: "bold",
    marginLeft: "4px"
  },
  tagInput: {
    background: "transparent",
  	border: "0",
  	color: "#777777",
  	fontFamily: "sans-serif",
  	fontSize: "13px",
  	fontWeight: "400",
  	marginBottom: "6px",
  	marginTop: "1px",
  	outline: "none",
  	padding: "5px",
  	width: "80px"
  }
};
