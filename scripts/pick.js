function pick(itr, idx, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    var ix = idx.indexOf(i);
    if(ix>=0) z[z0+ix] = v;
  }
  return z;
};
module.exports = pick;
