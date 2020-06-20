/**
 * Checks if value is iterator.
 * @param v a value
 */
function isIterator(v: any): v is Iterator<any> {
  return v!=null && typeof v.next==='function';
}
export default isIterator;
