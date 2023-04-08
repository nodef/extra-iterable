import {
  is,
  isList,
  isIterator,
  iterator,
  keys,
  values,
  entries,
  from,
  fromInvocation,
  fromApplication,
  fromRange,
  toInvokable,
  isOnce,
  isMany,
  toMany,
  isEmpty,
  length,
  size,
  compare,
  isEqual,
  index,
  indexRange,
  get,
  getAll,
  getPath,
  hasPath,
  set,
  swap,
  remove,
  count,
  countAs,
  min,
  max,
  range,
  minEntry,
  maxEntry,
  rangeEntries,
  slice,
  head,
  tail,
  init,
  last,
  left,
  right,
  middle,
  take,
  takeRight,
  takeWhile,
  takeWhileRight,
  drop,
  dropRight,
  dropWhile,
  dropWhileRight,
  includes,
  indexOf,
  lastIndexOf,
  find,
  findRight,
  findAll,
  scanWhile,
  scanWhileRight,
  scanUntil,
  scanUntilRight,
  search,
  searchRight,
  searchAll,
  searchValue,
  searchValueRight,
  searchValueAll,
  searchInfix,
  searchInfixRight,
  searchInfixAll,
  searchSubsequence,
  hasValue,
  hasPrefix,
  hasSuffix,
  hasInfix,
  hasSubsequence,
  forEach,
  some,
  every,
  map,
  reduce,
  filter,
  filterAt,
  reject,
  rejectAt,
  accumulate,
  flat,
  flatMap,
  zip,
  fill,
  push,
  pop,
  shift,
  unshift,
  copy,
  copyWithin,
  moveWithin,
  splice,
  split,
  splitAt,
  cut,
  cutRight,
  cutAt,
  cutAtRight,
  group,
  partition,
  partitionAs,
  chunk,
  cycle,
  repeat,
  reverse,
  rotate,
  intermix,
  interleave,
  interpolate,
  intersperse,
  concat,
  merge,
  join,
  isUnique,
  isDisjoint,
  unique,
  union,
  intersection,
  difference,
  symmetricDifference,
  cartesianProduct,
} from "../src";
import * as xiterable from "../src";




test("example", () => {
  var x = [2, 4, 6, 8];
  var v = xiterable.get(x, 1);
  expect(v).toBe(4);
  // → 4

  var x = [1, 2, 3, 4];
  var a = [...xiterable.swap(x, 0, 1)];
  expect(a).toStrictEqual([2, 1, 3, 4]);
  // → [2, 1, 3, 4]

  var x = [1, 2, 3];
  var a = [...xiterable.cycle(x, 0, 4)];
  expect(a).toStrictEqual([1, 2, 3, 1]);
  // → [1, 2, 3, 1]

  var x = [1, 2, 3, 4];
  var v = xiterable.reduce(x, (acc, v) => acc+v, 0);
  expect(v).toBe(10);
  // → 10
});




// ABOUT
// -----

test("is", () => {
  var a = is([1, 2]);
  expect(a).toBe(true);
  var a = is("ab");
  expect(a).toBe(true);
  var a = is(1);
  expect(a).toBe(false);
});


test("isList", () => {
  var a = isList([1, 2]);
  expect(a).toBe(true);
  var a = isList("ab");
  expect(a).toBe(false);
});


test("isIterator", () => {
  var x = [1, 2];
  var a = isIterator(x);
  expect(a).toBe(false);
  var a = isIterator(x[Symbol.iterator]());
  expect(a).toBe(true);
  var a = isIterator(x.values());
  expect(a).toBe(true);
});


test("iterator", () => {
  var a = iterator([1, 2]);
  expect(a.next().value).toBe(1);
  var a = iterator(new Set([1, 2]));
  expect(a.next().value).toBe(1);
});


test("keys", () => {
  var x = [1, 2, 3];
  var a = [...keys(x)];
  expect(a).toStrictEqual([0, 1, 2]);
});


test("values", () => {
  var x = [1, 2, 3];
  var a = [...values(x)];
  expect(a).toStrictEqual([1, 2, 3]);
});


test("entries", () => {
  var x = ["A", "B", "C"];
  var a = [...entries(x)];
  expect(a).toStrictEqual([[0, "A"], [1, "B"], [2, "C"]]);
});




// GENERATE
// --------

test("from", () => {
  var x  = [1, 2].values();
  var xi = x[Symbol.iterator]();
  var a  = [...from(xi)];
  expect(a).toStrictEqual([1, 2]);
});


test("fromInvocation", () => {
  var id = 0;
  function getId() {
    return ++id;
  }
  var x = fromInvocation(getId);
  var a = [...take(x, 4)];
  expect(a).toStrictEqual([1, 2, 3, 4]);
});


test("fromApplication", () => {
  var a = [...take(fromApplication(v => v+2, 2), 4)];
  expect(a).toStrictEqual([2, 4, 6, 8]);
  var a = [...take(fromApplication(v => v*2, 2), 4)];
  expect(a).toStrictEqual([2, 4, 8, 16]);
});


test("fromRange", () => {
  var a = [...fromRange(0, 4)];
  expect(a).toStrictEqual([0, 1, 2, 3]);
  var a = [...fromRange(0, 8, 2)];
  expect(a).toStrictEqual([0, 2, 4, 6]);
});




// BEHAVIOR
// --------

test("toInvokable", () => {
  var x = [1, 2, 3, 4], s = [0];
  var f = toInvokable(x);
  for (var i=0; i<6; i++)
    s.push(f());
  expect(s).toStrictEqual([0, 1, 2, 3, 4, undefined, undefined]);
});


test("isOnce", () => {
  var x = [1, 2, 3, 4];
  var a = isOnce(x);
  expect(a).toStrictEqual(false);
  var a = isOnce(x.values());
  expect(a).toStrictEqual(true);
});


