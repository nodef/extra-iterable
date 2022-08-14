import {partitionAs as arrayPartitionAs} from "extra-array";
import type {MapFunction} from "./_types";

/**
 * Segregates values by similarity.
 * @param x an iterable
 * @param fm map function (v, i, x)
 * @returns Map {key => values}
 */
function partitionAs<T, U=T>(x: Iterable<T>, fm: MapFunction<T, T|U>=null): Map<T|U, T[]> {
  return arrayPartitionAs(x, fm);
}
export default partitionAs;
