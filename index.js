function ObjectMap(object, callback) {
  const keys = Object.keys(object);
  return keys.reduce((base, key) => {
    base[key] = callback(key, object[key]);
    return base;
  }, {});
}

function ObjectFullMap(object, callback) {
  const keys = Object.keys(object);
  return keys.reduce((base, key) => {
    const tuple = callback(key, object[key]);
    base[tuple[0]] = tuple[1];
    return base;
  }, {});
}

module.exports = {
  map: ObjectMap,
  fullmap: ObjectFullMap,
};
