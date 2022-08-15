import END from "./END";


/**
 * Counts the number of values.
 * @param x an iterable
 * @param i start index (0)
 * @param I end index (X)
 */
function size<T>(x: Iterable<T>, i: number=0, I: number=END): number {
  var j = -1, n = 0;
  for (var _ of x)
    if (++j>=i && j<I) n++;
  return n;
}
export default size;
