/**
 * Breaks iterable after given indices.
 * @param {Iterable} x an iterable
 * @param {Iterable<number>} is split indices (sorted)
 * @returns {Iterable<Array>} ...pieces
 */
function cutRight(x, is) {
  var ii = is[Symbol.iterator]();
  var io = ii.next();
  if(io.done) { yield* x; return; }
  var j = -1, a = [];
  for(var v of x) {
    if(++j<=io.value) { a.push(v); continue; }
    yield a; a = [];
    io = ii.next();
    io.value = io.value || Number.MAX_SAFE_INTEGER;
  }
  yield a;
}
module.exports = cutRight;
