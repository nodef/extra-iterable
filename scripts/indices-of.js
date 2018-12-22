function indicesOf(itr, val, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v===val) z[z0++] = i;
  }
  return z;
};
module.exports = indicesOf;
