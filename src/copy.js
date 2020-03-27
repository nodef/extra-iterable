const slice = require('./slice');

/**
 * Copies part of iterable to another.
 * @param {Iterable} x target iterable
 * @param {Iterable} y source iterable
 * @param {number?} j write index (0)
 * @param {number?} i read start index (0)
 * @param {number?} I read end index (end)
 * @returns {Iterable}
 */
function* copy(x, y, j=0, i=0, I=Number.MAX_SAFE_INTEGER) {
  var k = -1, K = j+(I-i);
  for(var v of x) {
    if(++k===j) yield *slice(y, i, I);
    if(k>=j && k<K) continue;
    else yield v;
  }
}
module.exports = copy;
