import type {TestFunction} from "./_types";


function everyBool<T>(x: Iterable<T>): boolean {
  for(var v of x)
    if(!v) return false;
  return true;
}

function everyTest<T>(x: Iterable<T>, ft: TestFunction<T>): boolean {
  var i = -1;
  for(var v of x)
    if(!ft(v, ++i, x)) return false;
  return true;
}

/**
 * Checks if all values satisfy a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 */
function every<T>(x: Iterable<T>, ft: TestFunction<T>=null): boolean {
  if(ft) return everyTest(x, ft);
  else return everyBool(x);
}
export default every;
