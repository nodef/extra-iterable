/**
 * Checks if value is iterable.
 * @param v a value
 */
function is(v: any): boolean {
  return v!=null && typeof v[Symbol.iterator]==='function';
}
export default is;
