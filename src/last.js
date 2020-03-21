/**
 * Gets last value.
 * @param {Iterable} x an iterable
 * @returns {*}
 */
function last(x) {
  for(var v of x);
  return v;
}
module.exports = last;
