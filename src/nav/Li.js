var React = require('react');

module.exports = React.createClass({

  getInitialState: function(){
    return {hover: false}
  },

  toggleHover: function(){
    this.setState({hover: !this.state.hover})
  },

  render: function() {

    var linkStyle;
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
});
