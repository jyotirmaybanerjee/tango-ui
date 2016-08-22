import variables from '../styles/styleVariables';

module.exports = {
  color: variables.inverseColor,
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
  backgroundColor: variables.menuColor,
  menuHeader: {
    brand: {
      float: "left",
      padding: "7px 7px",
      fontSize: "19px",
      color: variables.inverseColor
    }
  },
  ul: {
    margin: "0",
    padding: "0",
    listStyle: "none"
  },
  li: {
    display: "inline-block",
    backgroundColor: variables.menuColor
  },
  liHovered: {
    display: "inline-block",
    backgroundColor: variables.menuColorDarken
  },
  a: {
    display: "block",
    padding: "6px 12px",
    textDecoration: "none",
    cursor: "pointer",
    textTransform: "capitalize",
    color: variables.inverseColor
  }
}
