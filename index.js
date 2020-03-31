/**
 * Breaks iterable into chunks of given size.
 * @param {Iterable} x an iterable
 * @param {number?} n chunk size (1)
 * @returns {Iterable<Array>}
 */
function* chunk(x, n=1) {
  var a = [], m = 0;
  for(var v of x) {
    a.push(v);
    if(++m<n) continue;
    yield a;
    a = []; m = 0;
  }
  if(a.length>0) yield a;
}
/**
 * Compares two values.
 * @param {*} a a value
 * @param {*} b another value
 * @returns {number} a<b: -1, a=b: 0, a>b: 1
 */
function cmp(a, b) {
  return a===b? 0:(a<b? -1:1);
}
/**
 * Compares two iterables.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {number} x<y: -1, x=y: 0, x>y: 1
 */
function compare(x, y, fn=null) {
  var fn = fn||cmp;
  var ix = x[Symbol.iterator]();
  var iy = y[Symbol.iterator]();
  while(true) {
    var u = ix.next();
    var v = iy.next();
    if(u.done || v.done) break;
    var c = fn(u.value, v.value);
    if(c!==0) return c;
  }
  return (v.done? 1:0) - (u.done? 1:0);
}
/**
 * Appends iterables to the end.
 * @param  {...Iterable} xs iterables
 * @returns {Iterable}
 */
function* concat(...xs) {
  for(var x of xs)
    yield* x;
}
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
 * @param {number?} i start index (0)
 * @param {number?} I end index (end)
 * @returns {Iterable}
 */
function* slice(x, i=0, I=Number.MAX_SAFE_INTEGER) {
  if(i>=0 && I>=0) yield* slicePP(x, i, I);
  else if(i>=0 && I<0) yield* slicePN(x, i, I);
  else yield* sliceN(x, i, I);
}
/**
 * Copies part of iterable to another.
 * @param {Iterable} x target iterable
 * @param {Iterable} y source iterable
 * @param {number?} j write index (0)
 * @param {number?} i read start index (0)
 * @param {number?} I read end index (end)
 * @returns {Iterable}
 */
function* copy(x, y, j=0, i=0, I=Number.MAX_SAFE_INTEGER) {
  var k = -1, n = 0, K = 0;
  for(var v of x) {
    if(++k===j) {
      for(var u of slice(y, i, I))
      { yield u; n++; }
      K = j + Math.min(I-i, n);
    }
    if(k>=j && k<K) continue;
    else yield v;
  }
  if(j>=k) {
    for(; ++k<j;) yield undefined;
    yield* slice(y, i, I);
  }
}
/**
 * Converts an iterator to iterable.
 * @param {Iterable} x an iterable
 * @returns {Iterable}
 */
function from(x) {
  return x===x[Symbol.iterator]()? Array.from(x):x;
}
/**
 * Copies part of iterable within.
 * @param {Iterable} x an iterable
 * @param {number} j write index
 * @param {number?} i read start index (0)
 * @param {number?} I read end index (end)
 * @returns {Iterable}
 */
function* copyWithin(x, j, i=0, I=Number.MAX_SAFE_INTEGER) {
  var x = from(x), y = slice(x, i, I);
  var k = -1, K = j+(I-i), done = false;
  for(var v of x) {
    if(!done && ++k>=j && k<K) {
      var {value, done} = y.next();
      yield done? v : value;
    }
    else yield v;
  }
}
/**
 * Counts values which satisfy a test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {number}
 */
function count(x, fn, ths=null) {
  var n = 0, i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) n++;
  return n;
}
/**
 * Gives same value.
 * @param {*} v a value
 * @returns {*} v
 */
function id(v) {
  return v;
}
/**
 * Counts occurrences of values.
 * @param {Iterable} x an iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Map<any, number>} Map {value => count}
 */
