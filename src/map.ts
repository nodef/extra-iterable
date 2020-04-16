import type {mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function* map<T, U>(x: Iterable<T>, fn: mapFn<T, U>, ths: object=null): IterableIterator<T> {
  var i = -1;
  for(var v of x)
    yield fn.call(ths, v, ++i, x);
}
export default map;
