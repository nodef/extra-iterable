import searchValue from "./searchValue";
import type {CompareFunction, MapFunction} from "./_types";


/**
 * Checks if iterable has a value.
 * @param x an iterable
 * @param v value?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function hasValue<T, U=T>(x: Iterable<T>, v: T, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  return searchValue(x, v, fc, fm)>=0;
}
export default hasValue;
