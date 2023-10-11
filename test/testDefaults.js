const defaults = require("../project/defaults");

const testObject = { name: "Bruce Wayne", age: undefined, location: "Gotham" };
const defaultProps = { age: 50, address: "21/A" };

let result = defaults(testObject, defaultProps);
console.log(result);
