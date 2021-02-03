import last from "./last";
import searchInfixAll from "./searchInfixAll";
import type {compareFn, mapFn} from "./_types";

/**
 * Finds last index of an infix.
 * @param x an iterable
 * @param y search infix
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function searchInfixRight<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>, fm: mapFn<T, T|U>=null): number {
  return last(searchInfixAll(x, y, fc, fm), -1);
}
export default searchInfixRight;
