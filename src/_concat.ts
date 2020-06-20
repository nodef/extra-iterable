/**
 * Appends iterables together.
 * @param xs iterables
 */
function* concat<T>(...xs: Iterable<T>[]): IterableIterator<T> {
  for(var x of xs)
    yield* x;
}
export default concat;
