/**
 * Generates iterable from given number range.
 * @param v start number
 * @param s step size
 * @param V end number (excluding)
 */
function* fromRange(v: number, s: number=1, V: number=Number.MAX_SAFE_INTEGER): IterableIterator<number> {
  for(; v<V; v+=s)
    yield v;
}
export default fromRange;
