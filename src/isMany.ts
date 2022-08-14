import isOnce from "./isOnce";


/**
 * Checks if value is many iterable.
 * @param v a value
 */
function isMany(v: any): v is Iterable<any> {
  return !isOnce(v);
}
export default isMany;
