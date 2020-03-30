const size = require('./size');

/**
 * Gets index range of part of array.
 * @param {Array} x an array
 * @param {number} i start index (-ve: from right) (0)
 * @param {number} I end index (-ve: from right) (end)
 * @returns {number} [start index, end index]
 */
function indexRange(x, i=0, I=Number.MAX_SAFE_INTEGER) {
  var n = size(x);
  i = i<0? Math.max(n+i, 0) : Math.min(i, n);
  I = I<0? Math.max(n+I, 0) : Math.min(I, n);
  I = Math.max(i, I);
  return [i, I];
}
module.exports = indexRange;
