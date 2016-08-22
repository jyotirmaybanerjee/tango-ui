var React = require('react');
var badgeStyles = require('./BadgeStyles');

module.exports = React.createClass({

  render: function() {

  	let kind = this.props.primary ? 'primary' : this.props.secondary ? 'secondary' : 'default';
    let badgeKind = {};
    if(kind === 'primary') {
      badgeKind = badgeStyles.badgePrimary;
    } else if(kind === 'secondary') {
      badgeKind = badgeStyles.badgeSecondary;
    } else if(kind === 'default') {
      badgeKind = badgeStyles.badgeDefault;
    }

    return (
      <span style={badgeKind}>
        {this.props.children}
      </span>
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
