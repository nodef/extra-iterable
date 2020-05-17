import cartesianProduct from './cartesianProduct';
import type {mapFn} from './_types';

/**
 * Lists cartesian product of iterables.
 * @param xs iterables
 * @param fn map function (vs, i, xs)
 * @param ths this argument
 */
function* product<T, U>(xs: Iterable<T>[], fn: mapFn<T[], U>=null, ths: object=null): IterableIterator<U> {
  yield* cartesianProduct(xs, fn, ths);
}
export default product;
