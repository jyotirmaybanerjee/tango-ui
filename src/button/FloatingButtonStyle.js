import variables from '../styles/styleVariables';

let floatingBtnBasic = {
  color: variables.primaryTextColor,
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  boxSizing: "border-box",
  fontFamily: variables.fontStack,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  borderRadius: "50%",
  display: "inline-block",
  // marginRight: "20px",
  backgroundColor: variables.inverseColor
};
let floatingBtnNormal = {
    ...floatingBtnBasic,
    boxShadow: "rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px"
};
let buttonBasic = {
  border: "10px",
  boxSizing: "border-box",
  display: "inline-block",
  fontFamily: "Roboto, sans-serif",
  cursor: "pointer",
  textDecoration: "none",
  margin: "0px",
  padding: "0px",
  outline: "none",
  fontSize: "inherit",
  fontWeight: "inherit",
  transform: "translate(0px, 0px)",
  verticalAlign: "bottom",
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  position: "relative",
  height: "56px",
  width: "56px",
  overflow: "hidden",
  borderRadius: "50%",
  textAlign: "center"
};
let innerContainerBasic = {
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  top: "0px"
};
let innerSpanBasic = {
  display: "inline-block",
  height: "56px",
  width: "24px",
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  lineHeight: "56px",
  WebkitUserSelect: "none"
};

module.exports = {
  floatingBtnDisabled: floatingBtnBasic,
  floatingBtnNormal: floatingBtnNormal,
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

  innerSpanDefault: {
    ...innerSpanBasic,
    color: "rgba(0, 0, 0, 0.870588)"
  },
  innerSpanNormal: {
    ...innerSpanBasic,
    color: variables.inverseColor,
    fill: variables.inverseColor
  },
  innerSpanDisabled: {
    ...innerSpanBasic,
    color: "rgba(0, 0, 0, 0.298039)"
  }
};
