const cmp = require('./_cmp');
const from = require('./from');

/**
 * Gives values present in any iterable.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable}
 */
function* union(x, y, fn=null) {
  var fn = fn||cmp;
  var x = from(x), s = new Set();
  yield* x;
  y: for(var v of y) {
    for(var u of x)
      if(fn(u, v)===0) continue y;
    for(var u of s)
      if(fn(u, v)===0) continue y;
    yield v; s.add(v);
  }
}
module.exports = union;
