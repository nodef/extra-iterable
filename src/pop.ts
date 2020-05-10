import last from './last';
import init from './init';
import many from './many';

/**
 * Removes last value.
 * @param x an iterable
 * @returns [value, iterable]
 */
function pop<T>(x: Iterable<T>): [T, IterableIterator<T>] {
  var x = many(x);
  return [last(x), init(x)];
}
export default pop;
