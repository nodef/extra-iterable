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
    if(u.done && v.done) return 0;
    var c = fn(u, v);
    if(c!==0) return c;
  }
}
module.exports = compare;