function countOn(x, fn=null, ths=null) {
  var fn = fn||id;
  var m = new Map(), i = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    m.set(v1, (m.get(v1)||0) + 1);
  }
  return m;
}
/**
 * Breaks iterable at given indices.
 * @param {Iterable} x an iterable
 * @param {Iterable<number>} is split indices (sorted)
 * @returns {Iterable<Array>} ...pieces
 */
function* cut(x, is) {
  var ii = is[Symbol.iterator]();
  var {value, done} = ii.next();
  if(done) { yield Array.from(x); return; }
  var j = -1, a = [];
  for(var v of x) {
    if(++j<value) { a.push(v); continue; }
    yield a; a = [v];
    var {value, done} = ii.next();
    value = value || Number.MAX_SAFE_INTEGER;
  }
  yield a;
  if(!done) yield [];
  for(var i of ii) yield [];
}
/**
 * Breaks iterable after given indices.
 * @param {Iterable} x an iterable
 * @param {Iterable<number>} is split indices (sorted)
 * @returns {Iterable<Array>} ...pieces
 */
function* cutRight(x, is) {
  var ii = is[Symbol.iterator]();
  var {value, done} = ii.next();
  if(done) { yield Array.from(x); return; }
  var j = -1, a = [];
  for(var v of x) {
    if(++j<=value) { a.push(v); continue; }
    yield a; a = [v];
    var {value, done} = ii.next();
    value = value || Number.MAX_SAFE_INTEGER;
  }
  yield a;
  if(!done) yield [];
  for(var i of ii) yield [];
}
/**
 * Gives values that cycle through an iterable.
 * @param {Iterable} x an iterable
 * @param {number?} n number of values (-1 => Inf)
 * @returns {Iterable}
 */
function* cycle(x, n=-1) {
  var x = from(x);
  w: while(true) {
    for(var v of x) {
      if(n--===0) break w;
      yield v;
    }
  }
}
/**
 * Gives values of an iterable not present in another.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable}
 */
function* difference(x, y, fn=null) {
  var fn = fn||cmp;
  var y = from(y);
  x: for(var u of x) {
    for(var v of y)
      if(fn(u, v)===0) continue x;
    yield u;
  }
}
/**
 * Gets unique set of values.
 * @param {Iterable} x an iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Set}
 */
function uniques(x, fn=null, ths=null) {
  if(!fn) return new Set(x);
  var s = new Set(), i = -1;
  for(var v of x)
    s.add(fn.call(ths, v, ++i, x));
  return s;
}
/**
 * Gives values of an iterable not present in another.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* differenceOn(x, y, fn=null, ths=null) {
  var fn = fn||id, i = -1;
  var s = uniques(y, fn, ths);
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    if(!s.has(u1)) yield u;
  }
}
/**
 * Checks if all values satisfy a test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i ,x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function every(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    if(!fn.call(ths, v, ++i, x)) return false;
  return true;
}
/**
 * Fills with given value.
 * @param {Iterable} x an iterable
 * @param {*} v value
 * @param {number?} i start index (0)
 * @param {number?} I end index (end)
 * @returns {Iterable}
 */
function* fill(x, v, i=0, I=Number.MAX_SAFE_INTEGER) {
  var j = -1;
  for(var u of x) {
    if(++j>=i && j<I) yield v;
    else yield u;
  }
}
/**
 * Keeps the values which pass a test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* filter(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) yield v;
}
/**
 * Finds index of leftmost value passing the test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {number} index of value, -1 if not found
 */
function findIndex(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) return i;
}
/**
 * Finds indices of values passing the test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable<number>}
 */
function* findIndices(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) yield i;
}
/**
 * Finds first value which satisfies a test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {*}
 */
function find(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) return v;
}
/**
 * Finds last value which satisfies a test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {*}
 */
function findRight(x, fn, ths=null) {
  var a, i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) a = v;
  return a;
}
/**
 * Checks if value is an iterable.
 * @param {*} v a value
 * @returns {boolean}
 */
function is(v) {
  return v!=null && typeof v[Symbol.iterator]==='function';
}
/**
 * Checks if value is a list (not string).
 * @param {*} v a value
 * @returns {boolean}
 */
