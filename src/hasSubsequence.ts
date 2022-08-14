import searchSubsequence from "./searchSubsequence";
import type {MapFunction, CompareFunction} from "./_types";


/**
 * Checks if iterable has a subsequence.
 * @param x an iterable
 * @param y subsequence?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function hasSubsequence<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U>=null, fm: MapFunction<T, T|U>=null): boolean {
  return searchSubsequence(x, y, fc, fm)>=0;
}
export default hasSubsequence;
