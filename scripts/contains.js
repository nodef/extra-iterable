function contains(i1, i2) {
  var a2 = Array.from(i2);
  var A2 = a2.length, a1 = [];
  for(var v1 of i1) {
    a1.push(v1);
    if(a1.length<A2) continue;
    for(var i=0, da=a1.length-A2; i<A2; i++)
      if(a1[da+i]!==a2[i]) break;
    if(i===A2) return true;
  }
  return false;
};
module.exports = contains;
