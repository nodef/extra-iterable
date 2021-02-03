import many from "./many";

/**
 * Repeats an iterable given times.
 * @param x an iterable
 * @param n times (-1 => Inf)
 */
function* repeat<T>(x: Iterable<T>, n: number=-1): IterableIterator<T> {
  var x = many(x);
  for(; n!==0; n--)
    yield* x;
}
export default repeat;
