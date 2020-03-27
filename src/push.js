/**
 * Adds values to the end. 
 * @param {Iterable} x an iterable
 * @param {...any} vs values to add
 * @returns {Iterable} iterable
 */
function* push(x, ...vs) {
  yield* x;
  yield* vs;
}
module.exports = push;
