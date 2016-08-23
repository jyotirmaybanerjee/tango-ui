import React, { Component } from 'react';
import Input from './Input';
import Tag from './Tag';

export default class Layout extends Component {

  render() {

    let tagComponents = this.props.tagComponents.map((tagProps, index) => {
      return <Tag {...tagProps} key={index} index={index} />
    });

    return (
      <span>
        {tagComponents}
        <Input {...this.props.inputComponent} />
      </span>
    )
  }
}
