import id from './_id';
import type {mapFn} from './_types';

/**
 * Segregates values by similarity.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 * @returns Map {key => values}
 */
function partitionOn<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null, ths=null): Map<T|U, T[]> {
  var fn = fn||id;
  var m = new Map(), i = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    if(!m.has(v1)) m.set(v1, []);
    m.get(v1).push(v);
  }
  return m;
}
export default partitionOn;
