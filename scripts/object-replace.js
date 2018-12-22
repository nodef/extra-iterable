function objectReplace(itr, obj, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = obj[v]!==undefined? obj[v]:v;
  }
  return z;
};
module.exports = objectReplace;
