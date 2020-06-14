import id from './_id';
import cmp from './_cmp';
import type {mapFn, compareFn} from './_types';

/**
 * Searches a prefix.
 * @param x an iterable
 * @param y prefix?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function searchPrefix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): number {
  var fc = fc||cmp, fm = fm||id;
  var ix = x[Symbol.iterator](), i = -1;
  for(var v of y) {
    var {value, done} = ix.next();
    if(done) return -1;
    var u1 = fm(value, ++i, x);
    var v1 = fm(v, i, y);
    if(fc(u1, v1)!==0) return -1;
  }
  return 0;
}
export default searchPrefix;
