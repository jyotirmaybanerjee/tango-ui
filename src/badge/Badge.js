import React, { Component } from 'react';
import './badge.sass';

export default class Badge extends Component {

  constructor(props) {
    super(props);
  }

  render() {

  	let kind = this.props.disabled ? 'disabled' : (this.props.primary ? 'primary' : this.props.secondary ? 'secondary' : 'default');
  	let badgeClass = `badge ${kind}`

    return (
      <span className={badgeClass}>
        {this.props.children}
      </span>
    );
  }
}

function exclusiveTypeCheck(props, propName) {  
  if(props['primary'] && props['secondary']) {
  	return new Error('A button can not be more than one type');
  }
  return null;
}

Badge.propTypes = {
	primary: exclusiveTypeCheck,
	secondary: exclusiveTypeCheck
};
