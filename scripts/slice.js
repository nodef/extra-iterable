function slice(itr, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1, z0 = z0<0? z.length+z0:z0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = v;
  }
  return z;
};
module.exports = slice;
