const cmp = require('./_cmp');

/**
 * Checks if iterable has a subsequence.
 * @param {Iterable} x an iterable
 * @param {Iterable} y subsequence?
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isSubsequence(x, y, fn=null) {
  var fn = fn||cmp;
  var iy = y[Symbol.iterator]();
  var {value, done} = iy.next();
  if(done) return true;
  for(var u of x) {
    if(fn(u, value)!==0) continue;
    var {value, done} = iy.next();
    if(done) return true;
  }
  return false;
}
module.exports = isSubsequence;
