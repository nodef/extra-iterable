import id from './_id';
import array from './_array';
import type {mapFn} from './_types';

/**
 * Checks if iterable contains an infix.
 * @param x an iterable
 * @param y infix?
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function isInfixOn<T, U>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, U>=null, ths: object=null): boolean {
  var fn = fn||id;
  var y1 = array(y);
  if(y1.length===0) return true;
  var Y = y1.length, i = -1, J = 0;
  var y1 = y1.map(fn, ths) as T[];
  var m = new Array(Y).fill(false);
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    for(var j=J; j>0; j--)
      m[j] = m[j-1] && u1===y1[j];
    m[0] = u1===y1[0];
    J = Math.min(J+1, Y-1);
    if(m[Y-1]) return true;
  }
  return false;
}
export default isInfixOn;
