const values = require("../project/values");

// TestCase
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = values(testObject);
console.log(result);

// Expected Output for this TestCase:
// [ 'Bruce Wayne', 36, 'Gotham' ]
