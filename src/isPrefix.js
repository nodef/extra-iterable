const cmp = require('./_cmp');

/**
 * Checks if iterable starts with a prefix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y prefix?
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isPrefix(x, y, fn=null) {
  var fn = fn||cmp;
  var ix = x[Symbol.iterator]();
  for(var v of y) {
    var {value, done} = ix.next();
    if(done || fn(value, v)!==0) return false;
  }
  return true;
}
module.exports = isPrefix;
