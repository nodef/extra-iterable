/**
 * Gives values that cycle through an iterable.
 * @param {Iterable} x an iterable
 * @param {number} n number of values
 * @returns {Iterable}
 */
function* cycle(x, n) {
  while(true) for(var v of x) {
    if(--n<0) break;
    yield v;
  }
}
module.exports = cycle;
