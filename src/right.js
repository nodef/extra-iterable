const slice = require('./slice');

/**
 * Gets values from the right.
 * @param {Iterable} x an iterable
 * @param {number?} n number of values (1)
 * @returns {Iterable}
 */
function* right(x, n=1) {
  if(n===0) return;
  yield* slice(x, -n);
}
module.exports = right;
