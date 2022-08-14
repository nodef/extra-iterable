import {countAs as arrayCountAs} from "extra-array";
import type {MapFunction} from "./_types";


/**
 * Counts occurrences of values.
 * @param x an iterable
 * @param fm map function (v, i, x)
 * @returns Map {value => count}
 */
function countAs<T, U=T>(x: Iterable<T>, fm: MapFunction<T, T|U> | null=null): Map<T|U, number> {
  return arrayCountAs(x, fm);
}
export default countAs;
