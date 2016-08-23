import React, { Component } from 'react';
import tagStyles from './TagStyle';

export default class Input extends Component {

  static propTypes = {
    index: React.PropTypes.number,
    tag: React.PropTypes.string,
    onRemove: React.PropTypes.func,
    getTagDisplayValue: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      tag: '',
      isFocused: false
    };
  }

  render() {
    let {onChange, value, addTag, ...other} = this.props;
    return (
      <input type='text' onChange={onChange} value={value} {...other} style={tagStyles.tagInput} placeholder={this.props.placeholder} />
    );
  }
}
