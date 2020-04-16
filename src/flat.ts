import isList from './isList';

/**
 * Flattens nested iterable to given depth.
 * @param x a nested iterable
 * @param dep maximum depth (-1)
 */
function* flat(x: Iterable<any>, dep: number=-1): IterableIterator<any> {
  for(var v of x) {
    if(dep!==0 && isList(v)) yield* flat(v, dep-1);
    else yield v;
  }
}
export default flat;
