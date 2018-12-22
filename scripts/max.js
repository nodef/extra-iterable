function max(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1, z = -Infinity;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z = v>z? v:z;
  }
  return z;
};
module.exports = max;
