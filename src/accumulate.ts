import type {reduceFn} from './_types';

/**
 * Produces accumulating values.
 * @param x an iterable
 * @param fr reduce function (acc, v, i, x)
 * @param acc initial value
 */
function* accumulate<T, U=T>(x: Iterable<T>, fr: reduceFn<T, T|U>, acc?: T|U): IterableIterator<T|U> {
  var init = arguments.length <= 2, i = -1;
  for(var v of x) {
    if(init) { acc = v; init = false; ++i; }
    else acc = fr(acc, v, ++i, x);
    yield acc;
  }
}
export default accumulate;
