import some from "./some";
import {IDENTITY} from "extra-function";
import type {MapFunction, EndFunction} from "./_types";


/**
 * Combines values from iterables.
 * @param xs iterables
 * @param fm map function (vs, i, xs)
 * @param ft till function (dones) (some)
 * @param vd default value
 */
function* zip<T, U=T[]>(xs: Iterable<T>[], fm: MapFunction<T[], T[]|U>=null, ft: EndFunction=null, vd?: T): IterableIterator<T[]|U> {
  var fm = fm || IDENTITY;
  var ft = ft || some as EndFunction;
  var X = xs.length;
  if(X===0) return;
  var is = [], ds = [], vs = [];
  for(var r=0; r<X; r++)
    is[r] = xs[r][Symbol.iterator]();
  for(var i=0;; i++) {
    for(var r=0; r<X; r++) {
      var {done, value} = is[r].next();
      ds[r] = done; vs[r] = done? vd : value;
    }
    if(ft(ds)) break;
    yield fm(vs.slice(), i, null);
  }
}
export default zip;
