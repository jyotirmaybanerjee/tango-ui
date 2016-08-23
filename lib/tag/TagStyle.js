"use strict";

var _styleVariables = require("../styles/styleVariables");

var _styleVariables2 = _interopRequireDefault(_styleVariables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  tags: {
    backgroundColor: _styleVariables2.default.inverseColor,
    // border: 1px solid #cccccc;
    overflow: "hidden",
    paddingLeft: "5px",
    paddingTop: "5px"
  },
  tagsFocused: {
    borderColor: _styleVariables2.default.menuColorDarken
  },
  tag: {
    backgroundColor: _styleVariables2.default.inverseColor,
    borderRadius: "4px",
    border: "1px solid " + _styleVariables2.default.activeColor,
    color: _styleVariables2.default.activeColor,
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