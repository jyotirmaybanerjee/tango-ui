import React, { Component } from 'react';

export default class Li extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render() {

    let linkStyle;
    if (this.state.hover) {
      linkStyle = this.props.hoverLinkStyle;
    } else {
      linkStyle = this.props.linkStyle;
    }

    return (
        <li style={linkStyle} key={this.props.label} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            <a href={this.props.url} style={this.props.navAStyles}>{this.props.label}</a>
        </li>
    );
  }
}
