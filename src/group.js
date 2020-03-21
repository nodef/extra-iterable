const cmp = require('./_cmp');

/**
 * Keeps similar values together and in order.
 * @param {Iterable} x an iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable<Array>}
 */
function* group(x, fn=null) {
  var fn = fn||cmp;
  var u = x[0], a = [];
  for(var v of x) {
    if(fn(u, v)===0) a.push(v);
    else { yield a; a = [v]; }
    u = v;
  }
  yield a;
}
module.exports = group;
