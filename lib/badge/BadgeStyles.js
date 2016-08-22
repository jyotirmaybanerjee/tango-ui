"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styleVariables = require("../styles/styleVariables");

var _styleVariables2 = _interopRequireDefault(_styleVariables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var badgeBasic = {
  display: "inline-block",
  minWidth: "10px",
  padding: "3px 7px",
  fontSize: "9pt",
  fontWeight: "400",
  lineHeight: "1",
  verticalAlign: "baseline",
  whiteSpace: "nowrap",
  textAlign: "center",
  backgroundColor: "#fff",
  border: "solid 1px #007aff",
  borderRadius: "10px",
  color: "#007aff"
};
module.exports = {
  badgeDefault: badgeBasic,
  badgePrimary: _extends({}, badgeBasic, {
    color: "#00bcd4",
    border: "solid 1px #00bcd4"
  }),
  badgeSecondary: _extends({}, badgeBasic, {
    color: "#ff4081",
    border: "solid 1px #ff4081"
  })
};