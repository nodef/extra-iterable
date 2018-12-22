function replaceTo(itr, val, rep, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = v===val? rep:v;
  }
  return z;
};
module.exports = replaceTo;
