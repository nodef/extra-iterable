import compare from "./compare";
import type {CompareFunction, MapFunction} from "./_types";


/**
 * Checks if two iterables are equal.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function isEqual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  return compare(x, y, fc, fm)===0;
}
export default isEqual;
