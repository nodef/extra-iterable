import END from './END';

/**
 * Removes or replaces existing values.
 * @param x an iterable
 * @param i remove index (0)
 * @param n number of values to remove (rest)
 * @param vs values to insert
 */
function* splice<T>(x: Iterable<T>, i: number=0, n: number=END-i, ...vs: T[]): IterableIterator<T> {
  var j = -1;
  for(var u of x) {
    if(++j<i || j>=i+n) yield u;
    else if(j===i) yield* vs;
  }
}
export default splice;
