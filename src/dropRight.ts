import slice from './slice';

/**
 * Discards last n values only.
 * @param x an iterable
 * @param n number of values (1)
 */
function* dropRight<T>(x: Iterable<T>, n: number=1): IterableIterator<T> {
  if(n>0) yield* slice(x, 0, -n);
  else yield* x;
}
export default dropRight;

