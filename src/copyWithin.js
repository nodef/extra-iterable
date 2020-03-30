const slice = require('./slice');
const from = require('./from');

/**
 * Copies part of iterable within.
 * @param {Iterable} x an iterable
 * @param {number} j write index
 * @param {number?} i read start index (0)
 * @param {number?} I read end index (end)
 * @returns {Iterable}
 */
function* copyWithin(x, j, i=0, I=Number.MAX_SAFE_INTEGER) {
  var x = from(x), y = slice(x, i, I);
  var k = -1, K = j+(I-i), done = false;
  for(var v of x) {
    if(!done && ++k>=j && k<K) {
      var {value, done} = y.next();
      yield done? v : value;
    }
    else yield v;
  }
}
module.exports = copyWithin;
