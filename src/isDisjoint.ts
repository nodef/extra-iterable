import many from './many';
import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Checks if iterables have no value in common.
 * @param x an iterable
 * @param y another iterable
 * @param fn compare function (a, b)
 */
function isDisjoint<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): boolean {
  var fn = fn||cmp;
  var y = many(y);
  for(var u of x) {
    for(var v of y)
      if(fn(u, v)===0) return false;
  }
  return true;
}
export default isDisjoint;
