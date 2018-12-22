function keys(itr) {
  var i = 0, z = [];
  for(var v of itr)
    z.push(i++);
  return z;
};
module.exports = keys;
