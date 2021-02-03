import searchInfix from "./searchInfix";
import type {compareFn, mapFn} from "./_types";

/**
 * Checks if iterable contains an infix.
 * @param x an iterable
 * @param y infix?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function hasInfix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>, fm: mapFn<T, T|U>=null): boolean {
  return searchInfix(x, y, fc, fm)>=0;
}
export default hasInfix;
