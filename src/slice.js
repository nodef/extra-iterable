function* slicePP(x, i, I) {
  var k = -1;
  for(var v of x) {
    if(++k>=I) break;
    if(k>=i) yield v;
  }
}

function* slicePN(x, i, I) {
  var k = -1;
  var a = [], ai = 0, al = -I;
  for(var v of x) {
    if(++k<i) { yield v; continue; }
    if(a.length>=al) yield a[ai % al];
    a[ai++ % al] = v;
  }
}

function* sliceN(x, i, I) {
  var n = 0;
  var a = [], ai = 0, al = -i;
  for(var v of x) {
    a[ai++ % al] = v;
    n++;
  }
  I = I<0? I:Math.min(I-n, 0);
  for(; i<I; i++)
    yield a[ai++ % al];
}

/**
 * Gets part of an iterable.
 * @param {Iterable} x an iterable
 * @param {number?} i begin index (0)
 * @param {number?} I end index (end)
 * @returns {Iterable}
 */
function* slice(x, i=0, I=Number.MAX_SAFE_INTEGER) {
  if(i>=0 && I>=0) yield* slicePP(x, i, I);
  else if(i>=0 && I<0) yield* slicePN(x, i, I);
  else yield* sliceN(x, i, I);
}
module.exports = slice;
