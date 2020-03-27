const id = require('./_id');

/**
 * Finds smallest and largest values.
 * @param {Iterable} x an array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Array} [min, max]
 */
function rangeOn(x, fn=null, ths=null) {
  var fn = fn||id, i = -1;
  var mk, mv, nk, nv;
  for(var v of x) {
    var k = fn.call(ths, v, ++i, x);
    if(i===0) { mk = nk = k; mv = nv = v; }
    if(k<mk) { mk = k; mv = v; }
    if(k>nk) { nk = k; nv = v; }
  }
  return [mv, nv];
}
module.exports = rangeOn;
