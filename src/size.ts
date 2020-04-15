/**
 * Counts the number of values.
 * @param x an iterable
 * @param i start index (0)
 * @param I end index (end)
 */
function size<T>(x: Iterable<T>, i: number=0, I: number=Number.MAX_SAFE_INTEGER): number {
  var j = -1, n = 0;
  for(var _ of x)
    if(++j>=i && j<I) n++;
  return n;
}
export default size;
