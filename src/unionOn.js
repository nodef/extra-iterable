const uniques = require('./_uniques');
const id = require('./_id');

/**
 * Gives values present in any iterable.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* unionOn(x, y, fn=null, ths=null) {
  var fn = fn||id;
  var s = new Set(), i = -1, j = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    s.add(v1); yield v;
  }
  for(var v of y) {
    var v1 = fn.call(ths, v, ++j, y);
    if(!s.has(v1)) { s.add(v1); yield v; }
  }
}
module.exports = unionOn;
