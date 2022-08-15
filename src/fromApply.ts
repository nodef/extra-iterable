import type {MapFunction} from "./_types";


/**
 * Generates iterable from function application.
 * @param fm map function (v, i)
 * @param v start value
 * @param n number of values (-1 => Inf)
 */
function* fromApply<T>(fm: MapFunction<T, T>=null, v: T, n: number=-1): IterableIterator<T> {
  if (n!==0) yield v;
  for (var i=1; i!==n; i++)
    yield (v = fm(v, i, null));
}
export default fromApply;
