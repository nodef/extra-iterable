const is = require('./is');

/**
 * Checks if value is a list (not string).
 * @param {*} v a value
 * @returns {boolean}
 */
function isList(v) {
  return is(v) && typeof v!=='string';
}
module.exports = isList;
