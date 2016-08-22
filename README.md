tango-ui
=========

A slick UI component library for react

## Installation

  npm install tango-ui --save

## Usage

import { NavBar } from 'tango-ui';

let linksObj = ;

<NavBar
  brand="Tango UI"
  links={[
      { url: "/members", label: "Members" },
      { url: "/projects", label: "Projects" },
      { url: "/users", label: "Users" },
      { url: "/login", label: "Login" }
      ]} />

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.2 Initial release
