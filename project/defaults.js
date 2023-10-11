function defaults(obj, defaultProps) {
  let result = {};

  for (const [key, value] of Object.entries(defaultProps)) {
    if (obj[key]) {
      if (obj[key] == undefined) {
        obj[key] = value;
      }
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

module.exports = defaults;
