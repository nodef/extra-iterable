const first = require('./first');
const last = require('./last');
function middle(itr, idx=0) {
  return idx<0? last(itr, idx):first(itr, idx);
};
module.exports = middle;
