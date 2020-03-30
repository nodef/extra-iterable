const size = require('./size');

/**
 * Counts the number of values.
 * @param {Iterable} x an iterable
 * @param {number} i start index (-ve: from right) (0)
 * @param {number} I end index (-ve: from right) (end)
 * @returns {number}
 */
function length(x, i=0, I=Number.MAX_SAFE_INTEGER) {
  return size(x, i, I);
}
module.exports = length;
