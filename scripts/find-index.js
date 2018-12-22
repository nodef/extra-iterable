function findIndex(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) return i;
  }
  return -1;
};
module.exports = findIndex;
