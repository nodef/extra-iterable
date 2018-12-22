function concat() {
  var z = [], z0 = 0;
  for(var i=0, I=arguments.length; i<I; i++) {
    for(var v of arguments[i])
      z[z0++] = v;
  }
  return z;
};
module.exports = concat;
