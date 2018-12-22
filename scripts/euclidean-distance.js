function euclideanDistance(i1, i2) {
  var I2 = i2[Symbol.iterator](), z = 0;
  for(var v1 of i1) {
    var v2 = I2.next().value;
    z += (v1-v2)*(v1-v2);
  }
  return Math.sqrt(z);
};
module.exports = euclideanDistance;
