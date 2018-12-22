function all(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!v) return false;
  }
  return true;
};
module.exports = all;
