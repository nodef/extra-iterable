import {mod} from 'extra-math';
import many from './many';
import size from './size';

/**
 * Gives values that cycle through an iterable.
 * @param x an iterable
 * @param i start index (0)
 * @param n number of values (-1 => Inf)
 */
function* cycle<T>(x: Iterable<T>, i: number=0, n: number=-1): IterableIterator<T> {
  var x = many(x);
  var i = i===0? 0 : mod(i, size(x));
  while(true) {
    for(var v of x) {
      if(--i>=0) continue;
      if(n--===0) return;
      yield v;
    }
  }
}
export default cycle;
