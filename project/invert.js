function invert(obj) {
  let invertedObj = {};

  for (const key in obj) {
    invertedObj[obj[key]] = key;
  }

  return invertedObj;
}

module.exports = invert;
