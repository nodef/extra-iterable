import from from './from';

/**
 * Repeats an iterable given times.
 * @param x an iterable
 * @param n times (-1 => Inf)
 */
function* repeat<T>(x: Iterable<T>, n: number): IterableIterator<T> {
  var x = from(x);
  for(; n!==0; n--)
    yield* x;
}
export default repeat;
