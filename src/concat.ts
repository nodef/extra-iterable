/**
 * Appends iterables to the end.
 * @param xs iterables
 */
function* concat<T>(...xs: Iterable<T>[]): IterableIterator<T> {
  for(var x of xs)
    yield* x;
}
export default concat;
