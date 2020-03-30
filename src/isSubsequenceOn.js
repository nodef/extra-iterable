const id = require('./_id');

/**
 * Checks if iterable has a subsequence.
 * @param {Iterable} x an iterable
 * @param {Iterable} y subsequence?
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isSubsequenceOn(x, y, fn=null, ths=null) {
  var fn = fn||id, i = -1, j = -1;
  var iy = y[Symbol.iterator]();
  var {value, done} = iy.next();
  if(done) return true;
  var v1 = fn.call(ths, value, ++j, y);
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    if(u1!==v1) continue;
    var {value, done} = iy.next();
    if(done) return true;
    v1 = fn.call(ths, value, ++j, y);
  }
  return false;
}
module.exports = isSubsequenceOn;
