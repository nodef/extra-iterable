import {from$} from "extra-array";


/**
 * Reverses the values.
 * @param x an iterable
 */
function* reverse<T>(x: Iterable<T>): IterableIterator<T> {
  var a = from$(x);
  for (var i=a.length-1; i>=0; i--)
    yield a[i];
}
export default reverse;
