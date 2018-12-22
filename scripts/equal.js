function equal(i1, i2) {
  if(i1===i2) return true;
  var f2 = i2[Symbol.iterator]();
  for(var v1 of i1) {
    var s2 = f2.next();
    if(v1!=s2.value || s2.done) return false;
  }
  return true;
};
module.exports = equal;
