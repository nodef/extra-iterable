/**
 * Finds index of leftmost value passing the test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {number} index of value, -1 if not found
 */
function findIndex(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) return i;
}
module.exports = findIndex;
