"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styleVariables = require("../styles/styleVariables");

var _styleVariables2 = _interopRequireDefault(_styleVariables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var floatingBtnBasic = {
  color: _styleVariables2.default.primaryTextColor,
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  boxSizing: "border-box",
  fontFamily: _styleVariables2.default.fontStack,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  borderRadius: "50%",
  display: "inline-block",
  // marginRight: "20px",
  backgroundColor: _styleVariables2.default.inverseColor
};
var floatingBtnNormal = _extends({}, floatingBtnBasic, {
  boxShadow: "rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px"
});
var buttonBasic = {
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
var innerContainerBasic = {
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  top: "0px"
};
var innerSpanBasic = {
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
  buttonPrimary: _extends({}, buttonBasic, {
    backgroundColor: _styleVariables2.default.primaryBtnColor
  }),
  buttonSecondary: _extends({}, buttonBasic, {
    backgroundColor: _styleVariables2.default.secondaryBtnColor
  }),
  buttonDisabled: _extends({}, buttonBasic, {
    backgroundColor: _styleVariables2.default.disabledBtnColor,
    cursor: "default"
  }),
  innerContainer: innerContainerBasic,
  innerContainerDefaultHover: _extends({}, innerContainerBasic, {
    backgroundColor: "rgba(0, 0, 0, 0.0784314)"
  }),
  innerContainerNormaltHover: _extends({}, innerContainerBasic, {
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  }),

  innerSpanDefault: _extends({}, innerSpanBasic, {
    color: "rgba(0, 0, 0, 0.870588)"
  }),
  innerSpanNormal: _extends({}, innerSpanBasic, {
    color: _styleVariables2.default.inverseColor,
    fill: _styleVariables2.default.inverseColor
  }),
  innerSpanDisabled: _extends({}, innerSpanBasic, {
    color: "rgba(0, 0, 0, 0.298039)"
  })
};