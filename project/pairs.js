function pairs(obj) {
  let allKeyValuePairs = [];

  for (const key in obj) {
    allKeyValuePairs.push([key, obj[key]]);
  }

  return allKeyValuePairs;
}

module.exports = pairs;