test("isMany", () => {
  var x = [1, 2, 3, 4];
  var a = isMany(x);
  expect(a).toBe(true);
  var a = isMany(x.values());
  expect(a).toBe(false);
});


test("toMany", () => {
  var w = [1, 2, 3].values(), s = [0];
  var a = [...w, ...w];
  // ("w" cant be iterated multiple times)
  expect(a).toStrictEqual([1, 2, 3]);
  function* from1ToN(n) {
    for (var i=1; i<=n; i++) {
      s.push(i);
      yield i;
    }
  }
  var x = from1ToN(3);
  var y = toMany(x);
  expect(s).toStrictEqual([0]);
  var a = [...y];
  expect(a).toStrictEqual([1, 2, 3]);
  expect(s).toStrictEqual([0, 1, 2, 3]);
  var a = [...y];
  expect(a).toStrictEqual([1, 2, 3]);
  expect(s).toStrictEqual([0, 1, 2, 3]);
  var s = [0];
  var x = from1ToN(3);
  var y = toMany(x, true);
  expect(s).toStrictEqual([0, 1, 2, 3]);
  var a = [...y];
  expect(a).toStrictEqual([1, 2, 3]);
  expect(s).toStrictEqual([0, 1, 2, 3]);
  var a = [...y];
  expect(a).toStrictEqual([1, 2, 3]);
  expect(s).toStrictEqual([0, 1, 2, 3]);
});




// LENGTH
// ------

test("isEmpty", () => {
  var x = [1, 2, 3];
  var a = isEmpty(x);
  expect(a).toBe(false);

  var y = [];
  var a = isEmpty(y);
  expect(a).toBe(true);
});


test("length", () => {
  var x = [2, 4, 6, 8];
  var a = length(x);
  expect(a).toBe(4);
  var a = length(x, 1);
  expect(a).toBe(3);
  var a = length(x, 1, 3);
  expect(a).toBe(2);
});


test("size", () => {
  var x = [2, 4, 6, 8];
  var a = size(x);
  expect(a).toBe(4);
  var a = size(x, 1);
  expect(a).toBe(3);
  var a = size(x, 1, 3);
  expect(a).toBe(2);
});


test("index", () => {
  var x = [2, 4, 6, 8];
  var a = index(x, 1);
  expect(a).toBe(1);
  var a = index(x, -1);
  expect(a).toBe(3);
  var a = index(x, -10);
  expect(a).toBe(0);
});


test("indexRange", () => {
  var x = [2, 4, 6, 8];
  var a = indexRange(x, 1);
  expect(a).toStrictEqual([1, 4]);
  var a = indexRange(x, 1, -1);
  expect(a).toStrictEqual([1, 3]);
  var a = indexRange(x, 1, -10);
  expect(a).toStrictEqual([1, 1]);
});




// COMPARE
// -------

test("compare", () => {
  var x = [1, 2];
  var y = [1, 2, 3];
  var a = compare(x, y);
  expect(a).toBe(-1);
  var y = [1, 2];
  var a = compare(x, y);
  expect(a).toBe(0);
  var y = [1, -2];
  var a = compare(x, y);
  expect(a).toBe(1);
  var a = compare(x, y, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(0);
  var a = compare(x, y, null, v => Math.abs(v));
  expect(a).toBe(0);
});


test("isEqual", () => {
  var x = [1, 2];
  var a = isEqual(x, [1, 2]);
  expect(a).toBe(true);
  var a = isEqual(x, [11, 12]);
  expect(a).toBe(false);
  var a = isEqual(x, [11, 12], (a, b) => (a % 10) - (b % 10));
  expect(a).toBe(true);
  var a = isEqual(x, [11, 12], null, v => v % 10);
  expect(a).toBe(true);
});




// GET/SET
// -------

test("get", () => {
  var x = [2, 4, 6, 8];
  var a = get(x, 1);
  expect(a).toBe(4);
  var a = get(x, 3);
  expect(a).toBe(8);
});


test("getAll", () => {
  var x = [2, 4, 6, 8];
  var a = [...getAll(x, [1, 2])];
  expect(a).toStrictEqual([4, 6]);
  var a = [...getAll(x, [1, 3])];
  expect(a).toStrictEqual([4, 8]);
});


test("getPath", () => {
  var x = [[2, 4], 6, 8];
  var a = getPath(x, [1]);
  expect(a).toBe(6);
  var a = getPath(x, [0, 1]);
  expect(a).toBe(4);
  var a = getPath(x, [0, 1, 2]);
  expect(a).toBeUndefined();
});


test("hasPath", () => {
  var x = [[2, 4], 6, 8];
  var a = hasPath(x, [1]);
  expect(a).toBe(true);
  var a = hasPath(x, [0, 1]);
  expect(a).toBe(true);
  var a = hasPath(x, [0, 1, 2]);
  expect(a).toBe(false);
});


test("set", () => {
  var x = [2, 4, 6, 8];
  var a = [...set(x, 1, 40)];
  expect(a).toStrictEqual([2, 40, 6, 8]);
  var a = [...set(x, 3, 80)];
  expect(a).toStrictEqual([2, 4, 6, 80]);
});


test("swap", () => {
  var x = [1, 2, 3, 4];
  var a = [...swap(x, 0, 1)];
  expect(a).toStrictEqual([2, 1, 3, 4]);
  var a = [...swap(x, 0, 3)];
  expect(a).toStrictEqual([4, 2, 3, 1]);
});


test("remove", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...remove(x, 2)];
  expect(a).toStrictEqual([1, 2, 4, 5]);
});




// PROPERTY
// --------

test("count", () => {
  var x = [1, 1, 2, 2, 4];
  var a = count(x, v => v % 2===1);
  expect(a).toBe(2);
  var a = count(x, v => v % 2===0);
  expect(a).toBe(3);
});


