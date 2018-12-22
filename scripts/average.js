function average(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1, s = 0, n = 0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    s += v;
    ++n;
  }
  return n>0? s/n:0;
};
module.exports = average;
