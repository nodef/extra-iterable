import range from "./range";
import type {MapFunction, CompareFunction} from "./_types";

/**
 * Finds largest entry.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns [index, value]
 */
function max<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U>=null, fm: MapFunction<T, T|U>=null): [number, T] {
  return range(x, fc, fm)[1];
}
export default max;
