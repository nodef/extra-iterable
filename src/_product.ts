import many from './many';
import type {mapFn} from './_types';

function* product<T, U>(xs: Iterable<T>[], fn: mapFn<T, U>=null, ths: object=null): IterableIterator<U> {
  var xs = xs.map(many);
  throw new Error('TODO');
}