function isList(v) {
  return is(v) && typeof v!=='string';
}
/**
 * Flattens nested iterable to given depth.
 * @param {Iterable} x a nested iterable
 * @param {number?} dep maximum depth (-1)
 * @returns {Iterable}
 */
function* flat(x, dep=-1) {
  for(var v of x) {
    if(dep!==0 && isList(v)) yield* flat(v, dep-1);
    else yield v;
  }
}
/**
 * Calls a function for each value.
 * @param {Iterable} x an iterable
 * @param {function} fn called function (v, i, x)
 * @param {object?} ths this argument
 */
function forEach(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    fn.call(ths, v, ++i, x);
}
/**
 * Gets value at indices.
 * @param {Iterable} x an iterable
 * @param {Iterable<number>} is indices (sorted)
 * @returns {*} ...values
 */
function* getAll(x, is) {
  var ii = is[Symbol.iterator]();
  var {value, done} = ii.next(), j = -1;
  if(done) return;
  for(var v of x) {
    if(++j!==value) continue;
    yield v;
    var {value, done} = ii.next();
    value = value || Number.MAX_SAFE_INTEGER;
  }
  if(!done) yield undefined;
  for(var i of ii) yield undefined;
}
/**
 * Gets value at index.
 * @param {Iterable} x an iterable
 * @param {number} i index
 * @returns {*}
 */
function get(x, i) {
  var j = -1;
  for(var v of x)
    if(++j===i) return v;
}
/**
 * Keeps similar values together and in order.
 * @param {Iterable} x an iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable<Array>}
 */
function* group(x, fn=null) {
  var fn = fn||cmp;
  var u = x[0], a = [];
  for(var v of x) {
    if(fn(u, v)===0) a.push(v);
    else { yield a; a = [v]; }
    u = v;
  }
  yield a;
}
/**
 * Keeps similar values together and in order.
 * @param {Iterable} x an iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable<Array>}
 */
function* groupOn(x, fn=null, ths=null) {
  var fn = fn||id;
  var a = [], i = -1;
  var u1 = fn.call(ths, x[0], 0, x);
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    if(u1===v1) a.push(v);
    else { yield a; a = [v]; }
    u1 = v1;
  }
  yield a;
}
/**
 * Gets first value.
 * @param {Iterable} x an iterable
 * @returns {*}
 */
function head(x) {
  for(var v of x)
    return v;
}
/**
 * Counts the number of values.
 * @param {Iterable} x an iterable
 * @param {number} i start index (0)
 * @param {number} I end index (end)
 * @returns {number}
 */
function size(x, i=0, I=Number.MAX_SAFE_INTEGER) {
  var j = -1, n = 0;
  for(var v of x)
    if(++j>=i && j<I) n++;
  return n;
}
/**
 * Gets zero-based index.
 * @param {Iterable} x an iterable
 * @param {number} i index (-ve: from right)
 * @returns {number}
 */
function index(x, i) {
  var n = size(x);
  return i<0? Math.max(n+i, 0) : Math.min(i, n);
}
/**
 * Gets index range of part of array.
 * @param {Array} x an array
 * @param {number} i start index (-ve: from right) (0)
 * @param {number} I end index (-ve: from right) (end)
 * @returns {number} [start index, end index]
 */
function indexRange(x, i=0, I=Number.MAX_SAFE_INTEGER) {
  var n = size(x);
  i = i<0? Math.max(n+i, 0) : Math.min(i, n);
  I = I<0? Math.max(n+I, 0) : Math.min(I, n);
  I = Math.max(i, I);
  return [i, I];
}
/**
 * Gets values except last.
 * @param {Iterable} x an iterable
 * @returns {Iterable}
 */
function* init(x) {
  var u, i = -1;
  for(var v of x) {
    if(++i>0) yield u;
    u = v;
  }
}
/**
 * Places values of an iterable between another.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {number?} m number of values from x (1)
 * @param {number?} n number of values from y (1)
 * @returns {Iterable}
 */
