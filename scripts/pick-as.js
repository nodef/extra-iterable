const slice = require('./slice');
const pick = require('./pick');
function pickAs(itr, idx, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  if(idx==null) return slice(itr, bgn, end, z, z0);
  if(Array.isArray(idx)) return pick(itr, idx, bgn, end, z, z0);
  return pick(itr, [idx], bgn, end, z, z0)[z0];
};
module.exports = pickAs;
