import from from './from';
import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Gives values of an iterable not present in another.
 * @param x an iterable
 * @param y another iterable
 * @param fn compare function (a, b)
 */
function* difference<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): IterableIterator<T> {
  var fn = fn||cmp;
  var y = from(y);
  x: for(var u of x) {
    for(var v of y)
      if(fn(u, v)===0) continue x;
    yield u;
  }
}
export default difference;