function* interleave(x, y, m=1, n=1) {
  throw new Error('TODO?');
}
/**
 * Gives values present in both iterables.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable}
 */
function* intersection(x, y, fn=null) {
  var fn = fn||cmp;
  var y = from(y);
  x: for(var u of x) {
    for(var v of y)
      if(fn(u, v)===0) { yield u; continue x; }
  }
}
/**
 * Gives values present in both iterables.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* intersectionOn(x, y, fn=null, ths=null) {
  var s = uniques(y, fn, ths);
  var fn = fn||id, i = -1;
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    if(s.has(u1)) yield u;
  }
}
/**
 * Checks if iterables have no value in common.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isDisjoint(x, y, fn=null) {
  var fn = fn||cmp;
  var x = from(x);
  for(var v of y) {
    for(var u of x)
      if(fn(u, v)===0) return false;
  }
  return true;
}
/**
 * Checks if iterables have no value in common.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isDisjointOn(x, y, fn=null, ths=null) {
  var s = uniques(x, fn, ths);
  var fn = fn||id, i = -1;
  for(var v of y) {
    var v1 = fn.call(ths, v, ++i, y);
    if(s.has(v1)) return false;
  }
  return true;
}
/**
 * Checks if two iterables are equal.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isEqual(x, y, fn=null) {
  return compare(x, y, fn)===0;
}
/**
 * Compares two values.
 * @param {*} a a value
 * @param {*} b another value
 * @returns {number} a<b: -1, a=b: 0, a>b: 1
 */
function cmp43(a, b) {
  return a<b? -1:(a>b? 1:0);
}
const cmp44 = cmp43;

/**
 * Checks if array contains an infix.
 * @param {Array} x an array
 * @param {Array} y infix?
 * @param {function?} fn compare function (a, b)
 * @returns {boolean} true if infix
 */
function isInfix(x, y, fn=null) {
  if(y.length===0) return true;
  var fn = fn||cmp44;
  var Y = y.length, J = 0;
  var m = new Array(Y).fill(false);
  for(var u of x) {
    for(var j=J; j>0; j--)
      m[j] = m[j-1] && fn(u, y[j])===0;
    m[0] = fn(u, y[0])===0;
    J = Math.min(J+1, Y-1);
    if(m[Y-1]) return true;
  }
  return false;
}
const _isInfix = isInfix45;

/**
 * Checks if iterable contains an infix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y infix?
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isInfix45(x, y, fn=null) {
  var y = Array.isArray(y)? y:Array.from(y);
  return _isInfix(x, y, fn);
}
const _isInfixOn = require('@extra-array/is-infix-on');

/**
 * Checks if iterable contains an infix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y infix?
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isInfixOn(x, y, fn=null, ths=null) {
  var y = Array.isArray(y)? y:Array.from(y);
  return _isInfixOn(x, y, fn, ths);
}
/**
 * Checks if value is an iterator (can iterate only once).
 * @param {*} v a value
 * @returns {boolean}
 */
