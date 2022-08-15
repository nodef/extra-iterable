import END from "./END";


/**
 * Breaks iterable at given indices.
 * @param x an iterable
 * @param is split indices (sorted)
 */
function* cutAt<T>(x: Iterable<T>, is: Iterable<number>): IterableIterator<T[]> {
  var ii = is[Symbol.iterator]();
  var {value, done} = ii.next();
  if (done) value = END;
  var a = [], j = -1;
  for (var v of x) {
    if (++j<value) { a.push(v); continue; }
    yield a; a = [v];
    var {value, done} = ii.next();
    if (done) value = END;
  }
  yield a;
  for (; !done; {done}=ii.next()) yield [];
}
export default cutAt;
