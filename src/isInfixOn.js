const _isInfixOn = require('@extra-array/is-infix-on');

/**
 * Checks if iterable contains an infix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y infix?
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isInfixOn(x, y, fn=null, ths=null) {
  var y = Array.isArray(y)? y:Array.from(y);
  return _isInfixOn(x, y, fn, ths);
}
module.exports = isInfixOn;