function isIterator(v) {
  return is(v) && v===v[Symbol.iterator]();
}
/**
 * Checks if iterable starts with a prefix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y prefix?
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isPrefix(x, y, fn=null) {
  var fn = fn||cmp;
  var ix = x[Symbol.iterator]();
  for(var v of y) {
    var {value, done} = ix.next();
    if(done || fn(value, v)!==0) return false;
  }
  return true;
}
/**
 * Checks if iterable starts with a prefix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y prefix?
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isPrefixOn(x, y, fn=null, ths=null) {
  var fn = fn||id, i = -1;
  var ix = x[Symbol.iterator]();
  for(var v of y) {
    var {value, done} = ix.next();
    if(done) return false;
    var u1 = fn.call(ths, value, ++i, x);
    var v1 = fn.call(ths, v, i, y);
    if(u1!==v1) return false;
  }
  return true;
}
/**
 * Checks if iterable has a subsequence.
 * @param {Iterable} x an iterable
 * @param {Iterable} y subsequence?
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isSubsequence(x, y, fn=null) {
  var fn = fn||cmp;
  var iy = y[Symbol.iterator]();
  var {value, done} = iy.next();
  if(done) return true;
  for(var u of x) {
    if(fn(u, value)!==0) continue;
    var {value, done} = iy.next();
    if(done) return true;
  }
  return false;
}
/**
 * Checks if iterable has a subsequence.
 * @param {Iterable} x an iterable
 * @param {Iterable} y subsequence?
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isSubsequenceOn(x, y, fn=null, ths=null) {
  var fn = fn||id, i = -1, j = -1;
  var iy = y[Symbol.iterator]();
  var {value, done} = iy.next();
  if(done) return true;
  var v1 = fn.call(ths, value, ++j, y);
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    if(u1!==v1) continue;
    var {value, done} = iy.next();
    if(done) return true;
    v1 = fn.call(ths, value, ++j, y);
  }
  return false;
}
/**
 * Checks if iterable ends with a suffix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y suffix?
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isSuffix(x, y, fn=null) {
  var fn = fn||cmp;
  var y = Array.isArray(y)? y:Array.from(y);
  var Y = y.length, a = [], ai = 0;
  if(Y===0) return true;
  for(var u of x)
    a[ai++ % Y] = u;
  if(a.length<Y) return false;
  for(var i=0; i<Y; i++)
    if(fn(a[ai++ % Y], y[i])!==0) return false;
  return true;
}
/**
 * Checks if iterable ends with a suffix.
 * @param {Iterable} x an iterable
 * @param {Iterable} y suffix?
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isSuffixOn(x, y, fn=null, ths=null) {
  var fn = fn||id, n = 0;
  var y = Array.isArray(y)? y:Array.from(y);
  var Y = y.length, a = [], ai = 0;
  if(Y===0) return true;
  for(var u of x) {
    a[ai++ % Y] = u;
    n++;
  }
  if(a.length<Y) return false;
  for(var i=0, j=n-Y; i<Y; i++, j++) {
    var u1 = fn.call(ths, a[ai++ % Y], j, x);
    var v1 = fn.call(ths, y[i], i, y);
    if(u1!==v1) return false;
  }
  return true;
}
/**
 * Checks if there are no duplicate values.
 * @param {Array} x an array
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isUnique(x, fn=null) {
  var fn = fn||cmp;
  for(var i=0, I=x.length; i<I; i++) {
    for(var j=0; j<i; j++)
      if(fn(x[i], x[j])===0) return false;
  }
  return true;
}
/**
 * Checks if there are no duplicate values.
 * @param {Array} x an array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function isUniqueOn(x, fn=null, ths=null) {
  var fn = fn||id;
  for(var i=0, I=x.length; i<I; i++) {
    var u = fn.call(ths, x[i], i, x);
    for(var j=0; j<i; j++) {
      var v = fn.call(ths, x[j], j, x);
      if(u===v) return false;
    }
  }
  return true;
}
/**
 * Gives iterator for iterable.
 * @param {Iterable} x an iterable
 * @returns {Iterable}
 */
function iterator(x) {
  return x[Symbol.iterator]();
}
/**
 * Joins values together.
 * @param {Iterable} x an iterable
 * @param {string?} sep separator (,)
 * @returns {string}
 */
function join(x, sep=',') {
  var a = '';
  for(var v of x)
    a += v+sep;
  return a.substring(0, a.length-sep.length);
}
/**
 * Gets last value.
 * @param {Iterable} x an iterable
 * @returns {*}
 */
function last(x) {
  for(var v of x);
  return v;
}
/**
 * Counts the number of values.
 * @param {Iterable} x an iterable
 * @param {number} i start index (-ve: from right) (0)
 * @param {number} I end index (-ve: from right) (end)
 * @returns {number}
 */