test("countAs", () => {
  var x = [1, 1, 2, 2, 4];
  var a = countAs(x);
  expect(a).toStrictEqual(new Map([[1, 2], [2, 2], [4, 1]]));
  var x = [1, 2, 3, 4];
  var a = countAs(x, v => v % 2);
  expect(a).toStrictEqual(new Map([[1, 2], [0, 2]]));
});


test("min", () => {
  var x = [1, 2, -3, -4];
  var a = min(x);
  expect(a).toBe(-4);
  var a = min(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(1);
  var a = min(x, null, v => Math.abs(v));
  expect(a).toBe(1);
});


test("max", () => {
  var x = [1, 2, -3, -4];
  var a = max(x);
  expect(a).toBe(2);
  var a = max(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(-4);
  var a = max(x, null, v => Math.abs(v));
  expect(a).toBe(-4);
});


test("range", () => {
  var x = [1, 2, -3, -4];
  var a = range(x);
  expect(a).toStrictEqual([-4, 2]);
  var a = range(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual([1, -4]);
  var a = range(x, null, v => Math.abs(v));
  expect(a).toStrictEqual([1, -4]);
});


test("minEntry", () => {
  var x = [1, 2, -3, -4];
  var a = minEntry(x);
  expect(a).toStrictEqual([3, -4]);
  var a = minEntry(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual([0, 1]);
  var a = minEntry(x, null, v => Math.abs(v));
  expect(a).toStrictEqual([0, 1]);
});


test("maxEntry", () => {
  var x = [1, 2, -3, -4];
  var a = maxEntry(x);
  expect(a).toStrictEqual([1, 2]);
  var a = maxEntry(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual([3, -4]);
  var a = maxEntry(x, null, v => Math.abs(v));
  expect(a).toStrictEqual([3, -4]);
});


test("rangeEntries", () => {
  var x = [1, 2, -3, -4];
  var a = rangeEntries(x);
  expect(a).toStrictEqual([[3, -4], [1, 2]]);
  var a = rangeEntries(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual([[0, 1], [3, -4]]);
  var a = rangeEntries(x, null, v => Math.abs(v));
  expect(a).toStrictEqual([[0, 1], [3, -4]]);
});




// PART
// ----

test("slice", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...slice(x, 2)];
  expect(a).toStrictEqual([3, 4, 5]);
  var a = [...slice(x, 2, 4)];
  expect(a).toStrictEqual([3, 4]);
  var a = [...slice(x, -3, -1)];
  expect(a).toStrictEqual([3, 4]);
});


test("head", () => {
  var a = head([1, 2, 3]);
  expect(a).toBe(1);
  var a = head([], -1);
  expect(a).toBe(-1);
});


test("tail", () => {
  var x = [1, 2, 3];
  var a = [...tail(x)];
  expect(a).toStrictEqual([2, 3]);
  var x = [1];
  var a = [...tail(x)];
  expect(a).toStrictEqual([]);
});


test("init", () => {
  var a = [...init([1, 2, 3])];
  expect(a).toStrictEqual([1, 2]);
  var a = [...init([1])];
  expect(a).toStrictEqual([]);
});


test("last", () => {
  var a = last([1, 2, 3]);
  expect(a).toBe(3);
  var a = last([], -1);
  expect(a).toBe(-1);
});


test("left", () => {
  var x = [1, 2, 3];
  var a = [...left(x, 1)];
  expect(a).toStrictEqual([1]);
  var a = [...left(x, 2)];
  expect(a).toStrictEqual([1, 2]);
});


test("right", () => {
  var x = [1, 2, 3];
  var a = [...right(x, 1)];
  expect(a).toStrictEqual([3]);
  var a = [...right(x, 2)];
  expect(a).toStrictEqual([2, 3]);
});


test("middle", () => {
  var x = [1, 2, 3];
  var a = [...middle(x, 1, 1)];
  expect(a).toStrictEqual([2]);
  var a = [...middle(x, 1, 2)];
  expect(a).toStrictEqual([2, 3]);
});


test("take", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...take(x, 2)];
  expect(a).toStrictEqual([1, 2]);
  var a = [...take(x, 3)];
  expect(a).toStrictEqual([1, 2, 3]);
});


test("takeRight", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...takeRight(x, 2)];
  expect(a).toStrictEqual([4, 5]);
  var a = [...takeRight(x, 3)];
  expect(a).toStrictEqual([3, 4, 5]);
});


test("takeWhile", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...takeWhile(x, v => v < 3)];
  expect(a).toStrictEqual([1, 2]);
  var a = [...takeWhile(x, v => v < 4)];
  expect(a).toStrictEqual([1, 2, 3]);
});


test("takeWhileRight", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...takeWhileRight(x, v => v >= 3)];
  expect(a).toStrictEqual([3, 4, 5]);
  var a = [...takeWhileRight(x, v => v >= 4)];
  expect(a).toStrictEqual([4, 5]);
});


test("drop", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...drop(x, 2)];
  expect(a).toStrictEqual([3, 4, 5]);
  var a = [...drop(x, 3)];
  expect(a).toStrictEqual([4, 5]);
});


test("dropRight", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...dropRight(x, 2)];
  expect(a).toStrictEqual([1, 2, 3]);
  var a = [...dropRight(x, 3)];
  expect(a).toStrictEqual([1, 2]);
});


test("dropWhile", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...dropWhile(x, v => v < 3)];
  expect(a).toStrictEqual([3, 4, 5]);
  var a = [...dropWhile(x, v => v < 4)];
  expect(a).toStrictEqual([4, 5]);
});


test("dropWhileRight", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...dropWhileRight(x, v => v >= 3)];
  expect(a).toStrictEqual([1, 2]);
  var a = [...dropWhileRight(x, v => v >= 4)];
  expect(a).toStrictEqual([1, 2, 3]);
});




// FIND
// ----

