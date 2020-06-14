/**
 * Keeps the values at given indices.
 * @param x an iterable
 * @param is indices
 */
function* filterAt<T>(x: Iterable<T>, is: number[]): IterableIterator<T> {
  var i = -1;
  for(var v of x)
    if(is.includes(++i)) yield v;
}
export default filterAt;
