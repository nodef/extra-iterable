function forEach(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    fn.call(ths, v, i, itr);
  }
};
module.exports = forEach;
