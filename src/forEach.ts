import type {calledFn} from './_types';

/**
 * Calls a function for each value.
 * @param x an iterable
 * @param fn called function (v, i, x)
 */
function forEach<T>(x: Iterable<T>, fn: calledFn<T>): void {
  var i = -1;
  for(var v of x)
    fn(v, ++i, x);
}
export default forEach;
