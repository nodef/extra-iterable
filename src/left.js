const slice = require('./slice');

/**
 * Gets values from the left.
 * @param {Iterable} x an iterable
 * @param {number?} n number of values (1)
 * @returns {Iterable}
 */
function* left(x, n=1) {
  yield* slice(x, 0, n);
}
module.exports = left;
