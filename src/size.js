/**
 * Counts the number of values.
 * @param {Iterable} x an iterable
 * @returns {number}
 */
function size(x) {
  var i = -1;
  for(var v of x)
    ++i;
  return i+1;
}
module.exports = size;
