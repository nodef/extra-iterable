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
}
/**
 * Compares two values.
 * @param {*} a a value
 * @param {*} b another value
 * @returns {number} a<b: -1, a=b: 0, a>b: 1
 */
function cmp(a, b) {
  return a<b? -1:(a>b? 1:0);
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
    if(u.done && v.done) return 0;
    var c = fn(u, v);
    if(c!==0) return c;
  }
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
/**
 * Compares two values.
 * @param {*} a a value
 * @param {*} b another value
 * @returns {number} a<b: -1, a=b: 0, a>b: 1
 */
function cmp4(a, b) {
  return a<b? -1:(a>b? 1:0);
}
const cmp5 = cmp4;

/**
 * Counts occurrences of a value.
 * @param {Iterable} x an array
 * @param {*} v value
 * @param {function?} fn compare function (a, b)
 * @returns {number}
 */
function count(x, v, fn=null) {
  var fn = fn||cmp5, n = 0;
  for(var u of x)
    if(fn(u, v)===0) n++;
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
 * @param {Iterable} x an array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Map<any, number>}
 */
function countAllOn(x, fn=null, ths=null) {
  var fn = fn||id;
  var m = new Map(), i = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, i, x);
    m.set((m.get(v1)||0) + 1);
  }
  return m;
}
/**
 * Gives same value.
 * @param {*} v a value
 * @returns {*} v
 */
function id8(v) {
  return v;
}
const id9 = id8;

/**
 * Counts occurrences of a value.
 * @param {Iterable} x an array
 * @param {*} v value
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {number}
 */
function countOn(x, v, fn=null, ths=null) {
  var fn = fn||id9, i = -1, n = 0;
  var v1 = fn.call(ths, v, 0, null);
  for(var u of x) {
    var u1 = fn.call(ths, u, ++i, x);
    if(u1===v1) n++;
  }
  return n;
}
/**
 * Gives values that cycle through an iterable.
 * @param {Iterable} x an iterable
 * @param {number?} n number of values (-1 => Inf)
 * @returns {Iterable}
 */
function* cycle(x, n=-1) {
  w: while(true) {
    for(var v of x) {
      if(n--===0) break w;
      yield v;
    }
  }
}
/**
 * Gives values of an array not present in another.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable}
 */
