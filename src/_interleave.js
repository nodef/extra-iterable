/**
 * Places values of an iterable between another.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {number?} m number of values from x (1)
 * @param {number?} n number of values from y (1)
 * @returns {Iterable}
 */
function* interleave(x, y, m=1, n=1) {
  var ix = x[Symbol.iterator]();
  var iy = y[Symbol.iterator]();
  var ex = false, ey = false;
  while(true) {
    for(var k=0; k<m; k++) {
      var r = ix.next();
      if(r.done) {
        ex = true;
        if(ey) return;
        ix = x[Symbol.iterator]();
        r = ix.next();
      }
      yield r.value;
    }
    for(var k=0; k<n; k++) {
      var r = iy.next();
    }
      a.push(y[j]);
  }
  while(true) {
    for(var k=0; k<m; k++, i=(i+1)%X)
      a.push(x[i]);
    for(var k=0; k<n && j<Y; k++, j++)
      a.push(y[i]);
    if(j===X) break;
  }
  return a;
}
module.exports = interleave;
