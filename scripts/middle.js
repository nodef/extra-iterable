const first = require('@extra-iterable/first');
const last = require('@extra-iterable/last');
function middle(itr, idx=0) {
  return idx<0? last(itr, idx):first(itr, idx);
};
module.exports = middle;
