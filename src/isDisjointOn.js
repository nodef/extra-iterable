const uniques = require('./_uniques');
const id = require('./_id');

/**
 * Checks if iterables have no value in common.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isDisjointOn(x, y, fn=null, ths=null) {
  var s = uniques(x, fn, ths);
  var fn = fn||id, i = -1;
  for(var v of y) {
    var v1 = fn.call(ths, v, ++i, y);
    if(s.has(v1)) return false;
  }
  return true;
}
module.exports = isDisjointOn;
