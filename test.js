const map = require('./index.js').map;
const fullmap = require('./index.js').fullmap;
require('./extend');

exports.map = function (test) {
  const base = { k1: 'v1' };
  const res = { k1: 'v1ok' };

  const output1 = map(base, (k, v) => v + 'ok');
  test.deepEqual(output1, res);

  const output2 = base.map((k, v) => v + 'ok');
  test.deepEqual(output2, res);

  test.done();
};

exports.fullmap = function (test) {
  const base = { k1: 'v1' };
  const res = { k1ok: 'v1ok' };

  const output1 = fullmap(base, (k, v) => [k + 'ok', v + 'ok']);
  test.deepEqual(output1, res);

  const output2 = base.fullmap((k, v) => [k + 'ok', v + 'ok']);
  test.deepEqual(output2, res);

  test.done();
};
