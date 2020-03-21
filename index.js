/**
 * Checks if all values satisfy a test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i ,x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function every(x, fn=null, ths=null) {
  var i = -1;
  for(var v of x)
    if(!fn.call(ths, v, ++i, x)) return false;
  return true;
}
/**
 * Checks if any value satisfies a test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i ,x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function some(x, fn=null, ths=null) {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) return true;
  return false;
}
exports.every = every;
exports.some = some;
