import {scanUntil as arrayScanUntil} from "extra-array";
import type {TestFunction} from "./_types";

/**
 * Scans from left, until a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns index where test passes
 */
function scanUntil<T>(x: Iterable<T>, ft: TestFunction<T>): number {
  return arrayScanUntil(x, ft);
}
export default scanUntil;
