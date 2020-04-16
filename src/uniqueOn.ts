import unionOn from './unionOn';
import type {mapFn} from './_types';

/**
 * Removes duplicate values.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function* uniqueOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): IterableIterator<T> {
  yield* unionOn([], x, fn, ths);
}
export default uniqueOn;
