import filter from "./filter";
import type {testFn} from "./_types";

/**
 * Finds all values passing a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function* findAll<T>(x: Iterable<T>, ft: testFn<T>): IterableIterator<T> {
  yield* filter(x, ft);
}
export default findAll;
