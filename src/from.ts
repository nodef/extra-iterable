/**
 * Converts an iterator to iterable.
 * @param x an iterable
 */
function from<T>(x: IterableIterator<T>): Iterable<T> {
  return x===x[Symbol.iterator]()? Array.from(x):x;
}
export default from;
