function hammingDistance(i1, i2) {
  var I2 = i2[Symbol.iterator](), z = 0;
  for(var v1 of i1) {
    V2 = I2.next();
    if(V2.done) return NaN;
    if(v1!==V2.value) z++;
  }
  return I2.next().done? z:NaN;
};
module.exports = hammingDistance;
