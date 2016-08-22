'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',


  getInitialState: function getInitialState() {
    return { hover: false };
  },

  toggleHover: function toggleHover() {
    this.setState({ hover: !this.state.hover });
  },

  render: function render() {

    var linkStyle;
    if (this.state.hover) {
      linkStyle = this.props.hoverLinkStyle;
    } else {
      linkStyle = this.props.linkStyle;
    }

    return React.createElement(
      'li',
      { style: linkStyle, key: this.props.label, onMouseEnter: this.toggleHover, onMouseLeave: this.toggleHover },
      React.createElement(
        'a',
        { href: this.props.url, style: this.props.navAStyles },
        this.props.label
      )
    );
  }
});