const keys = require("../project/keys");

// TestCase
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = keys(testObject);
console.log(result);

// Expected Output for this TestCase:
// [ 'name', 'age', 'location' ]
