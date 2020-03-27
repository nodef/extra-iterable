/**
 * Fills with given value.
 * @param {Iterable} x an iterable
 * @param {*} v value
 * @param {number?} i start index (0)
 * @param {number?} I end index (end)
 * @returns {Iterable}
 */
function* fill(x, v, i=0, I=Number.MAX_SAFE_INTEGER) {
  var j = -1;
  for(var u of x) {
    if(++j>=i && j<=I) yield v;
    else yield u;
  }
}
module.exports = fill;
