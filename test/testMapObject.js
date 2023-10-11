const { mapObject, callBack } = require("../project/mapObject");

// TestCase
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = mapObject(testObject, callBack);
console.log(result);

// Expected Output for this TestCase:
// {
//     name: 'Bruce Wayne_transformed',
//     age: '36_transformed',
//     location: 'Gotham_transformed'
//   }
