/**
 * Gets value at indices.
 * @param x an iterable
 * @param is indices (sorted)
 * @returns ...values
 */
function* getAll<T>(x: Iterable<T>, is: Iterable<number>): Iterable<T> {
  var ii = is[Symbol.iterator]();
  var {value, done} = ii.next(), j = -1;
  if(done) return;
  for(var v of x) {
    if(++j!==value) continue;
    yield v;
    var {value, done} = ii.next();
    value = value || Number.MAX_SAFE_INTEGER;
  }
  if(!done) yield undefined;
  for(var i of ii) yield undefined;
}
export default getAll;
