import {IDENTITY} from "extra-function";
import isList from "./isList";
import type {MapFunction, TestFunction} from "./_types";


/**
 * Flattens nested iterable to given depth.
 * @param x a nested iterable
 * @param n maximum depth (-1 => all)
 * @param fm map function (v, i, x)
 * @param ft test function (v, i, x)
 */
function* flat(x: Iterable<any>, n: number=-1, fm: MapFunction<any, any>=null, ft: TestFunction<any>=null): IterableIterator<any> {
  var fm = fm || IDENTITY;
  var ft = ft || isList, i = -1;
  for(var v of x) {
    var v1 = fm(v, ++i, x);
    if(n!==0 && ft(v1, i, x)) yield* flat(v1, n-1, fm, ft);
    else yield v1;
  }
}
export default flat;
