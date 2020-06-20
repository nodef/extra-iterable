/**
 * Checks if value is iterable.
 * @param v a value
 */
function is(v: any): v is Iterable<any> {
  return v!=null && typeof v[Symbol.iterator]==='function';
}
export default is;
