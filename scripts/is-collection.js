const is = require('./is');
function isCollection(a) {
  return is(a) && typeof a!=='string';
};
module.exports = isCollection;
