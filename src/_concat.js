function concat(...xs) {
  for(var x of xs)
    yield* x;
}
module.exports = concat;
