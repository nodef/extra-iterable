/**
 * Sets value at index.
 * @param {Iterable} x an iterable
 * @param {number} i index (-ve: from right)
 * @param {*} v value
 * @returns {Iterable}
 */
function* set(x, i, v) {
  var j = -1;
  for(var u of x)
    yield (++j===i? v:u);
  if(j>=i) return;
  for(; ++j<i;) yield undefined;
  yield v;
}
module.exports = set;
