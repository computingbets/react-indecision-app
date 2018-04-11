console.log("app.js is test");

const app = {
  title: "Wrecking Ball",
  subtitle: "of Igloos",
  options: ['one', 'two', 'three']
};
const template = (
<div>
  <h2>{app.title}</h2>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length > 2 ? "Here is otpins": "LOlOMFgNoOptions"}</p>
  <ol>
  <li>{}</li>
</ol>
</div>
);

var getLocation = function(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
};

var user = {
  name: 'John',
  age: 31,
  location: 'Boston',
};

const templateTwo = (
  <div>
    {user.name ? <h1>John</h1> : 'hobo'}
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
