const get = require('./get');

/**
 * Gets value at indices.
 * @param {Iterable} x an iterable
 * @param {Iterable<number>} is indices (sorted)
 * @returns {*} ...values
 */
function* getAll(x, is) {
  var ii = is[Symbol.iterator]();
  var io = ii.next(), j = -1;
  if(io.done) return;
  for(var v of x) {
    if(++j!==io.value) continue;
    yield v;
    io = ii.next();
    io.value = io.value || Number.MAX_SAFE_INTEGER;
  }
}
module.exports = getAll;
