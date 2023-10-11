function keys(obj) {
  let allKeys = [];

  for (const key in obj) {
    allKeys.push(key);
  }

  return allKeys;
}

module.exports = keys;
