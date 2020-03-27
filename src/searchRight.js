const cmp = require('./_cmp');

/**
 * Searches a value from right.
 * @param {Iterable} x an iterable
 * @param {*} v search value
 * @param {function?} fn compare function (a, b)
 * @returns {number} index of value, -1 if not found
 */
function searchRight(x, v, fn=null) {
  var fn = fn||cmp, i = -1, j = -1;
  for(var u of x) {
    ++i;
    if(fn(u, v)===0) j = i;
  }
  return j;
}
module.exports = searchRight;
