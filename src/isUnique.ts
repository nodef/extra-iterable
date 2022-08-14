import {isUnique as arrayIsUnique} from "extra-array";
import type {CompareFunction, MapFunction} from "./_types";

/**
 * Checks if there are no duplicate values.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function isUnique<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U>=null, fm: MapFunction<T, T|U>=null): boolean {
  return arrayIsUnique(x, fc, fm);
}
export default isUnique;
