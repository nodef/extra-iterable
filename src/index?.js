const size = require('./size');

/**
 * Gets zero-based index.
 * @param {Iterable} x an iterable
 * @param {number} i index (-ve: from right)
 * @returns {number}
 */
function index(x, i) {
  var n = size(x);
  return i<0? Math.max(n+i, 0) : Math.min(i, n);
}
module.exports = index;
