function is(v) {
  return v!=null && typeof v[Symbol.iterator]==='function';
}
function isCollection(a) {
  return is(a) && typeof a!=='string';
}
function equal(i1, i2) {
  if(i1===i2) return true;
  var f2 = i2[Symbol.iterator]();
  for(var v1 of i1) {
    var s2 = f2.next();
    if(v1!=s2.value || s2.done) return false;
  }
  return true;
}
function size(itr) {
  var z = 0;
  if(itr.size!=null) return itr.size;
  if(itr.length!=null) return itr.length;
  for(var v of itr)
    z++;
  return z;
}
function first(itr, idx=0) {
  var i = -1;
  for(var v of itr)
    if(++i===idx) return v;
}
function last(itr, idx=-1) {
  var i = -1, a = [];
  for(var v of itr)
    a[++i % idx] = v;
  return a[++i % idx];
}
function middle(itr, idx=0) {
  return idx<0? last(itr, idx):first(itr, idx);
}
function keys(itr) {
  var i = 0, z = [];
  for(var v of itr)
    z.push(i++);
  return z;
}
function entries(itr) {
  var z = [], i = 0;
  for(var v of itr)
    z.push([i++, v]);
  return z;
}
function any(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v) return true;
  }
  return false;
}
function all(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!v) return false;
  }
  return true;
}
function from(a) {
  if(a==null || typeof a[Symbol.iterator]==='function') return a;
  return typeof a==='object'? Object.entries(a):[a];
}
function startsWith(itr, val) {
  for(var v of itr)
    return v===val;
}
function endsWith(itr, val) {
  for(var v of itr);
  return v===val;
}
function indexOf(itr, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v===val) return i; 
  }
  return -1;
}
function indicesOf(itr, val, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v===val) z[z0++] = i;
  }
  return z;
}
function lastIndexOf(itr, val, bgn=Number.MAX_SAFE_INTEGER, end=-1) {
  var i = -1, z = -1;
  for(var v of itr) {
    if(++i<=end) continue;
    if(i>bgn) break;
    if(v===val) z = i;
  }
  return z;
}
function includes(itr, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v===val) return true;
  }
  return false;
}
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
}
function join(itr, sep=',', bgn=0, end=Number.MAX_SAFE_INTEGER, z='') {
  var i = -1, zl0 = z.length;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z += v+sep;
  }
  return z.length>zl0? z.substring(0, z.length-sep.length):z;
}
function pick(itr, idx, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    var ix = idx.indexOf(i);
    if(ix>=0) z[z0+ix] = v;
  }
  return z;
}
function slice(itr, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1, z0 = z0<0? z.length+z0:z0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = v;
  }
  return z;
}
function pickAs(itr, idx, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  if(idx==null) return slice(itr, bgn, end, z, z0);
  if(Array.isArray(idx)) return pick(itr, idx, bgn, end, z, z0);
  return pick(itr, [idx], bgn, end, z, z0)[z0];
}
function compact(itr, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v) z[z0++] = v;
  }
  return z;
}
function without(itr, rmv, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!rmv.has(v)) z[z0++] = v;
  }
  return z;
}
function concat() {
  var z = [], z0 = 0;
  for(var i=0, I=arguments.length; i<I; i++) {
    for(var v of arguments[i])
      z[z0++] = v;
  }
  return z;
}
function flattenAll(itr, lvl, z, z0) {
  for(var v of itr) {
    if(lvl!==0 && is(v)) z0 = flattenAll(v, lvl-1, z, z0);
    else z[z0++] = v;
  }
  return z0;
}
function flatten(itr, lvl=-1, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(lvl!==0 && is(v)) z0 = flattenAll(v, lvl-1, z, z0);
    else z[z0++] = v;
  }
  return z;
}
function zip(itr, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1, a = 0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    var b = z0-1;
    for(var u of v)
      (z[++b] = z[b]||[])[a] = u;
    a++;
  }
  return z;
}
function replaceTo(itr, val, rep, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = v===val? rep:v;
  }
  return z;
}
function mapReplace(itr, map, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = map.has(v)? map.get(v):v;
  }
  return z;
}
function objectReplace(itr, obj, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = obj[v]!==undefined? obj[v]:v;
  }
  return z;
}
function reverseTo(arr, bgn=0, end=arr.length, z=[], z0=z.length) {
  for(var i=end-1; i>=bgn; i--)
    z[z0++] = arr[i];
  return z;
}
const arrayReverse = reverseTo;
function reverse(itr, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1, z00 = z0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = v;
  }
  return arrayReverse(z, z00, z0);
}
function split(itr, sep=',', lim=Number.MAX_SAFE_INTEGER, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1, zx = [], n = 0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(n<lim && v!==sep) zx.push(v);
    else if(zx.length) { z[z0++] = zx; zx = []; n++; }
  }
  if(zx.length) z[z0++] = zx;
  return z;
}
function copyTo(arr, bgn=0, end=arr.length, z=[], z0=z.length, z1=z0+(end-bgn)) {
  if(z1>z.length) z.length = z1;
  if(arr===z) return z.copyWithin(z0, bgn, end);
  for(var i=bgn; i<end; i++)
    z[z0++] = arr[i];
  return z;
}
function sliceTo(arr, bgn=0, end=arr.length, z=[], z0=z.length) {
  bgn = bgn<0? arr.length+bgn:bgn;
  end = end<0? arr.length+end:end;
  end = end>arr.length? arr.length:end;
  z0 = z0<0? z.length+z0:z0;
  return copyTo(arr, bgn, end, z, z0);
}
const arraySlice = sliceTo;
function repeat(itr, n=1, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var iv = slice(itr, bgn, end);
  for(var i=0; i<n; i++) {
    arraySlice(iv, 0, iv.length, z, z0);
    z0 += iv.length;
  }
  return z;
}
function forEach(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    fn.call(ths, v, i, itr);
  }
}
function someOf(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) return true;
  }
  return false;
}
function everyOf(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!fn.call(ths, v, i, itr)) return false;
  }
  return true;
}
function find(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) return v;
  }
}
function findIndex(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) return i;
  }
  return -1;
}
function findAll(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) z[z0++] = v;
  }
  return z;
}
function findAllIndices(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) z[z0++] = i;
  }
  return z;
}
function reduce(itr, fn, acc, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    acc = acc!==undefined? fn(acc, v, i, itr):v;
  }
  return acc;
}
function filter(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) z[z0++] = v;
  }
  return z;
}
function mapTo(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = fn.call(ths, v, i, itr);
  }
  return z;
}
function max(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1, z = -Infinity;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z = v>z? v:z;
  }
  return z;
}
function min(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var z = Infinity;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z = v<z? v:z;
  }
  return z;
}
function sum(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1, z = 0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z += v;
  }
  return z;
}
function average(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1, s = 0, n = 0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    s += v;
    ++n;
  }
  return n>0? s/n:0;
}
function hammingDistance(i1, i2) {
  var I2 = i2[Symbol.iterator](), z = 0;
  for(var v1 of i1) {
    V2 = I2.next();
    if(V2.done) return NaN;
    if(v1!==V2.value) z++;
  }
  return I2.next().done? z:NaN;
}
function euclideanDistance(i1, i2) {
  var I2 = i2[Symbol.iterator](), z = 0;
  for(var v1 of i1) {
    var v2 = I2.next().value;
    z += (v1-v2)*(v1-v2);
  }
  return Math.sqrt(z);
}
// 1. Datatype methods
exports.is = is;
exports.isCollection = isCollection;

