const cmp = require('./_cmp');
const from = require('./from');

/**
 * Checks if iterables have no value in common.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isDisjoint(x, y, fn=null) {
  var fn = fn||cmp;
  var x = from(x);
  for(var v of y) {
    for(var u of x)
      if(fn(u, v)===0) return false;
  }
  return true;
}
module.exports = isDisjoint;
