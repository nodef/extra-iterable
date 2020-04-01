/**
 * Adds values to the start.
 * @param {Iterable} x an iterable
 * @param {...any} vs values to add
 * @returns {Iterable} iterable
 */
function* unshift(x, ...vs) {
  yield* vs;
  yield* x;
}
module.exports = unshift;
