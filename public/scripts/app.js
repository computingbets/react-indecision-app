"use strict";

console.log("app.js is test");

var app = {
  title: "Wrecking Ball",
  subtitle: "of Igloos",
  options: ['one', 'two', 'three']
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 2 ? "Here is otpins" : "LOlOMFgNoOptions"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement("li", null)
  )
);

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
};

var user = {
  name: 'John',
  age: 31,
  location: 'Boston'
};

var templateTwo = React.createElement(
  "div",
  null,
  user.name ? React.createElement(
    "h1",
    null,
    "John"
  ) : 'hobo',
  user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
