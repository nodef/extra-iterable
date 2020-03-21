/**
 * Keeps the values which pass a test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* filter(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) yield v;
}
module.exports = filter;
