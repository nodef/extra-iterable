/**
 * Counts the number of values.
 * @param {Iterable} x an iterable
 * @param {number} i start index (0)
 * @param {number} I end index (end)
 * @returns {number}
 */
function size(x, i=0, I=Number.MAX_SAFE_INTEGER) {
  var j = -1, n = 0;
  for(var v of x)
    if(++j>=i && j<I) n++;
  return n;
}
module.exports = size;
