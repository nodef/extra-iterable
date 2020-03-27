var cmp = require('./_cmp');

/**
 * Searches a value from left.
 * @param {Iterable} x an iterable
 * @param {*} v search value
 * @param {function?} fn compare function (a, b)
 * @returns {number} index of value, -1 if not found
 */
function search(x, v, fn=null) {
  var fn = fn||cmp, i = -1;
  for(var u of x) {
    ++i;
    if(fn(u, v)===0) return i;
  }
  return -1;
}
module.exports = search;
