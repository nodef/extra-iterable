function min(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var z = Infinity;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z = v<z? v:z;
  }
  return z;
};
module.exports = min;
