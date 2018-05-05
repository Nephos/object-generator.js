const object = require('./index');

Object.prototype.map = function(callback) {
  return object.map(this, callback);
}

Object.prototype.fullmap = function(callback) {
  return object.fullmap(this, callback);
}

Object.prototype.reduce = function(callback, init) {
  return object.reduce(this, callback, init);
}

module.exports = object;
