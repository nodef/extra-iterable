/**
 * Converts iterator to iterable.
 * @param x an iterator
 */
function from<T>(x: Iterator<T>): Iterable<T> {
  if(typeof x[Symbol.iterator]==='function') return x as any as Iterable<T>;
  return {[Symbol.iterator]() { return x; }};
}
export default from;