test("includes", () => {
  var x = [1, 2, -3];
  var a = includes(x, 3);
  expect(a).toBe(false);
  var a = includes(x, -3);
  expect(a).toBe(true);
});


test("indexOf", () => {
  var x = [1, 2, 3, 2, 5];
  var a = indexOf(x, 2);
  expect(a).toBe(1);
  var x = [1, 2, 3, 2, 5];
  var a = indexOf(x, 2, 2);
  expect(a).toBe(3);
});


test("lastIndexOf", () => {
  var x = [1, 2, 3, 2, 5];
  var a = lastIndexOf(x, 2);
  expect(a).toBe(3);
  var x = [1, 2, 3, 2, 5];
  var a = lastIndexOf(x, 2, 2);
  expect(a).toBe(1);
});


test("find", () => {
  var x = [1, 2, 3, 4, 5];
  var a = find(x, v => v % 2===0);
  expect(a).toBe(2);
  var a = find(x, v => v % 2===1);
  expect(a).toBe(1);
});


test("findRight", () => {
  var x = [1, 2, 3, 4, 5];
  var a = findRight(x, v => v % 2===0);
  expect(a).toStrictEqual(4);
  var a = findRight(x, v => v % 2===1);
  expect(a).toStrictEqual(5);
});


test("findAll", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...findAll(x, v => v % 2===1)];
  expect(a).toStrictEqual([1, 3, 5]);
  var a = [...findAll(x, v => v % 2===0)];
  expect(a).toStrictEqual([2, 4]);
});


test("scanWhile", () => {
  var x = [1, 1, 2, 2, 3, 3, 4, 4];
  var a = scanWhile(x, v => v % 2!==0);
  expect(a).toBe(2);
  var a = scanWhile(x, v => v % 3!==0);
  expect(a).toBe(4);
  var a = scanWhile(x, v => v % 6!==0);
  expect(a).toBe(8);
});


test("scanWhileRight", () => {
  var x = [1, 1, 2, 2, 3, 3, 4, 4];
  var a = scanWhileRight(x, v => v % 3!==0);
  expect(a).toBe(6);
  var a = scanWhileRight(x, v => v % 2!==0);
  expect(a).toBe(8);
  var a = scanWhileRight(x, v => v % 6!==0);
  expect(a).toBe(0);
});


test("scanUntil", () => {
  var x = [1, 1, 2, 2, 3, 3, 4, 4];
  var a = scanUntil(x, v => v % 2===0);
  expect(a).toBe(2);
  var a = scanUntil(x, v => v % 3===0);
  expect(a).toBe(4);
  var a = scanUntil(x, v => v % 6===0);
  expect(a).toBe(8);
});


test("scanUntilRight", () => {
  var x = [1, 1, 2, 2, 3, 3, 4, 4];
  var a = scanUntilRight(x, v => v % 3===0);
  expect(a).toBe(6);
  var a = scanUntilRight(x, v => v % 2===0);
  expect(a).toBe(8);
  var a = scanUntilRight(x, v => v % 6===0);
  expect(a).toBe(0);
});


test("search", () => {
  var x = [1, 2, 3, 4, 5];
  var a = search(x, v => v % 2===0);
  expect(a).toBe(1);
  var a = search(x, v => v % 2===1);
  expect(a).toBe(0);
});


test("searchRight", () => {
  var x = [1, 2, 3, 4, 5];
  var a = searchRight(x, v => v % 2===0);
  expect(a).toBe(3);
  var a = searchRight(x, v => v % 2===1);
  expect(a).toBe(4);
});


test("searchAll", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...searchAll(x, v => v % 2===0)];
  expect(a).toStrictEqual([1, 3]);
  var a = [...searchAll(x, v => v % 2===1)];
  expect(a).toStrictEqual([0, 2, 4]);
});


