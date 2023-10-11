const invert = require("../project/invert");

// TestCase
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = invert(testObject);
console.log(result);

// Expected Output for this TestCase:
// { '36': 'age', 'Bruce Wayne': 'name', Gotham: 'location' }
