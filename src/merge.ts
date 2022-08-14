import min from "./min";
import type {CompareFunction, MapFunction} from "./_types";

/**
 * Merges values from sorted iterables.
 * @param xs iterables
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* merge<T, U=T>(xs: Iterable<T>[], fc: CompareFunction<T|U>=null, fm: MapFunction<T, T|U>=null): IterableIterator<T> {
  var X = xs.length;
  var is = [], os = [];
  for(var n=0, i=0; n<X; n++) {
    is[i] = xs[i][Symbol.iterator]();
    os[i] = is[i].next();
    if(!os[i].done) i++;
  }
  while(i>0) {
    var vs = os.map(o => o.value);
    var j = min(vs, fc, fm)[0];
    yield vs[j];
    os[j] = is[j].next();
    if(!os[j].done) continue;
    is.splice(j, 1);
    os.splice(j, 1);
    i--;
  }
}
export default merge;
