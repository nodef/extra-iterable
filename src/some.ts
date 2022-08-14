import type {TestFunction} from "./_types";


function someBool<T>(x: Iterable<T>): boolean {
  for(var v of x)
    if(v) return true;
  return false;
}

function someTest<T>(x: Iterable<T>, ft: TestFunction<T>): boolean {
  var i = -1;
  for(var v of x)
    if(ft(v, ++i, x)) return true;
  return false;
}

/**
 * Checks if any value satisfies a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function some<T>(x: Iterable<T>, ft: TestFunction<T>=null): boolean {
  if(ft) return someTest(x, ft);
  else return someBool(x);
}
export default some;
