const cmp = require('./_cmp');

/**
 * Gives values of an array not present in another.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable}
 */
function* difference(x, y, fn=null) {
  var fn = fn||cmp;
  x: for(var u of x) {
    for(var v of y)
      if(fn(u, v)===0) continue x;
    yield u;
  }
}
module.exports = difference;
