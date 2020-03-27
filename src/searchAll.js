const cmp = require('./_cmp');

/**
 * Searches a value throughout.
 * @param {Iterable} x an iterable
 * @param {*} v search value
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable<number>} indices of value
 */
function* searchAll(x, v, fn=null) {
  var fn = fn||cmp, i = -1;
  for(var u of x) {
    ++i;
    if(fn(u, v)===0) yield i;
  }
}
module.exports = searchAll;
