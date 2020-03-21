const args = require('./_args');

/**
 * Combines values from n iterables.
 * @param {Array<Iterable>} xs iterables
 * @param {function?} fn combine function (a, b, c, ...)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function zip(xs, fn=null, ths=null) {
  var fn = fn||args;
  var is = xs.map(x => x[Symbol.iterator]());
  while(true) {
    var rs = is.map(i => i.next());
    if(rs.every(r => r.done)) break;
    var vs = rs.map(r => r.value);
    yield fn.apply(ths, vs);
  }
}
module.exports = zip;
