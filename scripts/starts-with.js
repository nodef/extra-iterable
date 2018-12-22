function startsWith(itr, val) {
  for(var v of itr)
    return v===val;
};
module.exports = startsWith;
