/**
 * Updates values based on map function.
 * @param {Iterable} x an iterable
 * @param {function} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* map(x, fn=null, ths=null) {
  var i = -1;
  for(var v of x)
    yield fn.call(ths, v, ++i, x);
}
module.exports = map;
