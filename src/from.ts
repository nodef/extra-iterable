/**
 * Converts a one-time iterable to iterable.
 * @param x an iterable
 */
function from<T>(x: Iterable<T>): Iterable<T> {
  return x===x[Symbol.iterator]() as IterableIterator<T>? Array.from(x):x;
}
export default from;
