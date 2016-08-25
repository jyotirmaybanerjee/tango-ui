var React = require('react');
var navStyles = require('./navStyles');
var Li = require('./Li');

module.exports = React.createClass({

  render: function() {

    var links = this.props.links.map(function(link){
      return (
        <Li
          linkStyle={navStyles.li}
          hoverLinkStyle={navStyles.liHovered}
          label={link.label}
          url={link.url}
          navAStyles={navStyles.a}
          key={link.label} />
      );
    });
    return (
      <nav style={navStyles}>
        <section style={navStyles.menuHeader}>
          <div style={navStyles.menuHeader.brand}>
            {this.props.brand || ''}
          </div>
        </section>
        <ul style={navStyles.ul}>
          {links}
        </ul>
      </nav>
    );
  }
});
