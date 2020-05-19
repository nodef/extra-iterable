import END from './END';

/**
 * Generates iterable from given number range.
 * @param v start number
 * @param s step size
 * @param V end number (excluding)
 */
function* fromRange(v: number, s: number=1, V: number=END): IterableIterator<number> {
  if(s>=0) { for(; v<V; v+=s) yield v; }
  else { for(; v>V; v+=s) yield v; }
}
export default fromRange;
