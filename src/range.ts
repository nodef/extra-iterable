import {range as arrayRange} from "extra-array";
import type {MapFunction, CompareFunction} from "./_types";

/**
 * Finds smallest and largest entries.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns [smallest, largest]
 */
function range<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U>=null, fm: MapFunction<T, T|U>=null): [[number, T], [number, T]] {
  return arrayRange(x, fc, fm);
}
export default range;
