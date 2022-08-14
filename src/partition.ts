import {partition as arrayPartition} from "extra-array";
import type {TestFunction} from "./_types";

/**
 * Segregates values by test result.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns [satisfies, doesnt]
 */
function partition<T>(x: Iterable<T>, ft: TestFunction<T>): [T[], T[]] {
  return arrayPartition(x, ft);
}
export default partition;
