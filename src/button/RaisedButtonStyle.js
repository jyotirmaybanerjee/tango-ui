import variables from '../styles/styleVariables';

let raisedBtnBasic = {
  color: variables.primaryTextColor,
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  boxSizing: "border-box",
  fontFamily: variables.fontStack,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  boxShadow: "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",
  borderRadius: "2px",
  display: "inline-block",
  minWidth: "88px",
  // marginRight: "20px",
  backgroundColor: variables.inverseColor
};

let buttonBasic = {
  border: "10px",
  boxSizing: "border-box",
  display: "inline-block",
  fontFamily: variables.fontStack,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  cursor: "pointer",
  textDecoration: "none",
  margin: "0px",
  padding: "0px",
  outline: "none",
  fontSize: "inherit",
  fontWeight: "inherit",
  transform: "translate(0px, 0px)",
  position: "relative",
  height: "36px",
  lineHeight: "36px",
  width: "100%",
  borderRadius: "2px",
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  textAlign: "center"
};
let innerContainerBasic = {
  height: "36px",
  borderRadius: "2px",
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  top: "0px"
};
let innerSpanBasic = {
  position: "relative",
  opacity: "1",
  fontSize: "14px",
  letterSpacing: "0px",
  textTransform: "uppercase",
  fontWeight: "500",
  margin: "0px",
  paddingLeft: "16px",
  paddingRight: "16px",
  color: "rgba(0, 0, 0, 0.870588)",
  WebkitUserSelect: "none"
};

module.exports = {
  raisedBtnBasic: raisedBtnBasic,
  raisedBtnFullWidth: {
      ...raisedBtnBasic,
      minWidth: "100%"
  },

  buttonBasic: buttonBasic,
  buttonPrimary: {
      ...buttonBasic,
      backgroundColor: variables.primaryBtnColor
  },
  buttonSecondary: {
      ...buttonBasic,
      backgroundColor: variables.secondaryBtnColor
  },
  buttonDisabled: {
      ...buttonBasic,
      backgroundColor: variables.disabledBtnColor,
      cursor: "default"
  },

  innerContainer: innerContainerBasic,
  innerContainerDefaultHover: {
      ...innerContainerBasic,
      backgroundColor: "rgba(0, 0, 0, 0.0784314)"
  },
  innerContainerNormaltHover: {
      ...innerContainerBasic,
      backgroundColor: "rgba(255, 255, 255, 0.4)"
  },
  innerSpanBasic: innerSpanBasic,
  innerSpanNormal: {
    ...innerSpanBasic,
    color: variables.inverseColor
  }
};
