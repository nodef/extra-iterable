/**
 * Calls a function for each value.
 * @param {Iterable} x an iterable
 * @param {function} fn called function (v, i, x)
 * @param {object?} ths this argument
 */
function forEach(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    fn.call(ths, v, ++i, x);
}
module.exports = forEach;
