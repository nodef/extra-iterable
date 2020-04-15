import type {testFn} from './_types';

/**
 * Segregates iterable keeping similar values together.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 * @returns [satisfies, doesnt]
 */
function partition<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): [T[], T[]] {
  var t: T[] = [], f: T[] = [], i = -1;
  for(var v of x) {
    if(fn.call(ths, v, ++i, x)) t.push(v);
    else f.push(v);
  }
  return [t, f];
}
export default partition;
