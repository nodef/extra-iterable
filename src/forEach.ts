import type {ProcessFunction} from "./_types";

/**
 * Calls a function for each value.
 * @param x an iterable
 * @param fc called function (v, i, x)
 */
function forEach<T>(x: Iterable<T>, fc: ProcessFunction<T>): void {
  var i = -1;
  for(var v of x)
    fc(v, ++i, x);
}
export default forEach;
