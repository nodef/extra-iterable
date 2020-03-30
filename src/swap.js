/**
 * Exchanges two values.
 * @param {Iterable} x an iterable
 * @param {number} i an index
 * @param {number} j another index
 * @returns {Iterable}
 */
function* swap(x, i, j) {
  if(i===j) yield* x;
  var k = Math.min(i, j);
  var l = Math.max(i, j);
  var vk, m = [], i = -1;
  for(var v of x) {
    if(++i<k || i>l) yield v;
    else if(i===k) vk = v;
    else if(i<l) m.push(v)
    else { yield v; yield* m; yield vk; }
  }
}
module.exports = swap;
