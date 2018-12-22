const is = require('iterable-is');
function flattenAll(itr, lvl, z, z0) {
  for(var v of itr) {
    if(lvl!==0 && is(v)) z0 = flattenAll(v, lvl-1, z, z0);
    else z[z0++] = v;
  }
  return z0;
};
function flatten(itr, lvl=-1, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(lvl!==0 && is(v)) z0 = flattenAll(v, lvl-1, z, z0);
    else z[z0++] = v;
  }
  return z;
};
module.exports = flatten;
