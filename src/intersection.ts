import cmp from './_cmp';
import from from './from';
import type {compareFn} from './_types';

/**
 * Gives values present in both iterables.
 * @param x an iterable
 * @param y another iterable
 * @param fn compare function (a, b)
 */
function* intersection<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): Iterable<T> {
  var fn = fn||cmp;
  var y = from(y);
  x: for(var u of x) {
    for(var v of y)
      if(fn(u, v)===0) { yield u; continue x; }
  }
}
export default intersection;
