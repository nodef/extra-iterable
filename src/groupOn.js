const id = require('./_id');

/**
 * Keeps similar values together and in order.
 * @param {Iterable} x an iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable<Array>}
 */
function* groupOn(x, fn=null, ths=null) {
  var fn = fn||id;
  var a = [], i = -1;
  var u1 = fn.call(ths, x[0], 0, x);
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    if(u1===v1) a.push(v);
    else { yield a; a = [v]; }
    u1 = v1;
  }
  yield a;
}
module.exports = groupOn;
