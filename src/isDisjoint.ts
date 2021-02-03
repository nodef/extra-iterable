import {isDisjoint as arrayIsDisjoint} from "extra-array";
import type {compareFn, mapFn} from "./_types";

/**
 * Checks if iterables have no value in common.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function isDisjoint<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): boolean {
  return arrayIsDisjoint(x, y, fc, fm);
}
export default isDisjoint;
