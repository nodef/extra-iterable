/**
 * Gets first value.
 * @param {Iterable} x an iterable
 * @returns {*}
 */
function head(x) {
  for(var v of x)
    return v;
}
module.exports = head;
