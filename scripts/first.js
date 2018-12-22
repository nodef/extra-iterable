function first(itr, idx=0) {
  var i = -1;
  for(var v of itr)
    if(++i===idx) return v;
};
module.exports = first;
