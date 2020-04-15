import id from './_id';
import type {mapFn} from './_types';

/**
 * Checks if iterable starts with a prefix.
 * @param x an iterable
 * @param y prefix?
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function isPrefixOn<T, U>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): boolean {
  var fn = fn||id, i = -1;
  var ix = x[Symbol.iterator]();
  for(var v of y) {
    var {value, done} = ix.next();
    if(done) return false;
    var u1 = fn.call(ths, value, ++i, x);
    var v1 = fn.call(ths, v, i, y);
    if(u1!==v1) return false;
  }
  return true;
}
export default isPrefixOn;
