import is from './is';

/**
 * Checks if value is list (not string).
 * @param v a value
 */
function isList(v: any): v is Iterable<any> {
  return is(v) && typeof v!=='string';
}
export default isList;
