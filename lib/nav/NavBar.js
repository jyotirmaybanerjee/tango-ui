'use strict';

var React = require('react');
var navStyles = require('./navStyles');
var Li = require('./Li');

module.exports = React.createClass({
    displayName: 'exports',


    render: function render() {

        var links = this.props.links.map(function (link) {

            return React.createElement(Li, {
                linkStyle: navStyles.li,
                hoverLinkStyle: navStyles.liHovered,
                label: link.label,
                url: link.url,
                navAStyles: navStyles.a,
                key: link.label });
        });
        return React.createElement(
            'nav',
            { style: navStyles },
            React.createElement(
                'section',
                { style: navStyles.menuHeader },
                React.createElement(
                    'div',
                    { style: navStyles.menuHeader.brand },
                    this.props.brand || ''
                )
            ),
            React.createElement(
                'ul',
                { style: navStyles.ul },
                links
            )
        );
    }
});