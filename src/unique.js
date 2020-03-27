const union = require('./union');

/**
 * Removes duplicate values.
 * @param {Iterable} x an iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable}
 */
function* unique(x, fn=null) {
  yield* union([], x, fn);
}
module.exports = unique;
