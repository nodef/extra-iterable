const uniques = require('./_uniques');
const id = require('./_id');

/**
 * Gives values of an iterable not present in another.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* differenceOn(x, y, fn=null, ths=null) {
  var fn = fn||id, i = -1;
  var s = uniques(y, fn, ths);
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    if(!s.has(u1)) yield u;
  }
}
module.exports = differenceOn;
