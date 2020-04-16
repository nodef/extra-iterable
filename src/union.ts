import from from './from';
import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Gives values present in any iterable.
 * @param x an iterable
 * @param y another iterable
 * @param fn compare function (a, b)
 */
function* union<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): IterableIterator<T> {
  var fn = fn||cmp;
  var x = from(x), s = new Set<T>();
  yield* x;
  y: for(var v of y) {
    for(var u of x)
      if(fn(u, v)===0) continue y;
    for(var u of s)
      if(fn(u, v)===0) continue y;
    yield v; s.add(v);
  }
}
export default union;
