"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styleVariables = require("../styles/styleVariables");

var _styleVariables2 = _interopRequireDefault(_styleVariables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var raisedBtnBasic = {
  color: _styleVariables2.default.primaryTextColor,
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  boxSizing: "border-box",
  fontFamily: _styleVariables2.default.fontStack,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  boxShadow: "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",
  borderRadius: "2px",
  display: "inline-block",
  minWidth: "88px",
  // marginRight: "20px",
  backgroundColor: _styleVariables2.default.inverseColor
};

var buttonBasic = {
  border: "10px",
  boxSizing: "border-box",
  display: "inline-block",
  fontFamily: _styleVariables2.default.fontStack,
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
var innerContainerBasic = {
  height: "36px",
  borderRadius: "2px",
  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
  top: "0px"
};
var innerSpanBasic = {
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
  raisedBtnFullWidth: _extends({}, raisedBtnBasic, {
    minWidth: "100%"
  }),

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
  innerSpanBasic: innerSpanBasic,
  innerSpanNormal: _extends({}, innerSpanBasic, {
    color: _styleVariables2.default.inverseColor
  })
};