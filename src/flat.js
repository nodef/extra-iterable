const isList = require('./isList');

/**
 * Flattens nested iterable to given depth.
 * @param {Iterable} x a nested iterable
 * @param {number?} dep maximum depth (-1)
 * @returns {Iterable}
 */
function* flat(x, dep=-1) {
  for(var v of x) {
    if(dep!==0 && isList(v)) yield* flat(v, dep-1);
    else yield v;
  }
}
module.exports = flat;
