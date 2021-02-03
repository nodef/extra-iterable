import isOnce from "./isOnce";

function manyLate<T>(x: Iterable<T>, a: T[]): Iterable<T> {
  return {[Symbol.iterator]: () => {
    var i = 0, xi = x[Symbol.iterator]();
    return {next: () => {
    if(i<a.length) return {value: a[i++], done: false};
    var {value, done} = xi.next();
    if(!done) a[i++] = value;
    return {value, done};
  }}}};
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
