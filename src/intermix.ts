import chunk from './chunk';
import repeat from './repeat';

/**
 * Places values of an iterable between another.
 * @param x an iterable
 * @param y another iterable
 * @param s step size for x (1)
 * @param t step size for y (1)
 * @param m number of values from x (s)
 * @param n number of values from y (t)
 */
function* intermix<T>(x: Iterable<T>, y: Iterable<T>, s: number=1, t: number=1, m: number=s, n: number=t): IterableIterator<T> {
  var x1 = chunk(x, s, m);
  var y1 = chunk(repeat(y), t, n);
  var iy = y1[Symbol.iterator](), i = -1;
  for(var u of x1) {
    if(++i>0) yield* iy.next().value;
    yield* u;
  }
}
export default intermix;
