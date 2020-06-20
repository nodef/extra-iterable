import id from './_id';
import isList from './isList';
import type {mapFn} from './_types';

/**
 * Flattens nested iterable, based on map function.
 * @param x a nested iterable
 * @param fn map function (v, i, x)
 */
function* flatMap(x: Iterable<any>, fn: mapFn<any, any>=null): IterableIterator<any> {
  var fn = fn||id, i = -1;
  for(var v of x) {
    var v1 = fn(v, ++i, x);
    if(isList(v1)) yield* v1;
    else yield v1;
  }
}
export default flatMap;
