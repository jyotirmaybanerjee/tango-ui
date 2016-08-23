import React, { Component } from 'react';
import tagStyles from './TagStyle';

export default class Tag extends Component {

  static propTypes = {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    addTag: React.PropTypes.func
  }

  render() {
  	let {tag, index, disabled, onRemove, getTagDisplayValue, ...other} = this.props;
    return (
      <span key={index} {...other} style={tagStyles.tag}>
        {getTagDisplayValue(tag)}
        {!disabled &&
          <a onClick={(e) => onRemove(index)}>
          	<span style={tagStyles.tagRemove}>x</span>
          </a>
        }
      </span>
    );
  }
}
