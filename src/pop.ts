var from = require('./from');
var init = require('./init');
var last = require('./last');

/**
 * Removes last value.
 * @param {Iterable} x an iterable
 * @returns {Array} [value, iterable]
 */
function pop(x) {
  var x = from(x);
  return [last(x), init(x)];
}
module.exports = pop;
