/**
 * Converts an iterator to iterable.
 * @param {Iterable} v an iterable
 * @returns {Iterable}
 */
function from(v) {
  return v===v[Symbol.iterator]()? Array.from(v):v;
}
module.exports = from;
