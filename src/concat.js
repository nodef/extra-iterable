/**
 * Appends iterables to the end.
 * @param  {...Iterable} xs iterables
 * @returns {Iterable}
 */
function* concat(...xs) {
  for(var x of xs)
    yield* x;
}
module.exports = concat;
