/**
 * Exchanges two values.
 * @param {Iterable} x an iterable
 * @param {number} i an index
 * @param {number} j another index
 * @returns {Iterable}
 */
function* swap(x, i, j) {
  var k = Math.max(i, j);
  var l = Math.min(i, j);
  var vk, m = [], i = -1;
  for(var v of x) {
    if(++i<k || i>l) yield v;
    else if(i===k) vk = v;
    else if(i<j) m.push(v)
    else { yield v; yield* m; yield kv; }
  }
}
module.exports = swap;
