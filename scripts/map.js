function mapTo(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = fn.call(ths, v, i, itr);
  }
  return z;
};
module.exports = mapTo;
