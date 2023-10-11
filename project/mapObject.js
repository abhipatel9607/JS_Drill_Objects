function mapObject(obj, callBack) {
  let result = {};

  for (const key in obj) {
    result[key] = callBack(obj[key]);
  }

  return result;
}

// Define a callback function - add "_transformed" in every value
function callBack(value) {
  return value + "_transformed";
}

module.exports = { mapObject, callBack };
