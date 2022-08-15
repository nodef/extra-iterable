import type {MapFunction} from "./_types";


/**
 * Updates values based on map function.
 * @param x an iterable
 * @param fm map function (v, i, x)
 */
function* map<T, U>(x: Iterable<T>, fm: MapFunction<T, U>): IterableIterator<U> {
  var i = -1;
  for (var v of x)
    yield fm(v, ++i, x);
}
export default map;
