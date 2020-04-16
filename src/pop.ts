import last from './last';
import init from './init';
import from from './from';

/**
 * Removes last value.
 * @param x an iterable
 * @returns [value, iterable]
 */
function pop<T>(x: Iterable<T>): [T, IterableIterator<T>] {
  var x = from(x);
  return [last(x), init(x)];
}
export default pop;
