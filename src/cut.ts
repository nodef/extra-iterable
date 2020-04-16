/**
 * Breaks iterable at given indices.
 * @param x an iterable
 * @param is split indices (sorted)
 * @returns ...pieces
 */
function* cut<T>(x: Iterable<T>, is: Iterable<number>): IterableIterator<T[]> {
  var ii = is[Symbol.iterator]();
  var {value, done} = ii.next();
  if(done) { yield Array.from(x); return; }
  var a = [], j = -1;
  for(var v of x) {
    if(++j<value) { a.push(v); continue; }
    yield a; a = [v];
    var {value, done} = ii.next();
    value = value || Number.MAX_SAFE_INTEGER;
  }
  yield a;
  if(!done) yield [];
  while(!ii.next().done) yield [];
}
export default cut;
