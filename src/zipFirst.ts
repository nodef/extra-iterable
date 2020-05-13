import zip from './zip';
import type {mapFn} from './_types';

function tillFirst<T>(os: IteratorResult<T>[]): boolean {
  return os[0].done;
}

/**
 * Combines values from iterables, till first.
 * @param xs iterables
 * @param vd default value
 * @param fn map function (vs, i, xs)
 * @param ths this argument
 */
function* zipFirst<T, U>(xs: Iterable<T>[], vd?: T, fn: mapFn<T[], U>=null, ths: object=null): IterableIterator<U> {
  yield* zip(xs, vd, fn, ths, tillFirst);
}
export default zipFirst;
