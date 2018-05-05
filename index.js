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

function ObjectReduce(object, callback, init) {
  const keys = Object.keys(object);
  return keys.reduce((base, key) => {
    return callback(base, key, object[key]);
  }, init);
}

module.exports = {
  map: ObjectMap,
  fullmap: ObjectFullMap,
  reduce: ObjectReduce,
};
