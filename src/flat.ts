import isList from './isList';

/**
 * Flattens nested iterable to given depth.
 * @param {Iterable} x a nested iterable
 * @param {number?} dep maximum depth (-1)
 * @returns {Iterable}
 */
function* flat(x: Iterable<any>, dep: number=-1): Iterable<any> {
  for(var v of x) {
    if(dep!==0 && isList(v)) yield* flat(v, dep-1);
    else yield v;
  }
}
export default flat;
