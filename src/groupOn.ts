import id from './_id';
import type {mapFn} from './_types';

/**
 * Keeps similar values together and in order.
 * @param x an iterable
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function* groupOn<T, U>(x: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): Iterable<T[]> {
  var fn = fn||id;
  var a = [], i = -1;
  var u1 = fn.call(ths, x[0], 0, x);
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    if(u1===v1) a.push(v);
    else { yield a; a = [v]; }
    u1 = v1;
  }
  yield a;
}
export default groupOn;
