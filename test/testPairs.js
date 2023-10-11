const pairs = require("../project/pairs");

// TestCase
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = pairs(testObject);
console.log(result);

// Expected Output for this TestCase:
// [ [ 'name', 'Bruce Wayne' ], [ 'age', 36 ], [ 'location', 'Gotham' ] ]