function length(x, i=0, I=Number.MAX_SAFE_INTEGER) {
  return size(x, i, I);
}
/**
 * Updates values based on map function.
 * @param {Iterable} x an iterable
 * @param {function} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* map(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    yield fn.call(ths, v, ++i, x);
}
/**
 * Finds largest value.
 * @param {Iterable} x an iterable
 * @param {function?} fn compare function (a, b)
 * @returns {*}
 */
function max(x, fn=null) {
  var fn = fn||cmp;
  var m, i = -1;
  for(var v of x) {
    if(++i===0) m = v;
    if(fn(v, m)>0) m = v;
  }
  return m;
}
/**
 * Finds largest value.
 * @param {Iterable} x an iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {*}
 */
function maxOn(x, fn=null, ths=null) {
  var fn = fn||id;
  var mk, mv, i = -1;
  for(var v of x) {
    var k = fn.call(ths, v, ++i, x);
    if(i===0) { mk = k; mv = v; }
    if(k>mk) { mk = k; mv = v; }
  }
  return mv;
}
/**
 * Finds smallest value.
 * @param {Iterable} x an iterable
 * @param {function?} fn compare function (a, b)
 * @returns {*}
 */
function min(x, fn=null) {
  var fn = fn||cmp;
  var m, i = -1;
  for(var v of x) {
    if(++i===0) m = v;
    if(fn(v, m)<0) m = v;
  }
  return m;
}
/**
 * Finds smallest value.
 * @param {Iterable} x an iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {*}
 */
function minOn(x, fn=null, ths=null) {
  var fn = fn||id, i = -1;
  var mk, mv;
  for(var v of x) {
    var k = fn.call(ths, v, ++i, x);
    if(i===0) { mk = k; mv = v; }
    if(k<mk) { mk = k; mv = v; }
  }
  return mv;
}
/**
 * Segregates iterable keeping similar values together.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Array<Array>} [satisfies, doesnt]
 */
function partition(x, fn, ths=null) {
  var t = [], f = [], i = -1;
  for(var v of x) {
    if(fn.call(ths, v, ++i, x)) t.push(v);
    else f.push(v);
  }
  return [t, f];
}
/**
 * Segregates array keeping similar values together.
 * @param {Iterable} x an array
 * @param {function} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Map<any, Array>} {key => values}
 */
function partitionOn(x, fn=null, ths=null) {
  var fn = fn||id;
  var m = new Map(), i = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    if(!m.has(v1)) m.set(v1, []);
    m.get(v1).push(v);
  }
  return m;
}
/**
 * Removes last value.
 * @param {Iterable} x an iterable
 * @returns {Array} [value, iterable]
 */
function pop(x) {
  var x = from(x);
  return [last(x), init(x)];
}
/**
 * Adds values to the end. 
 * @param {Iterable} x an iterable
 * @param {...any} vs values to add
 * @returns {Iterable} iterable
 */
function* push(x, ...vs) {
  yield* x;
  yield* vs;
}
/**
 * Finds smallest and largest values.
 * @param {Iterable} x an iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Array} [min, max]
 */
function range(x, fn=null) {
  var fn = fn||cmp;
  var m, n, i = -1;
  for(var v of x) {
    if(++i===0) { m = n = v; }
    if(fn(v, m)<0) m = v;
    if(fn(v, n)>0) n = v;
  }
  return [m, n];
}
/**
 * Finds smallest and largest values.
 * @param {Iterable} x an array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Array} [min, max]
 */
function rangeOn(x, fn=null, ths=null) {
  var fn = fn||id, i = -1;
  var mk, mv, nk, nv;
  for(var v of x) {
    var k = fn.call(ths, v, ++i, x);
    if(i===0) { mk = nk = k; mv = nv = v; }
    if(k<mk) { mk = k; mv = v; }
    if(k>nk) { nk = k; nv = v; }
  }
  return [mv, nv];
}
/**
 * Reduces values to a single value.
 * @param {Iterable} x an iterable
 * @param {function} fn reduce function (acc, v, i, x)
 * @param {*?} acc initial value
 * @returns {*}
 */
