import many from "./many";
import {IDENTITY} from "extra-function";
import type {MapFunction} from "./_types";


/**
 * Lists cartesian product of iterables.
 * @param xs iterables
 * @param fm map function (vs, i)
 */
function* cartesianProduct<T, U=T>(xs: Iterable<T>[], fm: MapFunction<T[], T[]|U> | null=null): IterableIterator<T[]|U> {
  var fm = fm || IDENTITY;
  var X  = xs.length;
  if(X===0) return;
  var is = [], os = [];
  for(var i=0; i<X; i++) {
    xs[i] = i>0? many(xs[i]) : xs[i];
    is[i] = xs[i][Symbol.iterator]();
    os[i] = is[i].next();
    if(os[i].done) return;
  }
  for(var i=0;; i++) {
    var vs = [];
    for(var o of os) vs.push(o.value);
    yield fm(vs, i, null);
    for(var r=X-1; r>=0; r--) {
      os[r] = is[r].next();
      if(!os[r].done) break;
      is[r] = xs[r][Symbol.iterator]();
      os[r] = is[r].next();
    }
    if(r<0) break;
  }
}
export default cartesianProduct;
