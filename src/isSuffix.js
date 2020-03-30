const cmp = require('./_cmp');
const slice = require('./slice');

/**
 * Checks if iterable ends with a suffix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y suffix?
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isSuffix(x, y, fn=null) {
  var fn = fn||cmp;
  var y = Array.isArray(y)? y:Array.from(y);
  var Y = y.length, a = [], ai = 0;
  if(Y===0) return true;
  for(var u of x)
    a[ai++ % Y] = u;
  if(a.length<Y) return false;
  for(var i=0; i<Y; i++)
    if(fn(a[ai++ % Y], y[i])!==0) return false;
  return true;
}
module.exports = isSuffix;
