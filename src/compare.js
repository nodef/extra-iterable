const cmp = require('./_cmp');

/**
 * Compares two iterables.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {number} x<y: -1, x=y: 0, x>y: 1
 */
function compare(x, y, fn=null) {
  var fn = fn||cmp;
  var ix = x[Symbol.iterator]();
  var iy = y[Symbol.iterator]();
  while(true) {
    var u = ix.next();
    var v = iy.next();
    if(u.done || v.done) break;
    var c = fn(u.value, v.value);
    if(c!==0) return c;
  }
  return (v.done? 1:0) - (u.done? 1:0);
}
module.exports = compare;
