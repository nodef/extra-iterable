/**
 * Checks is iterable is empty.
 * @param x an iterable
 */
function isEmpty<T>(x: Iterable<T>): boolean {
  for (var _ of x)
    return false;
  return true;
}
export default isEmpty;