function* difference(x, y, fn=null) {
  var fn = fn||cmp;
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
 * Gives same value.
 * @param {*} v a value
 * @returns {*} v
 */
function id13(v) {
  return v;
}
const id14 = id13;

/**
 * Gives values of an array not present in another.
 * @param {Iterable} x an array
 * @param {Iterable} y another array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Iterable}
 */
function* differenceOn(x, y, fn=null, ths=null) {
  var s = uniques(y, fn, ths);
  var fn = fn||id14, i = -1;
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
 * Gives values of an iterable present in another.
 * @param {Iterable} x an iterable
 * @param {Iterable} y another iterable
 * @param {function?} fn compare function (a, b)
 * @returns {Iterable}
 */
function* intersection(x, y, fn=null) {
  var fn = fn||cmp;
  x: for(var u of x) {
    for(var v of y)
      if(fn(u, v)===0) { yield u; continue x; }
  }
}
/**
 * Gives values of an iterable present in another.
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
 * Compares two values.
 * @param {*} a a value
 * @param {*} b another value
 * @returns {number} a<b: -1, a=b: 0, a>b: 1
 */
function cmp29(a, b) {
  return a<b? -1:(a>b? 1:0);
}
const cmp30 = cmp29;

/**
 * Checks if arrays have no value in common.
 * @param {Iterable} x an array
 * @param {Iterable} y another array
 * @param {function?} fn compare function (a, b)
 * @returns {boolean} true if disjoint
 */
function isDisjoint(x, y, fn=null) {
  var fn = fn||cmp30;
  for(var v of y) {
    for(var u of x)
      if(fn(u, v)===0) return false;
  }
  return true;
}
/**
 * Gets unique set of values.
 * @param {Array} x an array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Set}
 */
function uniques31(x, fn=null, ths=null) {
  if(!fn) return new Set(x);
  var s = new Set(), i = -1;
  for(var v of x)
    s.add(fn.call(ths, v, ++i, x));
  return s;
}
/**
 * Gives same value.
 * @param {*} v a value
 * @returns {*} v
 */
function id32(v) {
  return v;
}
const uniques33 = uniques31;
const id33 = id32;

/**
 * Checks if arrays have no value in common.
 * @param {Iterable} x an array
 * @param {Iterable} y another array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {boolean} true if disjoint
 */
function isDisjointOn(x, y, fn=null, ths=null) {
  var s = uniques33(x, fn, ths);
  var fn = fn||id33, i = -1;
  for(var v of y) {
    var v1 = fn.call(ths, v, ++i, y);
    if(s.has(v1)) return false;
  }
  return true;
}
/**
 * Checks if two iterables are equal.
 * @param {Iterable} x an iterable
 * @param {Iterable} y an iterable
 * @param {function?} fn compare function (a, b)
 * @returns {boolean}
 */
function isEqual(x, y, fn=null) {
  return compare(x, y, fn)===0;
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
 * Compares two values.
 * @param {*} a a value
 * @param {*} b another value
 * @returns {number} a<b: -1, a=b: 0, a>b: 1
 */
function cmp38(a, b) {
  return a<b? -1:(a>b? 1:0);
}
const cmp39 = cmp38;

/**
 * Finds largest value.
 * @param {Iterable} x an array
 * @param {function?} fn compare function (a, b)
 * @returns {*}
 */
function max(x, fn=null) {
  var fn = fn||cmp39, m = x[0];
  for(var v of x)
    if(fn(v, m)>0) m = v;
  return m;
}
/**
 * Gives same value.
 * @param {*} v a value
 * @returns {*} v
 */
function id40(v) {
  return v;
}
const id41 = id40;

/**
 * Finds largest value.
 * @param {Iterable} x an array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {*}
 */
function maxOn(x, fn=null, ths=null) {
  var fn = fn||id41, i = -1;
  var mk = fn.call(ths, x[0], 0, x), mv = x[0];
  for(var v of x) {
    var k = fn.call(ths, v, ++i, x);
    if(k>mk) { mk = k; mv = v; }
  }
  return mv;
}
/**
 * Compares two values.
 * @param {*} a a value
 * @param {*} b another value
 * @returns {number} a<b: -1, a=b: 0, a>b: 1
 */
function cmp42(a, b) {
  return a<b? -1:(a>b? 1:0);
}
const cmp43 = cmp42;

/**
 * Finds smallest value.
 * @param {Iterable} x an array
 * @param {function?} fn compare function (a, b)
 * @returns {*}
 */
function min(x, fn=null) {
  var fn = fn||cmp43, m = x[0];
  for(var v of x)
    if(fn(v, m)<0) m = v;
  return m;
}
/**
 * Gives same value.
 * @param {*} v a value
 * @returns {*} v
 */
function id44(v) {
  return v;
}
const id45 = id44;

/**
 * Finds smallest value.
 * @param {Iterable} x an array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {*}
 */
function minOn(x, fn=null, ths=null) {
  var fn = fn||id45, i = -1;
  var mk = fn.call(ths, x[0], 0, x), mv = x[0];
  for(var v of x) {
    var k = fn.call(ths, v, ++i, x);
    if(k<mk) { mk = k; mv = v; }
  }
  return mv;
}
/**
 * Breaks array into values, by test.
 * @param {Iterable} x an array
 * @param {function} fn test function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Array<Array>} [[...satisfies], [...doesnt]]
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
 * Gives same value.
 * @param {*} v a value
 * @returns {*} v
 */
function id47(v) {
  return v;
}
const id48 = id47;

/**
 * Breaks array into values, by map.
 * @param {Iterable} x an array
 * @param {function} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Map<any, Array>} {key => [...values]}
 */
function partitionOn(x, fn=null, ths=null) {
  var fn = fn||id48;
  var m = new Map(), i = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    if(!m.has(v1)) m.set(v1, []);
    m.get(v1).push(v);
  }
  return m;
}
/**
 * Compares two values.
 * @param {*} a a value
 * @param {*} b another value
 * @returns {number} a<b: -1, a=b: 0, a>b: 1
 */
function cmp49(a, b) {
  return a<b? -1:(a>b? 1:0);
}
const cmp50 = cmp49;

/**
 * Finds smallest and largest values.
 * @param {Iterable} x an array
 * @param {function?} fn compare function (a, b)
 * @returns {Array} [min, max]
 */
function range(x, fn=null) {
  var fn = fn||cmp50, m = x[0], n = m;
  for(var v of x) {
    if(fn(v, m)<0) m = v;
    if(fn(v, n)>0) n = v;
  }
  return [m, n];
}
/**
 * Gives same value.
 * @param {*} v a value
 * @returns {*} v
 */
function id51(v) {
  return v;
}
const id52 = id51;

/**
 * Finds smallest and largest values.
 * @param {Iterable} x an array
 * @param {function?} fn map function (v, i, x)
 * @param {object?} ths this argument
 * @returns {Array} [min, max]
 */
function rangeOn(x, fn=null, ths=null) {
  var fn = fn||id52, i = -1;
  var mk = fn.call(ths, x[0], 0, x), mv = x[0];
  var nk = mk, nv = mv;
  for(var v of x) {
    var k = fn.call(ths, v, ++i, x);
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
    if(i<0 && al>2) acc = v; 
    else acc = fn(acc, v, ++i, x);
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
  for(; n!==0; n--)
    yield* x;
}
/**
 * Counts the number of values.
 * @param {Iterable} x an iterable
 * @returns {number}
 */
function size(x) {
  var i = -1;
  for(var v of x)
    ++i;
  return i+1;
}
/**
 * Gets part of an iterable.
 * @param {Iterable} x an iterable
 * @param {number?} i begin index (0)
 * @param {number?} I end index (end)
 */
function* slice(x, i=0, I=Number.MAX_SAFE_INTEGER) {
  var j = -1;
  for(var v of x) {
    if(++j>=I) break;
    if(j>=i) yield v;
  }
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
    var rs = is.map(i => i.next());
    if(rs.every(r => r.done)) break;
    var vs = rs.map(r => r.value);
    yield fn.apply(ths, vs);
  }
}
exports.chunk = chunk;
exports.compare = compare;
exports.concat = concat;
exports.count = count;
exports.countAllOn = countAllOn;
exports.countOn = countOn;
exports.cycle = cycle;
exports.difference = difference;
exports.differenceOn = differenceOn;
exports.every = every;
exports.filter = filter;
exports.find = find;
exports.findRight = findRight;
exports.flat = flat;
exports.forEach = forEach;
exports.group = group;
exports.groupOn = groupOn;
exports.head = head;
exports.init = init;
exports.intersection = intersection;
exports.intersectionOn = intersectionOn;
exports.is = is;
exports.isDisjoint = isDisjoint;
exports.isDisjointOn = isDisjointOn;
exports.isEqual = isEqual;
exports.isList = isList;
exports.join = join;
exports.last = last;
exports.map = map;
exports.max = max;
exports.maxOn = maxOn;
exports.min = min;
exports.minOn = minOn;
exports.partition = partition;
exports.partitionOn = partitionOn;
exports.range = range;
exports.rangeOn = rangeOn;
exports.reduce = reduce;
exports.repeat = repeat;
exports.size = size;
exports.slice = slice;
exports.some = some;
exports.split = split;
exports.tail = tail;
exports.zip = zip;
