const slice = require('./slice');

/**
 * Gets values from middle.
 * @param {Iterable} x an iterable
 * @param {number?} i start index (0)
 * @param {number?} n number of values (1)
 * @returns {Iterable}
 */
function* middle(x, i=0, n=1) {
  yield* slice(x, i, i+n);
}
module.exports = middle;
