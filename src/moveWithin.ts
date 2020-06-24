import END from './END';

function* movePart<T>(x: Iterable<T>, j: number, k: number, l: number): IterableIterator<T> {
  var p = [], i = -1;
  for(var v of x) {
    if(++i<j || i>=l) yield v;
    else {
      p.push(v);
      if(i<l-1) continue;
      yield* p.slice(k-j);
      yield* p.slice(0, k-j);
    }
  }
}

/**
 * Moves part of iterable within.
 * @param x an iterable
 * @param j write index (0)
 * @param i read start index (0)
 * @param I read end index (X)
 */
function* moveWithin<T>(x: Iterable<T>, j: number=0, i: number=0, I: number=END): IterableIterator<T> {
  if(j<i) yield* movePart(x, j, i, I);
  else yield* movePart(x, i, I, j);
}
export default moveWithin;
