const cmp = require('./_cmp');
const from = require('./from');

/**
 * Gives values of an iterable present in another.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable}
 */
function* intersection(x, y, fn=null) {
  var fn = fn||cmp;
  var y = from(y);
  x: for(var u of x) {
    for(var v of y)
      if(fn(u, v)===0) { yield u; continue x; }
  }
}
module.exports = intersection;
