const map = require('./index.js').map;
const fullmap = require('./index.js').fullmap;

exports.map = function (test) {
  const base = { k1: 'v1' };
  const res = { k1: 'v1ok' };
  const output = map(base, (k, v) => v + 'ok');
  test.deepEqual(output, res);
  test.done();
};

exports.fullmap = function (test) {
  const base = { k1: 'v1' };
  const res = { k1ok: 'v1ok' };
  const output = fullmap(base, (k, v) => [k + 'ok', v + 'ok']);
  test.deepEqual(output, res);
  test.done();
};
