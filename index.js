/**
 * Breaks iterable into chunks of given size.
 * @param {Iterable} x an iterable
 * @param {number?} n chunk size
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
 * Gives values that cycle through an iterable.
 * @param {Iterable} x an iterable
 * @param {number} n number of values
 * @returns {Iterable}
 */
function* cycle(x, n) {
  while(true) for(var v of x) {
    if(--n<0) break;
    yield v;
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
 * Checks if value is a list (!string).
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
 * @param {number} n times
 * @returns {Iterable}
 */
function* repeat(x, n) {
  for(; n>=0; n--)
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
exports.cycle = cycle;
exports.every = every;
exports.filter = filter;
exports.find = find;
exports.findRight = findRight;
exports.flat = flat;
exports.forEach = forEach;
exports.group = group;
exports.head = head;
exports.init = require('./init');
exports.isEqual = isEqual;
exports.is = is;
exports.isList = isList;
exports.join = join;
exports.last = last;
exports.map = map;
exports.reduce = reduce;
exports.repeat = require('./repeat');
exports.size = size;
exports.some = some;
exports.split = split;
exports.tail = tail;
exports.zip = zip;
