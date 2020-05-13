import zip from './zip';
import type {mapFn} from './_types';

function tillLongest<T>(os: IteratorResult<T>[]): boolean {
  for(var o of os)
    if(!o.done) return false;
  return true;
}

/**
 * Combines values from iterables, till longest.
 * @param xs iterables
 * @param vd default value
 * @param fn map function (vs, i, xs)
 * @param ths this argument
 */
function* zipLongest<T, U>(xs: Iterable<T>[], vd?: T, fn: mapFn<T[], U>=null, ths: object=null): IterableIterator<U> {
  yield* zip(xs, vd, fn, ths, tillLongest);
}
export default zipLongest;
