import isOnce from './isOnce';

function manyLate<T>(x: Iterable<T>, a: T[]): Iterable<T> {
  return {[Symbol.iterator]: function* () {
    if(a.length) { yield* a; return; }
    for(var v of x) { a.push(v); yield v; }
  }};
}

/**
 * Converts a once iterable to many.
 * @param x an iterable
 * @param now consume immediately? (false)
 */
function many<T>(x: Iterable<T>, now: boolean=false): Iterable<T> {
  if(!isOnce(x)) return x;
  return now? Array.from(x) : manyLate(x, []);
}
export default many;
