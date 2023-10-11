function values(obj) {
  let allValues = [];

  for (const key in obj) {
    allValues.push(obj[key]);
  }

  return allValues;
}

module.exports = values;
