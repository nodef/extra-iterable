function split(itr, sep=',', lim=Number.MAX_SAFE_INTEGER, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1, zx = [], n = 0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(n<lim && v!==sep) zx.push(v);
    else if(zx.length) { z[z0++] = zx; zx = []; n++; }
  }
  if(zx.length) z[z0++] = zx;
  return z;
};
module.exports = split;
