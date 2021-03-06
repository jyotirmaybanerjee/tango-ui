tango-ui
=========

A slick UI component library for react

[Demo](https://rawgit.com/jyotirmaybanerjee/tango-ui/master/example/index.html)

## Installation

  npm install tango-ui --save

## Usage

```javascript
import { NavBar, RaisedButton, FloatingActionButton, Tags } from 'tango-ui';
```

```html
<NavBar
  brand="Tango UI"
  links={[
      { url: "/members", label: "Members" },
      { url: "/projects", label: "Projects" },
      { url: "/users", label: "Users" },
      { url: "/login", label: "Login" }
      ]} />
```

![Alt text](/screenshots/NavBar.png?raw=true "NavBar")


```html

<RaisedButton style={{margin: "12px"}}> Default </RaisedButton>

<RaisedButton style={{margin: "12px"}} primary="true"> Primary </RaisedButton>

<RaisedButton style={{margin: "12px"}} secondary="true"> Secondary </RaisedButton>

<RaisedButton style={{margin: "12px"}} disabled="true"> Disabled </RaisedButton>
```

![Alt text](/screenshots/RaisedButton.png?raw=true "RaisedButton")

```html
<RaisedButton style={{margin: "12px"}} primary="true" fullWidth="true"> Primary + Full Width </RaisedButton>

```


![Alt text](/screenshots/RaisedButton_FullWidth.png?raw=true "RaisedButton FullWidth")


```html
<FloatingActionButton> <i className="fa fa-plus"></i> </FloatingActionButton>

<FloatingActionButton primary="true"> <i className="fa fa-plus"></i> </FloatingActionButton>

<FloatingActionButton secondary="true"> <i className="fa fa-minus"></i> </FloatingActionButton>

<FloatingActionButton disabled="true"> <i className="fa fa-plus"></i> </FloatingActionButton>

```


![Alt text](/screenshots/FloatingActionButton.png?raw=true "FloatingActionButton")


```html
<Tags value={this.state.simpleTags} onChange={::this.handleSimpleTagChange} />
```

![Alt text](/screenshots/tags.png?raw=true "Tags")


## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.0.4 Initial release
