import minIndex from './minIndex';
import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Merges values from sorted iterables.
 * @param xs iterables
 * @param fn compare function (a, b)
 */
function* merge<T>(xs: Iterable<T>[], fn: compareFn<T>=null): IterableIterator<T> {
  var fn = fn||cmp;
  var X = xs.length;
  var is = [], os = [];
  for(var n=0, i=0; n<X; n++) {
    is[i] = xs[i][Symbol.iterator]();
    os[i] = is[i].next();
    if(!os[i].done) i++;
  }
  while(i>0) {
    var vs = os.map(o => o.value);
    var j = minIndex(vs, fn);
    yield vs[j];
    os[j] = is[j].next();
    if(!os[j].done) continue;
    is.splice(j, 1);
    os.splice(j, 1);
    i--;
  }
}
export default merge;
