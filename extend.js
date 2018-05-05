const object = require('./index');

Object.prototype.map = function(callback) {
  return object.map(this, callback);
}

Object.prototype.fullmap = function(callback) {
  return object.fullmap(this, callback);
}

module.exports = object;
