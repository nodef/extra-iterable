function lastIndexOf(itr, val, bgn=Number.MAX_SAFE_INTEGER, end=-1) {
  var i = -1, z = -1;
  for(var v of itr) {
    if(++i<=end) continue;
    if(i>bgn) break;
    if(v===val) z = i;
  }
  return z;
};
module.exports = lastIndexOf;
