/**
 * Gets value at index.
 * @param {Iterable} x an iterable
 * @param {number} i index
 * @returns {*}
 */
function get(x, i) {
  var j = -1;
  for(var v of x)
    if(++j===i) return v;
}
module.exports = get;
