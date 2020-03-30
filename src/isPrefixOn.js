const id = require('./_id');

/**
 * Checks if iterable starts with a prefix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y prefix?
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isPrefixOn(x, y, fn=null, ths=null) {
  var fn = fn||id, i = -1;
  var ix = x[Symbol.iterator]();
  for(var v of y) {
    var {value, done} = ix.next();
    if(done) return false;
    var u1 = fn.call(ths, value, ++i, x);
    var v1 = fn.call(ths, v, i, y);
    if(u1!==v1) return false;
  }
  return true;
}
module.exports = isPrefixOn;
