import variables from '../styles/styleVariables';

let badgeBasic = {
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
}
module.exports = {
  badgeDefault: badgeBasic,
  badgePrimary: {
      ...badgeBasic,
      color: "#00bcd4",
      border: "solid 1px #00bcd4"
  },
  badgeSecondary: {
      ...badgeBasic,
      color: "#ff4081",
      border: "solid 1px #ff4081"
  }
};
