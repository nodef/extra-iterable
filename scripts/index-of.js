function indexOf(itr, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v===val) return i; 
  }
  return -1;
};
module.exports = indexOf;
