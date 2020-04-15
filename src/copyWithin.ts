import slice from './slice';
import from from './from';

/**
 * Copies part of iterable within.
 * @param x an iterable
 * @param j write index
 * @param i read start index (0)
 * @param I read end index (end)
 */
function* copyWithin<T>(x: Iterable<T>, j: number, i: number=0, I: number=Number.MAX_SAFE_INTEGER): Iterable<T> {
  var x = from(x), y = slice(x, i, I);
  var k = -1, K = j+(I-i), done = false;
  for(var v of x) {
    if(!done && ++k>=j && k<K) {
      var {value, done} = y.next();
      yield done? v : value;
    }
    else yield v;
  }
}
export default copyWithin;
