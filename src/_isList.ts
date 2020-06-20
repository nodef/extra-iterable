import is from './is';

/**
 * Checks if value is list (not string).
 * @param v a value
 */
function isList(v: any): boolean {
  return is(v) && typeof v!=='string';
}
export default isList;
