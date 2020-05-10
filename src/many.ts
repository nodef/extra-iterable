import isOnce from './isOnce';

/**
 * Converts a once iterable to many.
 * @param x an iterable
 */
function many<T>(x: Iterable<T>): Iterable<T> {
  return isOnce(x)? Array.from(x) : x;
}
export default many;
