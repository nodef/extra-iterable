/**
 * Breaks iterable into chunks of given size.
 * @param {Iterable} x an iterable
 * @param {number?} n chunk size (1)
 * @returns {Iterable<Array>}
 */
function* chunk(x, n=1) {
  var a = [], m = 0;
  for(var v of x) {
    a.push(v);
    if(++m<n) continue;
    yield a;
    a = []; m = 0;
  }
}
module.exports = chunk;
