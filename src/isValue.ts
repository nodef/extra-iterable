import search from './search';
import type {compareFn} from './_types';

/**
 * Checks if iterable has a value.
 * @param x an iterable
 * @param v value?
 */
function isValue<T>(x: Iterable<T>, v: T, fn: compareFn<T>=null): boolean {
  return search(x, v, fn)!==undefined;
}
export default isValue;
