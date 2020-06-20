import type {combineFn} from './_types';

/**
 * Estimates new values between existing ones.
 * @param x an iterable
 * @param fc combine function (a, b)
 */
function* interpolate<T>(x: Iterable<T>, fc: combineFn<T>): IterableIterator<T> {
  var u: T, i = -1;
  for(var v of x) {
    if(++i>0) yield fc(u, v);
    yield (u = v);
  }
}
export default interpolate;
