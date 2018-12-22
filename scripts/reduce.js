function reduce(itr, fn, acc, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    acc = acc!==undefined? fn(acc, v, i, itr):v;
  }
  return acc;
};
module.exports = reduce;
