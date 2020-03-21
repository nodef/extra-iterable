/**
 * Finds first value which satisfies a test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {*}
 */
function find(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) return v;
}
module.exports = find;
