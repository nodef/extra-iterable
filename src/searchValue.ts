import {searchValue as arraySearchValue} from "extra-array";
import type {compareFn, mapFn} from "./_types";

/**
 * Finds first index of a value.
 * @param x an iterable
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns index of value, -1 if not found
 */
function searchValue<T, U=T>(x: Iterable<T>, v: T, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): number {
  return arraySearchValue(x, v, fc, fm);
}
export default searchValue;
