/**
 * Breaks iterable considering test as separator.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable<Array>}
 */
function* split(x, fn, ths=null) {
  var a = [], i = -1;
  for(var v of x) {
    if(!fn.call(ths, v, ++i, x)) a.push(v);
    else if(a.length) { yield a; a = []; }
  }
  if(a.length) yield a;
}
module.exports = split;
