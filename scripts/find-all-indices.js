function findAllIndices(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) z[z0++] = i;
  }
  return z;
};
module.exports = findAllIndices;
