const _isInfix = require('@extra-array/is-infix');

/**
 * Checks if iterable contains an infix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y infix?
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isInfix(x, y, fn=null) {
  var y = Array.isArray(y)? y:Array.from(y);
  return _isInfix(x, y, fn);
}
module.exports = isInfix;
