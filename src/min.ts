import range from "./range";
import type {MapFunction, CompareFunction} from "./_types";


/**
 * Finds smallest entry.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns [index, value]
 */
function min<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): [number, T] {
  return range(x, fc, fm)[0];
}
export default min;
