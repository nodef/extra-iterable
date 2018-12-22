const slice = require('iterable-slice');
const sliceTo = require('array-sliceto');
function repeat(itr, n=1, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var iv = slice(itr, bgn, end);
  for(var i=0; i<n; i++) {
    sliceTo(iv, 0, iv.length, z, z0);
    z0 += iv.length;
  }
  return z;
};
module.exports = repeat;
