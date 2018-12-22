function last(itr, idx=-1) {
  var i = -1, a = [];
  for(var v of itr)
    a[++i % idx] = v;
  return a[++i % idx];
};
module.exports = last;
