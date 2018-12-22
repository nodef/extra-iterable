function entries(itr) {
  var z = [], i = 0;
  for(var v of itr)
    z.push([i++, v]);
  return z;
};
module.exports = entries;
