/**
 * Joins values together.
 * @param {Iterable} x an iterable
 * @param {string?} sep separator (,)
 * @returns {string}
 */
function join(x, sep=',') {
  var a = '';
  for(var v of x)
    a += v+sep;
  return a.substring(0, a.length-sep.length);
}
module.exports = join;
