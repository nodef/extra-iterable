function join(itr, sep=',', bgn=0, end=Number.MAX_SAFE_INTEGER, z='') {
  var i = -1, zl0 = z.length;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z += v+sep;
  }
  return z.length>zl0? z.substring(0, z.length-sep.length):z;
};
module.exports = join;
