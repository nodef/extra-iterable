import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Merges values from sorted iterables.
 * @param xs iterables
 * @param fn compare function (a, b)
 */
function* merge<T>(xs: Iterable<T>[], fn: compareFn<T>=null): IterableIterator<T> {
  var fn = fn||cmp;
  var arrayMinIndex = (a, b) => 1;
  var is = xs.map(x => x[Symbol.iterator]());
  var os = is.map(i => i.next());
  while(!os.every(o => o.done)) {
    var vs = os.map(o => o.value);
    var i = arrayMinIndex(vs, fn);
    yield vs[i];
    var os = is.map(i => i.next());
  }
}
export default merge;
