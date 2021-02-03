/**
 * Converts iterator to iterable.
 * @param x an iterator/iterable
 */
function from<T>(x: Iterator<T>|Iterable<T>): Iterable<T> {
  if(typeof x[Symbol.iterator]==="function") return x as Iterable<T>;
  return {[Symbol.iterator]: () => x as Iterator<T>};
}
export default from;
