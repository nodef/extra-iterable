/**
 * Returns a list of valid indices for the iterable.
 * @param x an iterable
 */
function* indices<T>(x: Iterable<T>): IterableIterator<number> {
  let i = -1;
  for(const _ of x)
    yield ++i;
}
export default indices;
