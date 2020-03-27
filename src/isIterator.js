const is = require('./is');

/**
 * Checks if value is an iterator (can iterate only once).
 * @param {*} v a value
 * @returns {boolean}
 */
function isIterator(v) {
  return is(v) && v===v[Symbol.iterator]();
}
module.exports = isIterator;