// 2. About methods
exports.equal = equal;
exports.size = size;
exports.first = first;
exports.middle = middle;
exports.last = last;
exports.keys = keys;
exports.entries = entries;
exports.any = any;
exports.all = all;

// 3. Generate methods
exports.from = from;

// 4. Search methods
exports.startsWith = startsWith;
exports.endsWith = endsWith;
exports.indexOf = indexOf;
exports.indicesOf = indicesOf;
exports.lastIndexOf = lastIndexOf;
exports.includes = includes;
exports.contains = contains;

// 4. Transform methods
exports.join = join;
exports.pick = pick;
exports.pickAs = pickAs;
exports.slice = slice;
exports.compact = compact;
exports.without = without;
exports.concat = concat;
exports.flatten = flatten;
exports.zip = zip;
exports.unzip = exports.zip;
exports.replace = replaceTo;
exports.mapReplace = mapReplace;
exports.objectReplace = objectReplace;
exports.reverse = reverse;
exports.split = split;
exports.repeat = repeat;

// 5. Functional methods
exports.forEach = forEach;
exports.some = someOf;
exports.every = everyOf;
exports.find = find;
exports.findIndex = findIndex;
exports.findAll = findAll;
exports.findAllIndices = findAllIndices;
exports.reduce = reduce;
exports.filter = filter;
exports.map = mapTo;

// 5. Evaluate methods
exports.max = max;
exports.min = min;
exports.sum = sum;
exports.average = average;
exports.hammingDistance = hammingDistance;
exports.euclideanDistance = euclideanDistance;
