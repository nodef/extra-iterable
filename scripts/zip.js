function zip(itr, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1, a = 0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    var b = z0-1;
    for(var u of v)
      (z[++b] = z[b]||[])[a] = u;
    a++;
  }
  return z;
};
module.exports = zip;
