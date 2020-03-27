const unionOn = require('./unionOn');

/**
 * Removes duplicate values.
 * @param {Iterable} x an iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* uniqueOn(x, fn=null, ths=null) {
  yield* unionOn([], x, fn, ths);
}
module.exports = uniqueOn;
