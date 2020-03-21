/**
 * Checks if value is an iterable.
 * @param {*} v a value
 * @returns {boolean}
 */
function is(v) {
  return v!=null && typeof v[Symbol.iterator]==='function';
}
module.exports = is;
