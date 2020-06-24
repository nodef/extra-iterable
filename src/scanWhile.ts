import {scanWhile as arrayScanWhile} from 'extra-array';
import type {testFn} from './_types';

/**
 * Scans from left, while a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns index where test fails
 */
function scanWhile<T>(x: Iterable<T>, ft: testFn<T>): number {
  return arrayScanWhile(x, ft);
}
export default scanWhile;
