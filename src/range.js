const cmp = require('./_cmp');

/**
 * Finds smallest and largest values.
 * @param {Iterable} x an iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Array} [min, max]
 */
function range(x, fn=null) {
  var fn = fn||cmp;
  var m, n, i = -1;
  for(var v of x) {
    if(++i===0) { m = n = v; }
    if(fn(v, m)<0) m = v;
    if(fn(v, n)>0) n = v;
  }
  return [m, n];
}
module.exports = range;
