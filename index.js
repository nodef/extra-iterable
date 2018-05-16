// 0. iterable-all (all)
function all(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!v) return false;
  }
  return true;
};
// 1. iterable-any (any)
function any(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v) return true;
  }
  return false;
};
// 2. iterable-average (average)
function average(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1, s = 0, n = 0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    s += v;
    ++n;
  }
  return n>0? s/n:0;
};
// 3. iterable-compact (compact)
function compact(itr, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v) z[z0++] = v;
  }
  return z;
};
// 4. iterable-concat (concat)
function concat() {
  var z = [], z0 = 0;
  for(var i=0, I=arguments.length; i<I; i++) {
    for(var v of arguments[i])
      z[z0++] = v;
  }
  return z;
};
// 5. iterable-contains (contains)
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
// 6. iterable-endswith (endsWith)
function endsWith(itr, val) {
  for(var v of itr);
  return v===val;
};
// 7. iterable-entries (entries)
function entries(itr) {
  var z = [], i = 0;
  for(var v of itr)
    z.push([i++, v]);
  return z;
};
// 8. iterable-equal (equal)
function equal(i1, i2) {
  if(i1===i2) return true;
  var f2 = i2[Symbol.iterator]();
  for(var v1 of i1) {
    var s2 = f2.next();
    if(v1!=s2.value || s2.done) return false;
  }
  return true;
};
// 9. iterable-euclideandistance (euclideanDistance)
function euclideanDistance(i1, i2) {
  var I2 = i2[Symbol.iterator](), z = 0;
  for(var v1 of i1) {
    var v2 = I2.next().value;
    z += (v1-v2)*(v1-v2);
  }
  return Math.sqrt(z);
};
// 10. iterable-everyof (everyOf)
function everyOf(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!fn.call(ths, v, i, itr)) return false;
  }
  return true;
};
// 11. iterable-filter (filter)
function filter(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) z[z0++] = v;
  }
  return z;
};
// 12. iterable-find (find)
function find(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) return v;
  }
};
// 13. iterable-findall (findAll)
function findAll(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) z[z0++] = v;
  }
  return z;
};
// 14. iterable-findallindices (findAllIndices)
function findAllIndices(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) z[z0++] = i;
  }
  return z;
};
// 15. iterable-findindex (findIndex)
function findIndex(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) return i;
  }
  return -1;
};
// 16. iterable-first (first)
function first(itr, idx=0) {
  var i = -1;
  for(var v of itr)
    if(++i===idx) return v;
};
// 17. iterable-flatten (flatten)
function flattenAll20(itr, lvl, z, z0) {
  for(var v of itr) {
    if(lvl!==0 && is(v)) z0 = flattenAll20(v, lvl-1, z, z0);
    else z[z0++] = v;
  }
  return z0;
};
function flatten(itr, lvl=-1, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(lvl!==0 && is(v)) z0 = flattenAll20(v, lvl-1, z, z0);
    else z[z0++] = v;
  }
  return z;
};
// 18. iterable-foreach (forEach)
function forEach(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    fn.call(ths, v, i, itr);
  }
};
// 19. iterable-from (from)
function from(a) {
  if(a==null || typeof a[Symbol.iterator]==='function') return a;
  return typeof a==='object'? Object.entries(a):[a];
};
// 20. iterable-hammingdistance (hammingDistance)
function hammingDistance(i1, i2) {
  var I2 = i2[Symbol.iterator](), z = 0;
  for(var v1 of i1) {
    V2 = I2.next();
    if(V2.done) return NaN;
    if(v1!==V2.value) z++;
  }
  return I2.next().done? z:NaN;
};
// 21. iterable-includes (includes)
function includes(itr, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v===val) return true;
  }
  return false;
};
// 22. iterable-indexof (indexOf)
function indexOf(itr, val, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v===val) return i; 
  }
  return -1;
};
// 23. iterable-indicesof (indicesOf)
function indicesOf(itr, val, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(v===val) z[z0++] = i;
  }
  return z;
};
// 24. iterable-is (is)
function is(v) {
  return v!=null && typeof v[Symbol.iterator]==='function';
};
// 25. iterable-iscollection (isCollection)
function isCollection(a) {
  return is(a) && typeof a!=='string';
};
// 26. iterable-join (join)
function join(itr, sep=',', bgn=0, end=Number.MAX_SAFE_INTEGER, z='') {
  var i = -1, zl0 = z.length;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z += v+sep;
  }
  return z.length>zl0? z.substring(0, z.length-sep.length):z;
};
// 27. iterable-keys (keys)
function keys(itr) {
  var i = 0, z = [];
  for(var v of itr)
    z.push(i++);
  return z;
};
// 28. iterable-last (last)
function last(itr, idx=-1) {
  var i = -1, a = [];
  for(var v of itr)
    a[++i % idx] = v;
  return a[++i % idx];
};
// 29. iterable-lastindexof (lastIndexOf)
function lastIndexOf(itr, val, bgn=Number.MAX_SAFE_INTEGER, end=-1) {
  var i = -1, z = -1;
  for(var v of itr) {
    if(++i<=end) continue;
    if(i>bgn) break;
    if(v===val) z = i;
  }
  return z;
};
// 30. iterable-mapreplace (mapReplace)
function mapReplace(itr, map, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = map.has(v)? map.get(v):v;
  }
  return z;
};
// 31. iterable-mapto (mapTo)
function mapTo(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = fn.call(ths, v, i, itr);
  }
  return z;
};
// 32. iterable-max (max)
function max(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1, z = -Infinity;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z = v>z? v:z;
  }
  return z;
};
// 33. iterable-middle (middle)
const last36 = require('iterable-last');
function middle(itr, idx=0) {
  return idx<0? last36(itr, idx):first(itr, idx);
};
// 34. iterable-min (min)
function min(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var z = Infinity;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z = v<z? v:z;
  }
  return z;
};
// 35. iterable-objectreplace (objectReplace)
function objectReplace(itr, obj, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = obj[v]!==undefined? obj[v]:v;
  }
  return z;
};
// 36. iterable-pick (pick)
function pick(itr, idx, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    var ix = idx.indexOf(i);
    if(ix>=0) z[z0+ix] = v;
  }
  return z;
};
// 37. iterable-pickas (pickAs)
const pick40 = require('iterable-pick');
function pickAs(itr, idx, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  if(idx==null) return slice(itr, bgn, end, z, z0);
  if(Array.isArray(idx)) return pick40(itr, idx, bgn, end, z, z0);
  return pick40(itr, [idx], bgn, end, z, z0)[z0];
};
// 38. iterable-reduce (reduce)
function reduce(itr, fn, acc, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    acc = acc!==undefined? fn(acc, v, i, itr):v;
  }
  return acc;
};
// 39. iterable-repeat (repeat)
const sliceTo42 = require('array-sliceto');
function repeat(itr, n=1, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var iv = slice(itr, bgn, end);
  for(var i=0; i<n; i++) {
    sliceTo42(iv, 0, iv.length, z, z0);
    z0 += iv.length;
  }
  return z;
};
// 40. iterable-replaceto (replaceTo)
function replaceTo(itr, val, rep, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = v===val? rep:v;
  }
  return z;
};
// 41. iterable-reverse (reverse)
function reverse(itr, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1, z00 = z0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = v;
  }
  return reverseOf1(z, z00, z0);
};
// 42. iterable-size (size)
function size(itr) {
  var z = 0;
  if(itr.size!=null) return itr.size;
  if(itr.length!=null) return itr.length;
  for(var v of itr)
    z++;
  return z;
};
// 43. iterable-slice (slice)
function slice(itr, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1, z0 = z0<0? z.length+z0:z0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = v;
  }
  return z;
};
// 44. iterable-someof (someOf)
function someOf(itr, fn, ths, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(fn.call(ths, v, i, itr)) return true;
  }
  return false;
};
// 45. iterable-split (split)
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
};
// 46. iterable-startswith (startsWith)
function startsWith(itr, val) {
  for(var v of itr)
    return v===val;
};
// 47. iterable-sum (sum)
function sum(itr, bgn=0, end=Number.MAX_SAFE_INTEGER) {
  var i = -1, z = 0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z += v;
  }
  return z;
};
// 48. iterable-without (without)
function without(itr, rmv, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!rmv.has(v)) z[z0++] = v;
  }
  return z;
};
// 49. iterable-zip (zip)
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
};
exports.all = all;
exports.any = any;
exports.average = average;
exports.compact = compact;
exports.concat = concat;
exports.contains = contains;
exports.endsWith = endsWith;
exports.entries = entries;
exports.equal = equal;
exports.euclideanDistance = euclideanDistance;
exports.every = everyOf;
exports.filter = filter;
exports.find = find;
exports.findAll = findAll;
exports.findAllIndices = findAllIndices;
exports.findIndex = findIndex;
exports.first = first;
exports.flatten = flatten;
exports.forEach = forEach;
exports.from = from;
exports.hammingDistance = hammingDistance;
exports.includes = includes;
exports.indexOf = indexOf;
exports.indicesOf = indicesOf;
exports.is = is;
exports.isCollection = isCollection;
exports.join = join;
exports.keys = keys;
exports.last = last;
exports.lastIndexOf = lastIndexOf;
exports.mapReplace = mapReplace;
exports.map = mapTo;
exports.max = max;
exports.middle = middle;
exports.min = min;
exports.objectReplace = objectReplace;
exports.pick = pick;
exports.pickAs = pickAs;
exports.reduce = reduce;
exports.repeat = repeat;
exports.replace = replaceTo;
exports.reverse = reverse;
exports.size = size;
exports.slice = slice;
exports.some = someOf;
exports.split = split;
exports.startsWith = startsWith;
exports.sum = sum;
exports.without = without;
exports.zip = zip;
exports.unzip = zip;
