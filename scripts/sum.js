function sum(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1, z = 0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z += v;
  }
  return z;
};
module.exports = sum;
