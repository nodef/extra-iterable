import is from "./is";

/**
 * Checks if value is once iterable.
 * @param v a value
 */
function isOnce(v: any): v is IterableIterator<any> {
  return is(v) && v[Symbol.iterator]()===v as any;
}
export default isOnce;
