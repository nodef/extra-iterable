const from = require('./from');

/**
 * Repeats an iterable given times.
 * @param {Iterable} x an iterable
 * @param {number} n times (-1 => Inf)
 * @returns {Iterable}
 */
function* repeat(x, n) {
  var x = from(x);
  for(; n!==0; n--)
    yield* x;
}
module.exports = repeat;
