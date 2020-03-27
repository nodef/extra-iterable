/**
 * Sets value at index.
 * @param {Array} x an array
 * @param {number} i index (-ve: from right)
 * @param {*} v value
 * @returns {Array}
 */
function set(x, i, v) {
  var j = -1;
  for(var u of x)
    yield (++j===i? v:u);
}
module.exports = set;
