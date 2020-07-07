/**
 * Gives a function that iterates over values.
 * @param x an iterable
 */
function callable<T>(x: Iterable<T>): () => T {
  var xi = x[Symbol.iterator]();
  return () => xi.next().value;
}
export default callable;
