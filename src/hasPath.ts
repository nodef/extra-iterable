import getPath from './getPath';

/**
 * Checks if nested iterable has a path.
 * @param x a nested iterable
 * @param p path
 */
function hasPath(x: Iterable<any>, p: number[]): boolean {
  return getPath(x, p)!==undefined;
}
export default hasPath;
