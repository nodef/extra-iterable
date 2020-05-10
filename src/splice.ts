/**
 * Removes or replaces existing values.
 * @param x an iterable
 * @param i remove index (0)
 * @param n number of values to remove (rest)
 * @param vs values to insert
 * @returns [removed, iterable]
 */
function* splice<T>(x: Iterable<T>, i: number=0, n: number=Number.MAX_SAFE_INTEGER-i, ...vs: T[]): IterableIterator<T> {
  var j = -1;
  for(var u of x) {
    ++j;
    if(j<i || j>=i+n) yield u;
    else if(j===i) yield* vs;
  }
}
module.exports = splice;
