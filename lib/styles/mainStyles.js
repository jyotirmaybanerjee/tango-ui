"use strict";

var _styleVariables = require("./styleVariables");

var _styleVariables2 = _interopRequireDefault(_styleVariables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  nav: {
    color: _styleVariables2.default.inverseColor,
    transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",
    boxShadow: "darken( $inverse-color, 10% ) 0px 1px 6px, darken( $inverse-color, 10% ) 0px 1px 4px",
    borderRadius: "0px",
    position: "relative",
    zIndex: "1100",
    width: "100%",
    display: "flex",
    paddingLeft: "24px",
    paddingRight: "24px",
    backgroundColor: _styleVariables2.default.menuColor,
    menuHeader: {
      brand: {
        float: "left",
        padding: "7px 7px",
        fontSize: "19px",
        color: _styleVariables2.default.inverseColor
      }
    },
    ul: {
      margin: "0",
      padding: "0",
      listStyle: "none"
    },
    li: {
      display: "inline-block",
      backgroundColor: _styleVariables2.default.menuColor
    },
    liHovered: {
      backgroundColor: "darken(" + _styleVariables2.default.menuColor + ", 10% )"
    },
    a: {
      display: "block",
      padding: "6px 12px",
      textDecoration: "none",
      cursor: "pointer",
      textTransform: "capitalize",
      color: _styleVariables2.default.inverseColor
    }
  }
};