const cmp = require('./_cmp');

/**
 * Finds largest value.
 * @param {Iterable} x an iterable
 * @param {function?} fn compare function (a, b)
 * @returns {*}
 */
function max(x, fn=null) {
  var fn = fn||cmp;
  var m, i = -1;
  for(var v of x) {
    if(++i===0) m = v;
    if(fn(v, m)>0) m = v;
  }
  return m;
}
module.exports = max;
