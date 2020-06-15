import type {mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x an iterable
 * @param fn map function (v, i, x)
 */
function* map<T, U>(x: Iterable<T>, fn: mapFn<T, U>): IterableIterator<U> {
  var i = -1;
  for(var v of x)
    yield fn(v, ++i, x);
}
export default map;
