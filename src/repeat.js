const isIterator = require('./isIterator');

/**
 * Repeats an iterable given times.
 * @param {Iterable} x an iterable
 * @param {number} n times (-1 => Inf)
 * @returns {Iterable}
 */
function* repeat(x, n) {
  x = isIterator(x)? Array.from(x):x;
  for(; n!==0; n--)
    yield* x;
}
module.exports = repeat;
