import flat from './flat';
import isList from './isList';
import id from './_id';
import type {mapFn} from './_types';

/**
 * Flattens nested iterable, based on map function.
 * @param x a nested iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function* flatMap(x: Iterable<any>, fn: mapFn<any, any>=null, ths: object=null): IterableIterator<any> {
  var fn = fn||id, i = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    if(isList(v1)) yield* flat(v1, 1);
    else yield v1;
  }
}
export default flatMap;
