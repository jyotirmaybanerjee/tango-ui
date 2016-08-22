'use strict';

var React = require('react');
var badgeStyles = require('./BadgeStyles');

module.exports = React.createClass({
  displayName: 'exports',


  render: function render() {

    var kind = this.props.primary ? 'primary' : this.props.secondary ? 'secondary' : 'default';
    var badgeKind = {};
    if (kind === 'primary') {
      badgeKind = badgeStyles.badgePrimary;
    } else if (kind === 'secondary') {
      badgeKind = badgeStyles.badgeSecondary;
    } else if (kind === 'default') {
      badgeKind = badgeStyles.badgeDefault;
    }

    return React.createElement(
      'span',
      { style: badgeKind },
      this.props.children
    );
  }
});

// function exclusiveTypeCheck(props, propName) {
//   if(props['primary'] && props['secondary']) {
//   	return new Error('A button can not be more than one type');
//   }
//   return null;
// }
//
// Badge.propTypes = {
// 	primary: exclusiveTypeCheck,
// 	secondary: exclusiveTypeCheck
// };