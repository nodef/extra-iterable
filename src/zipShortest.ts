import zip from './zip';
import type {mapFn} from './_types';

/**
 * Combines values from iterables, till shortest.
 * @param xs iterables
 * @param vd default value
 * @param fn map function (vs, i, xs)
 * @param ths this argument
 */
function* zipShortest<T, U>(xs: Iterable<T>[], vd?: T, fn: mapFn<T[], U>=null, ths: object=null): IterableIterator<U> {
  yield* zip(xs, vd, fn, ths);
}
export default zipShortest;
