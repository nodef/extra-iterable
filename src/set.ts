/**
 * Sets value at index.
 * @param x an iterable
 * @param i index
 * @param v value
 */
function* set<T>(x: Iterable<T>, i: number, v: T): Iterable<T> {
  var j = -1;
  for(var u of x)
    yield (++j===i? v:u);
  if(j>=i) return;
  for(; ++j<i;) yield undefined;
  yield v;
}
export default set;