function reduce(x, fn, acc) {
  var al = arguments.length, i = -1;
  for(var v of x) {
    if(++i===0 && al===2) acc = v; 
    else acc = fn(acc, v, i, x);
  }
  return acc;
}
/**
 * Repeats an iterable given times.
 * @param {Iterable} x an iterable
 * @param {number} n times (-1 => Inf)
 * @returns {Iterable}
 */
function* repeat(x, n) {
  var x = from(x);
  for(; n!==0; n--)
    yield* x;
}
/**
 * Searches a value throughout.
 * @param {Iterable} x an iterable
 * @param {*} v search value
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable<number>} indices of value
 */
function* searchAll(x, v, fn=null) {
  var fn = fn||cmp, i = -1;
  for(var u of x) {
    ++i;
    if(fn(u, v)===0) yield i;
  }
}
/**
 * Searches a value from left.
 * @param {Iterable} x an iterable
 * @param {*} v search value
 * @param {function?} fn compare function (a, b)
 * @returns {number} index of value, -1 if not found
 */
function search(x, v, fn=null) {
  var fn = fn||cmp, i = -1;
  for(var u of x) {
    ++i;
    if(fn(u, v)===0) return i;
  }
  return -1;
}
/**
 * Searches a value from right.
 * @param {Iterable} x an iterable
 * @param {*} v search value
 * @param {function?} fn compare function (a, b)
 * @returns {number} index of value, -1 if not found
 */
function searchRight(x, v, fn=null) {
  var fn = fn||cmp, i = -1, j = -1;
  for(var u of x) {
    ++i;
    if(fn(u, v)===0) j = i;
  }
  return j;
}
/**
 * Sets value at index.
 * @param {Iterable} x an iterable
 * @param {number} i index
 * @param {*} v value
 * @returns {Iterable}
 */
function* set(x, i, v) {
  var j = -1;
  for(var u of x)
    yield (++j===i? v:u);
  if(j>=i) return;
  for(; ++j<i;) yield undefined;
  yield v;
}
/**
 * Removes first value.
 * @param {Iterable} x an iterable
 * @returns {Array} [value, iterable]
 */
function shift(x) {
  var ix = x[Symbol.iterator]();
  return [ix.next().value, ix];
}
/**
 * Checks if any value satisfies a test.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i ,x)
 * @param {object?} ths this argument
 * @returns {boolean}
 */
function some(x, fn, ths=null) {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) return true;
  return false;
}
/**
 * Breaks iterable considering test as separator.
 * @param {Iterable} x an iterable
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable<Array>}
 */
function* split(x, fn, ths=null) {
  var a = [], i = -1;
  for(var v of x) {
    if(!fn.call(ths, v, ++i, x)) a.push(v);
    else if(a.length) { yield a; a = []; }
  }
  if(a.length) yield a;
}
/**
 * Exchanges two values.
 * @param {Iterable} x an iterable
 * @param {number} i an index
 * @param {number} j another index
 * @returns {Iterable}
 */
function* swap(x, i, j) {
  if(i===j) yield* x;
  var k = Math.min(i, j);
  var l = Math.max(i, j);
  var vk, m = [], i = -1;
  for(var v of x) {
    if(++i<k || i>l) yield v;
    else if(i===k) vk = v;
    else if(i<l) m.push(v)
    else { yield v; yield* m; yield vk; }
  }
}
/**
 * Gets values except first.
 * @param {Iterable} x an iterable
 * @returns {Iterable}
 */
function* tail(x) {
  var i = -1;
  for(var v of x)
    if(++i>0) yield v;
}
/**
 * Gives values present in any iterable.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable}
 */
function* union(x, y, fn=null) {
  var fn = fn||cmp;
  var x = from(x), s = new Set();
  yield* x;
  y: for(var v of y) {
    for(var u of x)
      if(fn(u, v)===0) continue y;
    for(var u of s)
      if(fn(u, v)===0) continue y;
    yield v; s.add(v);
  }
}
/**
 * Gives values present in any iterable.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* unionOn(x, y, fn=null, ths=null) {
  var fn = fn||id;
  var s = new Set(), i = -1, j = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    s.add(v1); yield v;
  }
  for(var v of y) {
    var v1 = fn.call(ths, v, ++j, y);
    if(!s.has(v1)) { s.add(v1); yield v; }
  }
}
/**
 * Removes duplicate values.
 * @param {Iterable} x an iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable}
 */
