/**
 * Gets part of an iterable.
 * @param {Iterable} x an iterable
 * @param {number?} i begin index (0)
 * @param {number?} I end index (end)
 */
function* slice(x, i=0, I=Number.MAX_SAFE_INTEGER) {
  var k = -1;
  for(var v of x) {
    if(++k>=I) break;
    if(k>=i) yield v;
  }
}
module.exports = slice;
