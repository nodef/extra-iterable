import head from "./head";
import searchInfixAll from "./searchInfixAll";
import type {CompareFunction, MapFunction} from "./_types";


/**
 * Finds first index of an infix.
 * @param x an iterable
 * @param y search infix
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function searchInfix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): number {
  return head(searchInfixAll(x, y, fc, fm), -1);
}
export default searchInfix;