function* unique(x, fn=null) {
  yield* union([], x, fn);
}
/**
 * Removes duplicate values.
 * @param {Iterable} x an iterable
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* uniqueOn(x, fn=null, ths=null) {
  yield* unionOn([], x, fn, ths);
}
/**
 * Adds values to the start.
 * @param {Iterable} x an array
 * @param {...any} vs values to add
 * @returns {Iterable} iterable
 */
function* unshift(x, ...vs) {
  yield* vs;
  yield* x;
}
/**
 * Gives passed values as array.
 * @param  {...any} vs values
 * @returns {Array}
 */
function args(...vs) {
  return vs;
}
/**
 * Combines values from n iterables.
 * @param {Array<Iterable>} xs iterables
 * @param {function?} fn combine function (a, b, c, ...)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* zip(xs, fn=null, ths=null) {
  var fn = fn||args;
  var is = xs.map(x => x[Symbol.iterator]());
  while(true) {
    var io = is.map(i => i.next());
    if(io.every(r => r.done)) break;
    var vs = io.map(r => r.value);
    yield fn.apply(ths, vs);
  }
}
exports.chunk = chunk;
exports.compare = compare;
exports.concat = concat;
exports.copy = copy;
exports.copyWithin = copyWithin;
exports.count = count;
exports.countOn = countOn;
exports.cut = cut;
exports.cutRight = cutRight;
exports.cycle = cycle;
exports.difference = difference;
exports.differenceOn = differenceOn;
exports.every = every;
exports.fill = fill;
exports.filter = filter;
exports.findIndex = findIndex;
exports.findIndices = findIndices;
exports.find = find;
exports.findRight = findRight;
exports.flat = flat;
exports.forEach = forEach;
exports.from = from;
exports.getAll = getAll;
exports.get = get;
exports.group = group;
exports.groupOn = groupOn;
exports.head = head;
exports.index = index;
exports.indexRange = indexRange;
exports.init = init;
exports.interleave = interleave;
exports.intersection = intersection;
exports.intersectionOn = intersectionOn;
exports.isDisjoint = isDisjoint;
exports.isDisjointOn = isDisjointOn;
exports.isEqual = isEqual;
exports.isInfix = isInfix45;
exports.isInfixOn = isInfixOn;
exports.isIterator = isIterator;
exports.is = is;
exports.isList = isList;
exports.isPrefix = isPrefix;
exports.isPrefixOn = isPrefixOn;
exports.isSubsequence = isSubsequence;
exports.isSubsequenceOn = isSubsequenceOn;
exports.isSuffix = isSuffix;
exports.isSuffixOn = isSuffixOn;
exports.isUnique = isUnique;
exports.isUniqueOn = isUniqueOn;
exports.iterator = iterator;
exports.join = join;
exports.last = last;
exports.length = length;
exports.map = map;
exports.max = max;
exports.maxOn = maxOn;
exports.min = min;
exports.minOn = minOn;
exports.partition = partition;
exports.partitionOn = partitionOn;
exports.pop = pop;
exports.push = push;
exports.range = range;
exports.rangeOn = rangeOn;
exports.reduce = reduce;
exports.repeat = repeat;
exports.searchAll = searchAll;
exports.search = search;
exports.searchRight = searchRight;
exports.set = set;
exports.shift = shift;
exports.size = size;
exports.slice = slice;
exports.some = some;
//exports.splice = require('./splice');
exports.split = split;
exports.swap = swap;
exports.tail = tail;
exports.union = union;
exports.unionOn = unionOn;
exports.unique = unique;
exports.uniqueOn = uniqueOn;
exports.unshift = unshift;
exports.zip = zip;
