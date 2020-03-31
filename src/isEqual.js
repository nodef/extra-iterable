const compare = require('./compare');

/**
 * Checks if two iterables are equal.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isEqual(x, y, fn=null) {
  return compare(x, y, fn)===0;
}
module.exports = isEqual;
