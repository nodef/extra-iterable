const id = require('./_id');

/**
 * Checks if iterable ends with a suffix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y suffix?
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isSuffixOn(x, y, fn=null, ths=null) {
  var fn = fn||id, n = 0;
  var y = Array.isArray(y)? y:Array.from(y);
  var Y = y.length, a = [], ai = 0;
  if(Y===0) return true;
  for(var u of x) {
    a[ai++ % Y] = u;
    n++;
  }
  if(a.length<Y) return false;
  for(var i=0, j=n-Y; i<Y; i++, j++) {
    var u1 = fn.call(ths, a[ai++ % Y], j, x);
    var v1 = fn.call(ths, y[i], i, y);
    if(u1!==v1) return false;
  }
  return true;
}
module.exports = isSuffixOn;
