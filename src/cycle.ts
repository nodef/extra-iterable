import from from './from';

/**
 * Gives values that cycle through an iterable.
 * @param x an iterable
 * @param n number of values (-1 => Inf)
 */
function* cycle<T>(x: Iterable<T>, n: number=-1): IterableIterator<T> {
  var x = from(x);
  w: while(true) {
    for(var v of x) {
      if(n--===0) break w;
      yield v;
    }
  }
}
export default cycle;
