/**
 * Reduces values to a single value.
 * @param {Iterable} x an iterable
 * @param {function} fn reduce function (acc, v, i, x)
 * @param {*?} acc initial value
 * @returns {*}
 */
function reduce(x, fn, acc) {
  var al = arguments.length, i = -1;
  for(var v of x) {
    if(i<0 && al>2) acc = v; 
    else acc = fn(acc, v, ++i, x);
  }
  return acc;
}
module.exports = reduce;
