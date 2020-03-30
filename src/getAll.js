const get = require('./get');

/**
 * Gets value at indices.
 * @param {Iterable} x an iterable
 * @param {Iterable<number>} is indices (sorted)
 * @returns {*} ...values
 */
function* getAll(x, is) {
  var ii = is[Symbol.iterator]();
  var {value, done} = ii.next(), j = -1;
  if(done) return;
  for(var v of x) {
    if(++j!==value) continue;
    yield v;
    var {value, done} = ii.next();
    value = value || Number.MAX_SAFE_INTEGER;
  }
  if(!done) yield undefined;
  for(var i of ii) yield undefined;
}
module.exports = getAll;
