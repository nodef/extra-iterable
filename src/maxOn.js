const id = require('./_id');

/**
 * Finds largest value.
 * @param {Iterable} x an iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {*}
 */
function maxOn(x, fn=null, ths=null) {
  var fn = fn||id;
  var mk, mv, i = -1;
  for(var v of x) {
    var k = fn.call(ths, v, ++i, x);
    if(i===0) { mk = k; mv = v; }
    if(k>mk) { mk = k; mv = v; }
  }
  return mv;
}
module.exports = maxOn;
