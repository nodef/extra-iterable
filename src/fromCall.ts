/**
 * Generates iterable from function call.
 * @param fc called function
 * @param as arguments
 */
function* fromCall<T>(fc: Function, ...as: any[]): IterableIterator<T> {
  for(;;)
    yield fc(...as);
}
export default fromCall;
