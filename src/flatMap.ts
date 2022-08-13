import {IDENTITY} from "extra-function";
import isList from "./isList";
import type {mapFn, testFn} from "./_types";

/**
 * Flattens nested iterable, based on map function.
 * @param x a nested iterable
 * @param fm map function (v, i, x)
 * @param ft test function (v, i, x)
 */
function* flatMap(x: Iterable<any>, fm: mapFn<any, any>=null, ft: testFn<any>=null): IterableIterator<any> {
  var fm = fm || IDENTITY;
  var ft = ft || isList, i = -1;
  for(var v of x) {
    var v1 = fm(v, ++i, x);
    if(ft(v1, i, x)) yield* v1;
    else yield v1;
  }
}
export default flatMap;
