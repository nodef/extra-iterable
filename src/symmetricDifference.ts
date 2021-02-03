import many from "./many";
import difference from "./difference";
import type {compareFn, mapFn} from "./_types";

/**
 * Gives values not present in both iterables.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* symmetricDifference<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  var x = many(x), y = many(y);
  yield* difference(x, y, fc, fm);
  yield* difference(y, x, fc, fm);
}
export default symmetricDifference;
