import React, { Component } from 'react';
import badgeStyles from './BadgeStyles';

function exclusiveTypeCheck(props, propName) {
  if(props['primary'] && props['secondary']) {
    return new Error('A BADGE can not be more than one type');
  }
  return null;
}

export default class Badge extends Component {

  render() {

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
}

Badge.propTypes = {
	primary: exclusiveTypeCheck,
	secondary: exclusiveTypeCheck
};
