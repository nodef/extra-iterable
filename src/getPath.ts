import is from "./is";
import get from "./get";


/**
 * Gets value at path in a nested iterable.
 * @param x a nested iterable
 * @param p path
 */
function getPath(x: Iterable<any>, p: number[]): any {
  for(var i of p)
    x = is(x)? get(x, i) : undefined;
  return x;
}
export default getPath;