test("searchValue", () => {
  var x = [1, 2, 3, 2, 5];
  var a = searchValue(x, 2);
  expect(a).toBe(1);
  var x = [1, -2, 3, 2, 5];
  var a = searchValue(x, 2, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(1);
  var x = [1, -2, 3, 2, 5];
  var a = searchValue(x, 2, null, v => Math.abs(v));
  expect(a).toBe(1);
});


test("searchValueRight", () => {
  var x = [1, 2, 3, 2, 5];
  var a = searchValueRight(x, 2);
  expect(a).toStrictEqual(3);
  var x = [1, 2, 3, -2, 5];
  var a = searchValueRight(x, 2, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toStrictEqual(3);
  var a = searchValueRight(x, 2, null, v => Math.abs(v));
  expect(a).toStrictEqual(3);
});


test("searchValueAll", () => {
  var x = [1, 2, 3, 2, 5];
  var a = [...searchValueAll(x, 2)];
  expect(a).toStrictEqual([1, 3]);
  var x = [1, 2, 3, -2, 5];
  var a = [...searchValueAll(x, 2, (a, b) => Math.abs(a) - Math.abs(b))];
  expect(a).toStrictEqual([1, 3]);
  var a = [...searchValueAll(x, 2, null, v => Math.abs(v))];
  expect(a).toStrictEqual([1, 3]);
});


test("searchInfix", () => {
  var x = [1, 2, 3, 4];
  var y = [2, 3];
  var a = searchInfix(x, y);
  expect(a).toBe(1);
  var y = [-2, -3];
  var a = searchInfix(x, y);
  expect(a).toBe(-1);
  var a = searchInfix(x, y, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(1);
  var a = searchInfix(x, y, null, v => Math.abs(v));
  expect(a).toBe(1);
});


test("searchInfixRight", () => {
  var x = [1, 2, 3, 4];
  var y = [2, 3];
  var a = searchInfixRight(x, y);
  expect(a).toBe(1);
  var y = [-2, -3];
  var a = searchInfixRight(x, y);
  expect(a).toBe(-1);
  var a = searchInfixRight(x, y, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(1);
  var a = searchInfixRight(x, y, null, v => Math.abs(v));
  expect(a).toBe(1);
});


test("searchInfixAll", () => {
  var x = [1, 2, 3, 4, -2, -3];
  var y = [2, 3];
  var a = [...searchInfixAll(x, y)];
  expect(a).toStrictEqual([1]);
  var y = [-2, -3];
  var a = [...searchInfixAll(x, y)];
  expect(a).toStrictEqual([4]);
  var a = [...searchInfixAll(x, y, (a, b) => Math.abs(a) - Math.abs(b))];
  expect(a).toStrictEqual([1, 4]);
  var a = [...searchInfixAll(x, y, null, v => Math.abs(v))];
  expect(a).toStrictEqual([1, 4]);
});


test("searchSubsequence", () => {
  var x = [1, 2, 3, 4];
  var a = searchSubsequence(x, [2, 4]);
  expect(a).toBe(1);
  var a = searchSubsequence(x, [-2, -4]);
  expect(a).toBe(-1);
  var a = searchSubsequence(x, [-2, -4], (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(1);
  var a = searchSubsequence(x, [-2, -4], null, v => Math.abs(v));
  expect(a).toBe(1);
});


test("hasValue", () => {
  var x = [1, 2, -3];
  var a = hasValue(x, 3);
  expect(a).toBe(false);
  var a = hasValue(x, 3, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(true);
  var a = hasValue(x, 3, null, v => Math.abs(v));
  expect(a).toBe(true);
});


test("hasPrefix", () => {
  var x = [1, 2, 3, 4];
  var a = hasPrefix(x, [1, 2]);
  expect(a).toBe(true);
  var a = hasPrefix(x, [-1, -2]);
  expect(a).toBe(false);
  var a = hasPrefix(x, [-1, -2], (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(true);
  var a = hasPrefix(x, [-1, -2], null, v => Math.abs(v));
  expect(a).toBe(true);
});


test("hasSuffix", () => {
  var x = [1, 2, 3, 4];
  var a = hasSuffix(x, [3, 4]);
  expect(a).toBe(true);
  var a = hasSuffix(x, [-3, -4]);
  expect(a).toBe(false);
  var a = hasSuffix(x, [-3, -4], (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(true);
  var a = hasSuffix(x, [-3, -4], null, v => Math.abs(v));
  expect(a).toBe(true);
});


test("hasInfix", () => {
  var x = [1, 2, 3, 4];
  var a = hasInfix(x, [2, 3]);
  expect(a).toBe(true);
  var a = hasInfix(x, [-2, -3]);
  expect(a).toBe(false);
  var a = hasInfix(x, [-2, -3], (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(true);
  var a = hasInfix(x, [-2, -3], null, v => Math.abs(v));
  expect(a).toBe(true);
});


test("hasSubsequence", () => {
  var x = [1, 2, 3, 4];
  var a = hasSubsequence(x, [2, 4]);
  expect(a).toBe(true);
  var a = hasSubsequence(x, [-2, -4]);
  expect(a).toBe(false);
  var a = hasSubsequence(x, [-2, -4], (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(true);
  var a = hasSubsequence(x, [-2, -4], null, v => Math.abs(v));
  expect(a).toBe(true);
});




// FUNCTIONAL
// ----------

test("forEach", () => {
  var sum = 0;
  var x = [1, 2, -3, -4];
  forEach(x, v => sum += v);
  expect(sum).toBe(-4);
});


test("some", () => {
  var x = [1, 2, -3, -4];
  var a = some(x, v => v > 10);
  expect(a).toBe(false);
  var a = some(x, v => v < 0);
  expect(a).toBe(true);
});


test("every", () => {
  var x = [1, 2, -3, -4];
  var a = every(x, v => v > 0);
  expect(a).toBe(false);
  var a = every(x, v => v > -10);
  expect(a).toBe(true);
});


test("map", () => {
  var x = [1, 2, 3, 4];
  var a = [...map(x, v => v * 2)];
  expect(a).toStrictEqual([2, 4, 6, 8]);
});


test("reduce", () => {
  var x = [1, 2, 3, 4];
  var a = reduce(x, (acc, v) => acc+v, 0);
  expect(a).toBe(10);
  var a = reduce(x, (acc, v) => acc+v, 100);
  expect(a).toBe(110);
});


test("filter", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...filter(x, v => v % 2===1)];
  expect(a).toStrictEqual([1, 3, 5]);
  var a = [...filter(x, v => v % 2===0)];
  expect(a).toStrictEqual([2, 4]);
});


test("filterAt", () => {
  var x = [2, 4, 6, 8];
  var a = [...filterAt(x, [1, 2])];
  expect(a).toStrictEqual([4, 6]);
  var a = [...filterAt(x, [1, 3])];
  expect(a).toStrictEqual([4, 8]);
});


test("reject", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...reject(x, v => v % 2===1)];
  expect(a).toStrictEqual([2, 4]);
  var a = [...reject(x, v => v % 2===0)];
  expect(a).toStrictEqual([1, 3, 5]);
});


test("rejectAt", () => {
  var x = [2, 4, 6, 8];
  var a = [...rejectAt(x, [1, 2])];
  expect(a).toStrictEqual([2, 8]);
  var a = [...rejectAt(x, [1, 3])];
  expect(a).toStrictEqual([2, 6]);
});


test("accumulate", () => {
  var x = [1, 2, 3, 4];
  var a = [...accumulate(x, (acc, v) => acc+v)];
  expect(a).toStrictEqual([1, 3, 6, 10]);
  var a = [...accumulate(x, (acc, v) => acc+v, 100)];
  expect(a).toStrictEqual([101, 103, 106, 110]);
});


test("flat", () => {
  var x = [[1, 2], [3, [4, [5]]]];
  var a = [...flat(x)];
  expect(a).toStrictEqual([1, 2, 3, 4, 5]);
  var a = [...flat(x, 1)];
  expect(a).toStrictEqual([1, 2, 3, [4, [5]]]);
  var a = [...flat(x, 2)];
  expect(a).toStrictEqual([1, 2, 3, 4, [5]]);
});


test("flatMap", () => {
  var x = [[1, 2], [3, [4, [5]]]];
  var a = [...flatMap(x)];
  expect(a).toStrictEqual([1, 2, 3, [4, [5]]]);
  var a = [...flatMap(x, v => flat(v, 1))];
  expect(a).toStrictEqual([1, 2, 3, 4, [5]]);
  var a = [...flatMap(x, v => flat(v))];
  expect(a).toStrictEqual([1, 2, 3, 4, 5]);
});


test("zip", () => {
  var x = [1, 2, 3];
  var y = [4, 5];
  var a = [...zip([x, y])];
  expect(a).toStrictEqual([[1, 4], [2, 5]]);  // (shortest)
  var b = [...zip([x, y], ([a, b]) => a + b)];
  expect(b).toStrictEqual([5, 7]);
  var a = [...zip([x, y], null, some)];
  expect(a).toStrictEqual([[1, 4], [2, 5]]);  // (shortest)
  var a = [...zip([x, y], null, every, 0)];
  expect(a).toStrictEqual([[1, 4], [2, 5], [3, 0]]);  // (longest)
  var a = [...zip([x, y], null, head, 0)];
  expect(a).toStrictEqual([[1, 4], [2, 5], [3, 0]]);  // (first)
});




// MANIPULATION
// ------------

test("fill", () => {
  var x = [1, 2, 3, 4];
  var a = [...fill(x, 2)];
  expect(a).toStrictEqual([2, 2, 2, 2]);
  var a = [...fill(x, 2, 1)];
  expect(a).toStrictEqual([1, 2, 2, 2]);
  var a = [...fill(x, 2, 1, 3)];
  expect(a).toStrictEqual([1, 2, 2, 4]);
});


test("push", () => {
  var x = [1, 2];
  var a = [...push(x, 3)];
  expect(a).toStrictEqual([1, 2, 3]);
  var a = [...push(x, 3, 4)];
  expect(a).toStrictEqual([1, 2, 3, 4]);
});


test("pop", () => {
  var x = [1, 2, 3];
  var a = [...pop(x)];
  expect(a).toStrictEqual([1, 2]);
  var x = [1, 2, 3, 4];
  var a = [...pop(x)];
  expect(a).toStrictEqual([1, 2, 3]);
});


test("shift", () => {
  var x = [1, 2, 3];
  var a = [...shift(x)];
  expect(a).toStrictEqual([2, 3]);
  var x = [1, 2, 3, 4];
  var a = [...shift(x)];
  expect(a).toStrictEqual([2, 3, 4]);
});


test("unshift", () => {
  var x = [3, 4];
  var a = [...unshift(x, 2)];
  expect(a).toStrictEqual([2, 3, 4]);
  var a = [...unshift(x, 1, 2)];
  expect(a).toStrictEqual([1, 2, 3, 4]);
});


test("copy", () => {
  var x = [1, 2, 3, 4, 5];
  var y = [10, 20, 30];
  var a = [...copy(x, y)];
  expect(a).toStrictEqual([10, 20, 30, 4, 5]);
  var a = [...copy(x, y, 1)];
  expect(a).toStrictEqual([1, 10, 20, 30, 5]);
  var a = [...copy(x, y, 1, 1)];
  expect(a).toStrictEqual([1, 20, 30, 4, 5]);
  var a = [...copy(x, y, 1, 1, 2)];
  expect(a).toStrictEqual([1, 20, 3, 4, 5]);
});


test("copyWithin", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...copyWithin(x, 3)];
  expect(a).toStrictEqual([1, 2, 3, 1, 2]);
  var a = [...copyWithin(x, 3, 1)];
  expect(a).toStrictEqual([1, 2, 3, 2, 3]);
  var a = [...copyWithin(x, 3, 1, 2)];
  expect(a).toStrictEqual([1, 2, 3, 2, 5]);
});


test("moveWithin", () => {
  var x = [1, 2, 3, 4, 5, 6];
  var a = [...moveWithin(x, 0, 1, 3)];
  expect(a).toStrictEqual([2, 3, 1, 4, 5, 6]);  // (2,3 to left)
  var a = [...moveWithin(x, 6, 3, 5)];
  expect(a).toStrictEqual([1, 2, 3, 6, 4, 5]);  // (4,5 to right)
});


test("splice", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...splice(x, 2)];
  expect(a).toStrictEqual([1, 2]);
  var a = [...splice(x, 2, 2)];
  expect(a).toStrictEqual([1, 2, 5]);
  var a = [...splice(x, 2, 2, 30, 40)];
  expect(a).toStrictEqual([1, 2, 30, 40, 5]);
});


test("split", () => {
  var x = [1, 2, 2, 3, 5, 4, 4, 7];
  var a = [...split(x, v => v % 2 === 0)];
  expect(a).toStrictEqual([[1], [3, 5], [7]]);
  var x = [2, 4, 5, 6, 8];
  var a = [...split(x, v => v % 2 === 0)];
  expect(a).toStrictEqual([[5]]);
});


test("splitAt", () => {
  var x = [1, 2, 2, 3, 5, 4, 4, 7];
  var a = [...splitAt(x, [1, 2, 5, 6])];
  expect(a).toStrictEqual([[1], [3, 5], [7]]);
  var x = [2, 4, 5, 6, 8];
  var a = [...splitAt(x, [0, 1, 3, 4])];
  expect(a).toStrictEqual([[5]]);
});


test("cut", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...cut(x, v => v % 2===0)];
  expect(a).toStrictEqual([[1], [2, 3], [4, 5]]);
  var a = [...cut(x, v => v % 2===1)];
  expect(a).toStrictEqual([[], [1, 2], [3, 4], [5]]);
});


test("cutRight", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...cutRight(x, v => v % 2===0)];
  expect(a).toStrictEqual([[1, 2], [3, 4], [5]]);
  var a = [...cutRight(x, v => v % 2===1)];
  expect(a).toStrictEqual([[1], [2, 3], [4, 5], []]);
});


test("cutAt", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...cutAt(x, [1, 3])];
  expect(a).toStrictEqual([[1], [2, 3], [4, 5]]);
  var a = [...cutAt(x, [0, 4])];
  expect(a).toStrictEqual([[], [1, 2, 3, 4], [5]]);
});


test("cutAtRight", () => {
  var x = [1, 2, 3, 4, 5];
  var a = [...cutAtRight(x, [1, 3])];
  expect(a).toStrictEqual([[1, 2], [3, 4], [5]]);
  var a = [...cutAtRight(x, [0, 4])];
  expect(a).toStrictEqual([[1], [2, 3, 4, 5], []]);
});


test("group", () => {
  var x = [1, 2, 2, -2, -2, 4];
  var a = [...group(x)];
  expect(a).toStrictEqual([[1], [2, 2], [-2, -2], [4]]);
  var a = [...group(x, (a, b) => Math.abs(a) - Math.abs(b))];
  expect(a).toStrictEqual([[1], [2, 2, -2, -2], [4]]);
  var a = [...group(x, null, v => Math.abs(v))];
  expect(a).toStrictEqual([[1], [2, 2, -2, -2], [4]]);
});


test("partition", () => {
  var x = [1, 2, 3, 4];
  var a = partition(x, v => v % 2===0);
  expect(a).toStrictEqual([[2, 4], [1, 3]]);
  var x = [1, 2, 3, 4, 5];
  var a = partition(x, v => v % 2===1);
  expect(a).toStrictEqual([[1, 3, 5], [2, 4]]);
});


test("partitionAs", () => {
  var x = [1, 2, 3, 4];
  var a = partitionAs(x, v => v % 2===0);
  expect(a).toStrictEqual(new Map([[false, [1, 3]], [true, [2, 4]]]))
  var x = [1, 2, 3, 4, 5];
  var b = partitionAs(x, v => v % 3);
  expect(b).toStrictEqual(new Map([[1, [1, 4]], [2, [2, 5]], [0, [3]]]));
});


test("chunk", () => {
  var x = [1, 2, 3, 4, 5, 6, 7, 8];
  var a = [...chunk(x, 3)];
  expect(a).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
  var a = [...chunk(x, 2, 3)];
  expect(a).toStrictEqual([[1, 2], [4, 5], [7, 8]]);
  var a = [...chunk(x, 4, 3)];
  expect(a).toStrictEqual([[1, 2, 3, 4], [4, 5, 6, 7], [7, 8]]);
});


test("cycle", () => {
  var x = [1, 2, 3];
  var a = [...cycle(x, 0, 2)];
  expect(a).toStrictEqual([1, 2]);
  var a = [...cycle(x, 0, 4)];
  expect(a).toStrictEqual([1, 2, 3, 1]);
  var a = [...cycle(x, 1, 6)];
  expect(a).toStrictEqual([2, 3, 1, 2, 3, 1]);
});


test("repeat", () => {
  var x = [1, 2];
  var a = [...repeat(x, 2)];
  expect(a).toStrictEqual([1, 2, 1, 2]);
  var a = [...repeat(x, 3)];
  expect(a).toStrictEqual([1, 2, 1, 2, 1, 2]);
});


test("reverse", () => {
  var x = [1, 2, 3, 4];
  var a = [...reverse(x)];
  expect(a).toStrictEqual([4, 3, 2, 1]);
});


test("rotate", () => {
  var x = [1, 2, 3, 4];
  var a = [...rotate(x, 1)];
  expect(a).toStrictEqual([2, 3, 4, 1]);
  var a = [...rotate(x, 2)];
  expect(a).toStrictEqual([3, 4, 1, 2]);
  var a = [...rotate(x, -1)];
  expect(a).toStrictEqual([4, 1, 2, 3]);
});


test("intermix", () => {
  var x = [1, 2, 3, 4];
  var y = [10, 20, 30];
  var a = [...intermix(x, [10])];
  expect(a).toStrictEqual([1, 10, 2, 10, 3, 10, 4]);
  var a = [...intermix(x, y)];
  expect(a).toStrictEqual([1, 10, 2, 20, 3, 30, 4]);
  var a = [...intermix(x, y, 2)];
  expect(a).toStrictEqual([1, 2, 10, 3, 4]);
  var a = [...intermix(x, y, 1, 2)];
  expect(a).toStrictEqual([1, 10, 20, 2, 30, 10, 3, 20, 30, 4]);
});


test("interleave", () => {
  var x = [1, 2, 3, 4];
  var y = [10, 20, 30, 40];
  var a = [...interleave([x, y])];
  expect(a).toStrictEqual([1, 10, 2, 20, 3, 30, 4, 40]);
  var y = [10, 20];
  var a = [...interleave([x, y])];
  expect(a).toStrictEqual([1, 10, 2, 20, 3, 4]);
});


test("interpolate", () => {
  var x = [1, 2, 3];
  var a = [...interpolate(x, (a, b) => (a + b)/2)];
  expect(a).toStrictEqual([1, 1.5, 2, 2.5, 3]);
});


test("intersperse", () => {
  var x = [1, 2, 3];
  var a = [...intersperse(x, 10)];
  expect(a).toStrictEqual([1, 10, 2, 10, 3]);
  var x = [1, 2, 3, 4];
  var a = [...intersperse(x, 10)];
  expect(a).toStrictEqual([1, 10, 2, 10, 3, 10, 4]);
});




// COMBINE
// -------

test("concat", () => {
  var x = [1, 2];
  var y = [3, 4];
  var a = [...concat(x, y)];
  expect(a).toStrictEqual([1, 2, 3, 4]);
  var a = [...concat(x, y, y)];
  expect(a).toStrictEqual([1, 2, 3, 4, 3, 4]);
});


test("merge", () => {
  var x = [1, 3, 5, 7];
  var y = [2, 4, 8];
  var a = [...merge([x, y])];
  expect(a).toStrictEqual([
    1, 2, 3, 4,
    5, 7, 8
  ]);
  var y = [-2, -4, -8];
  var a = [...merge([x, y], (a, b) => Math.abs(a) - Math.abs(b))];
  expect(a).toStrictEqual([
    1, -2,  3, -4,
    5,  7, -8
  ]);
  var a = [...merge([x, y], null, v => Math.abs(v))];
  expect(a).toStrictEqual([
    1, -2,  3, -4,
    5,  7, -8
  ]);
});


test("join", () => {
  var x = [1, 2];
  var a = join(x);
  expect(a).toBe("1,2");
  var a = join(x, " : ");
  expect(a).toBe("1 : 2");
});




// SET OPERATIONS
// --------------

test("isUnique", () => {
  var x = [1, 2, -1, -2];
  var a = isUnique(x);
  expect(a).toBe(true);
  var a = isUnique(x, (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(false);
  var a = isUnique(x, null, v => Math.abs(v));
  expect(a).toBe(false);
});


test("isDisjoint", () => {
  var x = [1, 2, 3, 4];
  var a = isDisjoint(x, [2, 5]);
  expect(a).toBe(false);
  var a = isDisjoint(x, [-2, -5]);
  expect(a).toBe(true);
  var a = isDisjoint(x, [-2, -5], (a, b) => Math.abs(a) - Math.abs(b));
  expect(a).toBe(false);
  var a = isDisjoint(x, [-2, -5], null, v => Math.abs(v));
  expect(a).toBe(false);
});


test("unique", () => {
  var x = [1, 2, 3, 4, 2, 3];
  var a = [...unique(x)];
  expect(a).toStrictEqual([1, 2, 3, 4]);
  var x = [1, 2, 3, 4, -2, -3];
  var a = [...unique(x)];
  expect(a).toStrictEqual([1, 2, 3, 4, -2, -3]);
  var a = [...unique(x, (a, b) => Math.abs(a) - Math.abs(b))];
  expect(a).toStrictEqual([1, 2, 3, 4]);
  var a = [...unique(x, null, v => Math.abs(v))];
  expect(a).toStrictEqual([1, 2, 3, 4]);
});


test("union", () => {
  var x = [1, 2, 3, 4];
  var y = [3, 4, 5];
  var a = [...union(x, y)];
  expect(a).toStrictEqual([1, 2, 3, 4, 5]);
  var y = [-3, -4, -5];
  var a = [...union(x, y)];
  expect(a).toStrictEqual([
     1,  2,  3, 4,
    -3, -4, -5
  ]);
  var a = [...union(x, y, (a, b) => Math.abs(a) - Math.abs(b))];
  expect(a).toStrictEqual([1, 2, 3, 4, -5]);
  var a = [...union(x, y, null, v => Math.abs(v))];
  expect(a).toStrictEqual([1, 2, 3, 4, -5]);
});


test("intersection", () => {
  var x = [1, 2, 3, 4];
  var y = [2, 3, 5];
  var a = [...intersection(x, y)];
  expect(a).toStrictEqual([2, 3]);
  var y = [-2, -3, -5];
  var a = [...intersection(x, y, (a, b) => Math.abs(a) - Math.abs(b))];
  expect(a).toStrictEqual([2, 3]);
  var a = [...intersection(x, y, null, v => Math.abs(v))];
  expect(a).toStrictEqual([2, 3]);
});


test("difference", () => {
  var x = [1, 2, 3, 4, 5];
  var y = [2, 4];
  var a = [...difference(x, y)];
  expect(a).toStrictEqual([1, 3, 5]);
  var y = [-2, -4];
  var a = [...difference(x, y)];
  expect(a).toStrictEqual([1, 2, 3, 4, 5]);
  var a = [...difference(x, y, (a, b) => Math.abs(a) - Math.abs(b))];
  expect(a).toStrictEqual([1, 3, 5]);
  var a = [...difference(x, y, null, v => Math.abs(v))];
  expect(a).toStrictEqual([1, 3, 5]);
});


test("symmetricDifference", () => {
  var x = [1, 2, 3, 4];
  var y = [3, 4, 5];
  var a = [...symmetricDifference(x, y)];
  expect(a).toStrictEqual([1, 2, 5]);
  var y = [-3, -4, -5];
  var a = [...symmetricDifference(x, y)];
  expect(a).toStrictEqual([
     1,  2,  3, 4,
    -3, -4, -5
  ]);
  var a = [...symmetricDifference(x, y, (a, b) => Math.abs(a) - Math.abs(b))];
  expect(a).toStrictEqual([1, 2, -5]);
  var a = [...symmetricDifference(x, y, null, v => Math.abs(v))];
  expect(a).toStrictEqual([1, 2, -5]);
});


test("cartesianProduct", () => {
  var x = [1, 2, 3];
  var y = [10, 20, 30];
  var a = [...cartesianProduct([x, y])];
  expect(a).toStrictEqual([
    [1, 10], [1, 20],
    [1, 30], [2, 10],
    [2, 20], [2, 30],
    [3, 10], [3, 20],
    [3, 30]
  ]);
  var a = [...cartesianProduct([x, y], ([a, b]) => a + b)];
  expect(a).toStrictEqual([
    11, 21, 31, 12, 22,
    32, 13, 23, 33
  ]);
});
