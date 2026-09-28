import {IDENTITY, COMPARE} from "@nodef/extra-function";
import {mod} from "@nodef/extra-math";




// CONSTANTS
// =========

/** End of iterable. */
export const END = Number.MAX_SAFE_INTEGER;

/** Empty iterable. */
const EMPTY = [].values();




// TYPES
// =====

/**
 * Handle reading of a single value.
 * @returns value
 */
export type ReadFunction<T> = () => T;


/**
 * Handle combining of two values.
 * @param a a value
 * @param b another value
 * @returns combined value
 */
export type CombineFunction<T> = (a: T, b: T) => T;


/**
 * Handle comparison of two values.
 * @param a a value
 * @param b another value
 * @returns a<b: -ve, a=b: 0, a>b: +ve
 */
export type CompareFunction<T> = (a: T, b: T) => number;


/**
 * Handle processing of values in an iterable.
 * @param v value in iterable
 * @param i index of value in iterable
 * @param x iterable containing the value
 */
export type ProcessFunction<T> = (v: T, i: number, x: Iterable<T>) => void;


/**
 * Handle selection of values in an iterable.
 * @param v value in iterable
 * @param i index of value in iterable
 * @param x iterable containing the value
 * @returns selected?
 */
export type TestFunction<T> = (v: T, i: number, x: Iterable<T>) => boolean;


/**
 * Handle transformation of a value to another.
 * @param v value in iterable
 * @param i index of value in iterable
 * @param x iterable containing the value
 * @returns transformed value
 */
export type MapFunction<T, U> = (v: T, i: number, x: Iterable<T> | null) => U;


/**
 * Handle reduction of multiple values into a single value.
 * @param acc accumulator (temporary result)
 * @param v value in iterable
 * @param i index of value in iterable
 * @param x iterable containing the value
 * @returns reduced value
 */
export type ReduceFunction<T, U> = (acc: U, v: T, i: number, x: Iterable<T>) => U;


/**
 * Handle ending of a combined iterable.
 * @param dones iᵗʰ iterable done?
 * @returns combined iterable done?
 */
export type EndFunction = (dones: boolean[]) => boolean;




// METHODS
// =======

// HELPERS
// -------

/** Convert an iterable to set. */
function toSet<T, U=T>(x: Iterable<T>, fm: MapFunction<T, U> | null=null): Set<T|U> {
  if (!fm) return new Set(x);
  const a = new Set<U>(); let i = -1;
  for (const v of x)
    a.add(fm(v, ++i, x));
  return a;
}




// ABOUT
// -----

/**
 * Check if value is an iterable.
 * @param v a value
 * @returns v is iterable?
 */
export function is(v: unknown): v is Iterable<unknown> {
  return v != null && typeof (v as Iterable<unknown>)[Symbol.iterator] === "function";
}


/**
 * Check if value is an iterator.
 * @param v a value
 * @returns v implements \{next(), return?(), throw?()\}?
 */
export function isIterator(v: unknown): v is Iterator<unknown> {
  return v != null && typeof (v as Iterator<unknown>).next === "function";
}


/**
 * Check if value is a list (iterable & !string).
 * @param v a value
 * @returns v is list?
 */
export function isList<T>(v: Iterable<T>): boolean {
  return is(v) && typeof v!=="string";
}


/**
 * Get iterator of an iterable.
 * @param x an iterable
 * @returns x\[\<iterator\>\]()
 */
export function iterator<T>(x: Iterable<T>): Iterator<T> {
  return x[Symbol.iterator]();
}


/**
 * List all indices.
 * @param x an iterable
 * @returns 0, 1, ..., |x|-1
 */
export function* keys<T>(x: Iterable<T>): IterableIterator<number> {
  let i = -1;
  for (const _ of x)
    yield ++i;
}


/**
 * List all values.
 * @param x an iterable
 * @returns v₀, v₁, ... | vᵢ = x[i]
 */
export function* values<T>(x: Iterable<T>): IterableIterator<T> {
  yield* x;
}
export {values as toOnce};


/**
 * List all index-value pairs.
 * @param x an iterable
 * @returns [0, v₀], [1, v₁], ... | vᵢ = x[i]
 */
export function* entries<T>(x: Iterable<T>): IterableIterator<[number, T]> {
  let i = -1;
  for (const v of x)
    yield [++i, v];
}




// GENERATE
// --------

/**
 * Convert an iterable-like to iterable.
 * @param x an iterator/iterable
 * @returns x as iterable
 */
export function from<T>(x: Iterator<T> | Iterable<T>): Iterable<T> {
  if (is(x)) return x;
  return fromIterator(x);
}


/**
 * Convert an iterator to iterable.
 * @param x an iterator/iterable
 * @returns x as iterable
 */
export function fromIterator<T>(x: Iterator<T>): Iterable<T> {
  return {[Symbol.iterator]: () => x};
}


/**
 * Generate iterable from given number range.
 * @param v start number [0]
 * @param V stop number, excluding [END]
 * @param dv step size [1]
 * @returns v, v+dv, v+2dv, ...
 */
export function* fromRange(v: number=0, V: number=END, dv: number=1): IterableIterator<number> {
  const N = (V-v) / dv;
  for (let n=0; n<N; ++n, v+=dv)
    yield v;
}


/**
 * Generate iterable from repeated function invocation.
 * @param fn function (impure)
 * @param args arguments
 * @returns fn(...args), fn(...args), ...
 */
export function* fromInvocation<T, A extends unknown[] = unknown[]>(fn: (...args: A) => T, ...args: A): IterableIterator<T> {
  for (;;)
    yield fn(...args);
}
export {fromInvocation as fromCall};


/**
 * Generate iterable from repeated function application.
 * @param fm map function (v, i)
 * @param v start value
 * @returns v, fm(v), fm(fm(v)), ...
 */
export function* fromApplication<T>(fm: MapFunction<T, T>, v: T): IterableIterator<T> {
  yield v;
  for (let i=1;; ++i)
    yield v = fm(v, i, null);
}
export {fromApplication as fromApply};




// BEHAVIOR
// --------

/**
 * Check if an iterable can iterated only once.
 * @param x an iterable
 * @returns x\[\<iterator\>\] = x?
 */
export function isOnce<T>(x: Iterable<T>): x is IterableIterator<T> {
  return x[Symbol.iterator]()===(x as unknown);
}


/**
 * Check if an iterable can be iterated many times.
 * @param x an iterable
 * @returns x\[\<iterator\>\] ≠ x?
 */
export function isMany<T>(x: Iterable<T>): x is Iterable<T> {
  return !isOnce(x);
}


/**
 * Convert a once-like iterable to many.
 * @param x an iterable
 * @param now consume immediately? [false]
 * @returns x' | x' = x; x' can be iterated multiple times
 */
export function toMany<T>(x: Iterable<T>, now: boolean=false): Iterable<T> {
  if (!isOnce(x)) return x;
  return now? Array.from(x) : toManyLate(x[Symbol.iterator](), []);
}
export {toMany as many};

function toManyLate<T>(ix: Iterator<T>, a: T[]): Iterable<T> {
  return {
    [Symbol.iterator]: () => {
      let i = -1;
      return {
        next: () => {
          if (++i < a.length) return {value: a[i], done: false};
          const {value, done} = ix.next();
          if (!done)   a[i] = value;
          return {value, done};
        }
      };
    }
  };
}


/**
 * Generate a function that iterates over values upon invocation.
 * @param x an iterable
 * @returns fn | fn() → x[0], fn() → x[1], ...
 */
export function toInvokable<T>(x: Iterable<T>): () => T {
  const ix = x[Symbol.iterator]();
  return () => ix.next().value;
}
export {toInvokable as toCallable};
export {toInvokable as callable};




// LENGTH
// ------

/**
 * Check if an iterable is empty.
 * @param x an iterable
 * @returns |x| = 0?
 */
export function isEmpty<T>(x: Iterable<T>): boolean {
  for (const _ of x)
    return false;
  return true;
}


/**
 * Find the length of an iterable.
 * @param x an iterable
 * @param i start index [0]
 * @param I end index [END]
 * @returns |x[i..I]|
 */
export function length<T>(x: Iterable<T>, i: number=0, I: number=END): number {
  let j = -1, n = 0;
  for (const _ of x)
    if (++j>=i && j<I) ++n;
  return n;
}
export {length as size};


/**
 * Get zero-based index for element in iterable.
 * @param x an iterable
 * @param i index (-ve: from right)
 * @returns i' | x[i'] = x[i]; i' ∈ [0, |x|]
 */
export function index<T>(x: Iterable<T>, i: number): number {
  const X = length(x);
  return i>=0? Math.min(i, X) : Math.max(X+i, 0);
}


/**
 * Get index range for part of iterable.
 * @param x an iterable
 * @param i start index (-ve: from right) [0]
 * @param I end index (-ve: from right) [END]
 * @returns [i', I'] | i' ≤ I'; i', I' ∈ [0, |x|]
 */
export function indexRange<T>(x: Iterable<T>, i: number=0, I: number=END): [number, number] {
  const X = length(x);
  i = i>=0? Math.min(i, X) : Math.max(X+i, 0);
  I = I>=0? Math.min(I, X) : Math.max(X+I, 0);
  return [i, Math.max(i, I)];
}




// COMPARE
// -------

/**
 * Compare two iterables.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x<y: -1, x=y: 0, x>y: 1
 */
export function compare<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): number {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const ix = x[Symbol.iterator]();
  const iy = y[Symbol.iterator]();
  let u, v;
  for (let i=0;; ++i) {
    u = ix.next();
    v = iy.next();
    if (u.done || v.done) break;
    const u1 = fm(u.value, i, x);
    const v1 = fm(v.value, i, y);
    const c  = fc(u1, v1);
    if (c!==0) return c;
  }
  return (v.done? 1:0) - (u.done? 1:0);
}


/**
 * Check if two iterables are equal.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x=y?
 */
export function isEqual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  return compare(x, y, fc, fm)===0;
}




// GET/SET
// -------

/**
 * Get value at index.
 * @param x an iterable
 * @param i index
 * @returns x[i]
 */
export function get<T>(x: Iterable<T>, i: number): T | undefined {
  let j = -1;
  for (const v of x)
    if (++j===i) return v;
}


/**
 * Get values at indices.
 * @param x an iterable
 * @param is indices (sorted)
 * @returns x[i₀], x[i₁], ... | [i₀, i₁, ...] = is
 */
export function* getAll<T>(x: Iterable<T>, is: number[]): IterableIterator<T | undefined> {
  let   i  = 0, j = -1;
  const IS = is.length;
  for (const v of x) {
    if (is[i]!==++j) continue;
    do { yield v; }  while (++i<IS && is[i]===is[i-1]);
    if (i>=IS) break;
  }
  for (; i<IS; ++i)
    yield;
}


/**
 * Get value at path in a nested iterable.
 * @param x a nested iterable
 * @param p path
 * @returns x[i₀][i₁][...] | [i₀, i₁, ...] = p
 */
export function getPath(x: Iterable<unknown>, p: number[]): unknown {
  let xany: unknown = x;
  for (const i of p)
    xany = is(xany)? get(xany, i) : undefined;
  return xany;
}


/**
 * Check if nested iterable has a path.
 * @param x a nested iterable
 * @param p path
 * @returns x[i₀][i₁][...] exists? | [i₀, i₁, ...] = p
 */
export function hasPath(x: Iterable<unknown>, p: number[]): boolean {
  return getPath(x, p)!==undefined;
}


/**
 * Set value at index.
 * @param x an iterable
 * @param i index
 * @param v value
 * @returns x' | x' = x; x'[i] = v
 */
export function* set<T>(x: Iterable<T>, i: number, v: T): IterableIterator<T | undefined> {
  let j = -1;
  for (const u of x)
    yield ++j===i? v : u;
  if  (j>=i) return;
  for (; ++j<i;) yield;
  yield v;
}


/**
 * Exchange two values.
 * @param x an iterable
 * @param i an index
 * @param j another index
 * @returns x' | x' = x; x'[i] = x[j]; x'[j] = x[i]
 */
export function* swap<T>(x: Iterable<T>, i: number, j: number): IterableIterator<T | undefined> {
  if (i===j) { yield* x; return; }
  const k = Math.min(i, j);
  const l = Math.max(i, j);
  let mid: T[]  = [];
  let vk:  T | undefined = undefined; i = -1;
  for (const v of x) {
    if (++i<k || i>l) yield v;
    else if (i===k) vk = v;
    else if (i<l) mid.push(v)
    else { yield v; yield* mid; yield vk; mid = []; }
  }
}


/**
 * Remove value at index.
 * @param x an iterable
 * @param i index
 * @returns x[0..i] ⧺ x[i+1..]
 */
export function* remove<T>(x: Iterable<T>, i: number): IterableIterator<T> {
  yield* splice(x, i, 1);
}




// PROPERTY
// --------

/**
 * Count values which satisfy a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns Σtᵢ | tᵢ = 1 if ft(vᵢ) else 0; vᵢ ∈ x
 */
export function count<T>(x: Iterable<T>, ft: TestFunction<T>): number {
  let i = -1, a = 0;
  for (const v of x)
    if (ft(v, ++i, x)) ++a;
  return a;
}


/**
 * Count occurrences of values.
 * @param x an array
 * @param fm map function (v, i, x)
 * @returns Map \{value ⇒ count\}
 */
export function countAs<T, U=T>(x: Iterable<T>, fm: MapFunction<T, T|U> | null=null): Map<T|U, number> {
  fm = fm || IDENTITY;
  let i = -1; const a = new Map();
  for (const v of x) {
    const v1 = fm(v, ++i, x);
    a.set(v1, (a.get(v1) || 0) + 1);
  }
  return a;
}


/**
 * Find smallest value.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns v | v ≤ vᵢ; vᵢ ∈ x
 */
export function min<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T | undefined {
  return rangeEntries(x, fc, fm)[0][1];
}


/**
 * Find largest value.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns v | v ≥ vᵢ; vᵢ ∈ x
 */
export function max<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T | undefined {
  return rangeEntries(x, fc, fm)[1][1];
}


/**
 * Find smallest and largest values.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns [min_value, max_value]
 */
export function range<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): [T | undefined, T | undefined] {
  const [a, b] = rangeEntries(x, fc, fm);
  return [a[1], b[1]];
}


/**
 * Find smallest entry.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns [min_index, min_value]
 */
export function minEntry<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): [number, T | undefined] {
  return rangeEntries(x, fc, fm)[0];
}


/**
 * Find largest entry.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns [max_index, max_value]
 */
export function maxEntry<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): [number, T | undefined] {
  return rangeEntries(x, fc, fm)[1];
}


/**
 * Find smallest and largest entries.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns [min_entry, max_entry]
 */
export function rangeEntries<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): [[number, T | undefined], [number, T | undefined]] {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  let mi = -1, mu: T | undefined, mv: T|U | undefined;
  let ni = -1, nu: T | undefined, nv: T|U | undefined;
  let i  = -1;
  for (const u of x) {
    const v = fm(u, ++i, x);
    if (i===0 || fc(v, mv as T|U)<0) { mi = i; mu = u; mv = v; }
    if (i===0 || fc(v, nv as T|U)>0) { ni = i; nu = u; nv = v; }
  }
  return [[mi, mu], [ni, nu]];
}




// PART
// ----

/**
 * Get part of an iterable.
 * @param x an iterable
 * @param i start index (-ve: from right) [0]
 * @param I end index (-ve: from right) [END]
 * @returns x[i..I]
 */
export function slice<T>(x: Iterable<T>, i: number=0, I: number=END): IterableIterator<T> {
  if (i>=0 && I>=0)     return slicePos(x, i, I);
  else if (i>=0 && I<0) return slicePosNeg(x, i, I);
  else return sliceNeg(x, i, I);
}

function* slicePos<T>(x: Iterable<T>, i: number, I: number): IterableIterator<T> {
  let k = -1;
  for (const v of x) {
    if (++k>=I) break;
    if (k>=i)   yield v;
  }
}

function* slicePosNeg<T>(x: Iterable<T>, i: number, I: number): IterableIterator<T> {
  let   j = 0,  k = -1;
  const a = [], A = -I;
  for (const v of x) {
    if (++k<i) continue;
    if (a.length>=A) yield a[j];
    a[j] = v; j = (j+1) % A;
  }
}

function* sliceNeg<T>(x: Iterable<T>, i: number, I: number): IterableIterator<T> {
  let   j = 0,  X = 0;
  const a = [], A = -i;
  for (const v of x) {
    a[j] = v; j = (j+1) % A;
    ++X;
  }
  i = Math.max(X+i, 0);
  I = I<0? Math.max(X+I, 0) : Math.min(I, X);
  const n = Math.max(I-i, 0);
  const J = Math.max(j+n-A, 0);
  yield* a.slice(j, j+n);
  yield* a.slice(0, J);
}


/**
 * Get first value.
 * @param x an iterable
 * @param vd default value
 * @returns x[0] || vd
 */
export function head<T>(x: Iterable<T>, vd?: T): T | undefined {
  for (const v of x)
    return v;
  return vd;
}


/**
 * Get last value.
 * @param x an iterable
 * @param vd default value
 * @returns x[|x|-1]
 */
export function last<T>(x: Iterable<T>, vd?: T): T | undefined {
  let v = vd;
  for (v of x);
  return v;
}


/**
 * Get values except first.
 * @param x an iterable
 * @returns x[1..|x|]
 */
export function* tail<T>(x: Iterable<T>): IterableIterator<T> {
  let i = -1;
  for (const v of x)
    if (++i>0) yield v;
}
export {tail as shift};


/**
 * Get values except last.
 * @param x an iterable
 * @returns x[0..|x|-1]
 */
export function* init<T>(x: Iterable<T>): IterableIterator<T> {
  let u: T = undefined as T, i = -1;
  for (const v of x) {
    if (++i>0) yield u;
    u = v;
  }
}
export {init as pop};


/**
 * Get values from left.
 * @param x an iterable
 * @param n number of values
 * @returns x[0..n]
 */
export function left<T>(x: Iterable<T>, n: number): IterableIterator<T> {
  return slice(x, 0, n);
}


/**
 * Get values from right.
 * @param x an iterable
 * @param n number of values
 * @returns x[-n..]
 */
export function right<T>(x: Iterable<T>, n: number): IterableIterator<T> {
  return n!==0? slice(x, -n) : EMPTY;
}


/**
 * Get values from middle.
 * @param x an iterable
 * @param i start index
 * @param n number of values [1]
 * @returns x[i..i+n]
 */
export function middle<T>(x: Iterable<T>, i: number, n: number=1): IterableIterator<T> {
  return slice(x, i, i+n);
}


/**
 * Keep first n values only.
 * @param x an iterable
 * @param n number of values [1]
 * @returns x[0..n]
 */
export function take<T>(x: Iterable<T>, n: number=1): IterableIterator<T> {
  return slice(x, 0, n);
}


/**
 * Keep last n values only.
 * @param x an iterable
 * @param n number of values [1]
 * @returns x[-n..]
 */
export function takeRight<T>(x: Iterable<T>, n: number=1): IterableIterator<T> {
  return n>0? slice(x, -n) : EMPTY;
}


/**
 * Keep values from left, while a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns x[0..T-1] | ft(x[i]) = true ∀ i ∈ [0, T-1] & ft(x[T]) = false
 */
export function* takeWhile<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T> {
  let i = -1;
  for (const v of x) {
    if (ft(v, ++i, x)) yield v;
    else return;
  }
}


/**
 * Keep values from right, while a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns x[T..] | ft(x[i]) = true ∀ i ∈ [T, |x|-1] & ft(x[T-1]) = false
 */
export function* takeWhileRight<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T> {
  const a = []; let i = -1;
  for (const v of x) {
    if (ft(v, ++i, x)) a.push(v);
    else a.length = 0;
  }
  yield* a;
}


/**
 * Discard first n values only.
 * @param x an iterable
 * @param n number of values [1]
 * @returns x[n..]
 */
export function drop<T>(x: Iterable<T>, n: number=1): IterableIterator<T> {
  return slice(x, n);
}


/**
 * Discard last n values only.
 * @param x an iterable
 * @param n number of values [1]
 * @returns x[0..-n]
 */
export function dropRight<T>(x: Iterable<T>, n: number=1): IterableIterator<T> {
  return n>0? slice(x, 0, -n) : values(x);
}


/**
 * Discard values from left, while a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns x[T..] | ft(x[i]) = true ∀ i ∈ [0, T-1] & ft(x[T]) = false
 */
export function* dropWhile<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T> {
  let c = true, i = -1;
  for (const v of x) {
    c = c && ft(v, ++i, x);
    if (!c) yield v;
  }
}


/**
 * Discard values from right, while a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns x[0..T-1] | ft(x[i]) = true ∀ i ∈ [T, |x|-1] & ft(x[T-1]) = false
 */
export function* dropWhileRight<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T> {
  const a = []; let i = -1;
  for (const v of x) {
    if (ft(v, ++i, x)) a.push(v);
    else { yield* a; yield v; a.length = 0; }
  }
}




// FIND
// ----

/**
 * Check if iterable has a value.
 * @param x an iterable
 * @param v search value
 * @param i start index [0]
 * @returns v ∈ x[i..]?
 */
export function includes<T>(x: Iterable<T>, v: T, i: number=0): boolean {
  return hasValue(slice(x, i), v);
}


/**
 * Find first index of a value.
 * @param x an iterable
 * @param v search value
 * @param i start index [0]
 * @returns index of v in x[i..] if found else -1
 */
export function indexOf<T>(x: Iterable<T>, v: T, i: number=0): number {
  const a = searchValue(slice(x, i), v);
  return a>=0? a+i : a;
}


/**
 * Find last index of a value.
 * @param x an iterable
 * @param v search value
 * @param i start index [END-1]
 * @returns last index of v in x[0..i] if found else -1
 */
export function lastIndexOf<T>(x: Iterable<T>, v: T, i: number=END-1): number {
  return searchValueRight(slice(x, 0, i+1), v);
}


/**
 * Find first value passing a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns first v | ft(v) = true; v ∈ x
 */
export function find<T>(x: Iterable<T>, ft: TestFunction<T>): T | undefined {
  let i = -1;
  for (const v of x)
    if (ft(v, ++i, x)) return v;
}


/**
 * Find last value passing a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns last v | ft(v) = true; v ∈ x
 */
export function findRight<T>(x: Iterable<T>, ft: TestFunction<T>): T | undefined {
  let i = -1, a: T | undefined;
  for (const v of x)
    if (ft(v, ++i, x)) a = v;
  return a;
}


/**
 * Scan from left, while a test passes.
 * @param x an array
 * @param ft test function (v, i, x)
 * @returns first index where test fails
 */
export function scanWhile<T>(x: Iterable<T>, ft: TestFunction<T>): number {
  let i = -1;
  for (const v of x)
    if (!ft(v, ++i, x)) return i;
  return ++i;
}


/**
 * Scan from right, while a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns first index where test passes till end
 */
export function scanWhileRight<T>(x: Iterable<T>, ft: TestFunction<T>): number {
  let a = -1, i = -1;
  for (const v of x)
    if (!ft(v, ++i, x)) a = i;
  return ++a;
}


/**
 * Scan from left, until a test passes.
 * @param x an array
 * @param ft test function (v, i, x)
 * @returns first index where test passes
 */
export function scanUntil<T>(x: Iterable<T>, ft: TestFunction<T>): number {
  let i = -1;
  for (const v of x)
    if (ft(v, ++i, x)) return i;
  return ++i;
}


/**
 * Scan from right, until a test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns first index where test fails till end
 */
export function scanUntilRight<T>(x: Iterable<T>, ft: TestFunction<T>): number {
  let a = -1, i = -1;
  for (const v of x)
    if (ft(v, ++i, x)) a = i;
  return ++a;
}


/**
 * Find index of first value passing a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns first index of value, -1 if not found
 */
export function search<T>(x: Iterable<T>, ft: TestFunction<T>): number {
  let i = -1;
  for (const v of x)
    if (ft(v, ++i, x)) return i;
  return -1;
}


/**
 * Find index of last value passing a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns last index of value, -1 if not found
 */
export function searchRight<T>(x: Iterable<T>, ft: TestFunction<T>): number {
  let i = -1, a = -1;
  for (const v of x)
    if (ft(v, ++i, x)) a = i;
  return a;
}


/**
 * Find indices of values passing a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns indices of value
 */
export function* searchAll<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<number> {
  let i = -1;
  for (const v of x)
    if (ft(v, ++i, x)) yield i;
}


/**
 * Find first index of a value.
 * @param x an iterable
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns first index of value, -1 if not found
 */
export function searchValue<T, U=T>(x: Iterable<T>, v: T, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): number {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const v1 = fm(v, 0, null); let i = -1;
  for (const u of x) {
    const u1 = fm(u, ++i, x);
    if (fc(u1, v1)===0) return i;
  }
  return -1;
}


/**
 * Find last index of a value.
 * @param x an iterable
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns last index of value, -1 if not found
 */
export function searchValueRight<T, U=T>(x: Iterable<T>, v: T, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): number {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const v1 = fm(v, 0, null);
  let   i  = -1, a = -1;
  for (const u of x) {
    const u1 = fm(u, ++i, x);
    if (fc(u1, v1)===0) a = i;
  }
  return a;
}


/**
 * Find indices of a value.
 * @param x an iterable
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns indices of value
 */
export function* searchValueAll<T, U=T>(x: Iterable<T>, v: T, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<number> {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const v1 = fm(v, 0, null); let i = -1;
  for (const u of x) {
    const u1 = fm(u, ++i, x);
    if (fc(u1, v1)===0) yield i;
  }
}


/**
 * Find first index of an infix.
 * @param x an iterable
 * @param y search infix
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns first i | x[i..i+|y|] = y else -1
 */
export function searchInfix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): number {
  return head(searchInfixAll(x, y, fc, fm), -1) as number;
}


/**
 * Find last index of an infix.
 * @param x an iterable
 * @param y search infix
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns first i | x[i..i+|y|] = y else -1
 */
export function searchInfixRight<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): number {
  return last(searchInfixAll(x, y, fc, fm), -1) as number;
}


/**
 * Find indices of an infix.
 * @param x an iterable
 * @param y search infix
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns i₀, i₁, ... | x[j..j+|y|] = y; j ∈ [i₀, i₁, ...]
 */
export function* searchInfixAll<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<number> {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const y1 = [...map(y, fm)];
  const Y  = y1.length;
  if (Y===0) { yield* fromRange(0, length(x)); return; }
  const m  = new Array(Y).fill(false);
  let   i  = -1, J = 0;
  for (const u of x) {
    const u1 = fm(u, ++i, x);
    for (let j=J; j>0; --j)
      m[j] = m[j-1] && fc(u1, y1[j])===0;
    m[0] = fc(u1, y1[0])===0;
    J = Math.min(J+1, Y-1);
    if (m[Y-1]) yield i-Y+1;
  }
}


/**
 * Find first index of a subsequence.
 * @param x an iterable
 * @param y search subsequence
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns start index of subsequence, -1 if not found
 */
export function searchSubsequence<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): number {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const y1 = [...map(y, fm)];
  const Y  = y1.length;
  if (Y===0) return 0;
  const si = [], sn = []; let i = -1;
  for (const u of x) {
    const u1 = fm(u, ++i, x);
    const S = si.length;
    for (let s=0; s<S; ++s) {
      const v1 = y1[sn[s]];
      if (fc(u1, v1)!==0) continue;
      if (++sn[s]===Y) return si[s];
    }
    const v1 = y1[0];
    if (fc(u1, v1)!==0) continue;
    si.push(i);
    sn.push(1);
  }
  return -1;
}


/**
 * Check if iterable has a value.
 * @param x an iterable
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns v ∈ x?
 */
export function hasValue<T, U=T>(x: Iterable<T>, v: T, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  return searchValue(x, v, fc, fm)>=0;
}


/**
 * Check if iterable starts with a prefix.
 * @param x an iterable
 * @param y search prefix
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x[0..|y|] = y?
 */
export function hasPrefix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const ix = x[Symbol.iterator](); let i = -1;
  for (const v of y) {
    const a  = ix.next();
    if (a.done) return false;
    const u1 = fm(a.value, ++i, x);
    const v1 = fm(v, i, y);
    if (fc(u1, v1)!==0) return false;
  }
  return true;
}


/**
 * Check if iterable ends with a suffix.
 * @param x an iterable
 * @param y seach suffix
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x[|x|-|y|..] = y?
 */
export function hasSuffix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const y1 = Array.isArray(y)? y : [...y];
  const Y  = y1.length;
  const a = []; let k = 0, n = 0;
  if (Y===0) return true;
  for (const u of x) {
    a[k++ % Y] = u;
    ++n;
  }
  if (a.length<Y) return false;
  for (let i=0, j=n-Y; i<Y; ++i, ++j) {
    const u1 = fm(a[k++ % Y], j, x);
    const v1 = fm(y1[i], i, y);
    if (fc(u1, v1)!==0) return false;
  }
  return true;
}


/**
 * Check if iterable contains an infix.
 * @param x an iterable
 * @param y search infix
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x[i..I] = y for some i, I?
 */
export function hasInfix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  return searchInfix(x, y, fc, fm)>=0;
}


/**
 * Check if iterable has a subsequence.
 * @param x an iterable
 * @param y search subsequence
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x[i₀] ⧺ x[i₁] ⧺ ... = y, for some i₀, i₁, ...? | i₀ < i₁ < ...
 */
export function hasSubsequence<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  return searchSubsequence(x, y, fc, fm)>=0;
}




// FUNCTIONAL
// ----------

/**
 * Call a function for each value.
 * @param x an iterable
 * @param fp process function (v, i, x)
 */
export function forEach<T>(x: Iterable<T>, fp: ProcessFunction<T>): void {
  let i = -1;
  for (const v of x)
    fp(v, ++i, x);
}


/**
 * Check if any value satisfies a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns true if ft(vᵢ) = true for some vᵢ ∈ x
 */
export function some<T>(x: Iterable<T>, ft: TestFunction<T> | null=null): boolean {
  if (ft) return someTest(x, ft);
  else    return someBoolean(x);
}

function someBoolean<T>(x: Iterable<T>): boolean {
  for (const v of x)
    if (v) return true;
  return false;
}

function someTest<T>(x: Iterable<T>, ft: TestFunction<T>): boolean {
  let i = -1;
  for (const v of x)
    if (ft(v, ++i, x)) return true;
  return false;
}


/**
 * Check if all values satisfy a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns true if ft(vᵢ) = true for all vᵢ ∈ x
 */
export function every<T>(x: Iterable<T>, ft: TestFunction<T> | null=null): boolean {
  if (ft) return everyTest(x, ft);
  else    return everyBoolean(x);
}

function everyBoolean<T>(x: Iterable<T>): boolean {
  for (const v of x)
    if (!v) return false;
  return true;
}

function everyTest<T>(x: Iterable<T>, ft: TestFunction<T>): boolean {
  let i = -1;
  for (const v of x)
    if (!ft(v, ++i, x)) return false;
  return true;
}


/**
 * Transform values of an iterable.
 * @param x an iterable
 * @param fm map function (v, i, x)
 * @returns fm(v₀), fm(v₁), ... | vᵢ ∈ x
 */
export function* map<T, U>(x: Iterable<T>, fm: MapFunction<T, U>): IterableIterator<U> {
  let i = -1;
  for (const v of x)
    yield fm(v, ++i, x);
}


/**
 * Reduce values of iterable to a single value.
 * @param x an iterable
 * @param fr reduce function (acc, v, i, x)
 * @param acc initial value
 * @returns fr(fr(acc, v₀), v₁)... | fr(acc, v₀) = v₀ if acc not given
 */
export function reduce<T, U=T>(x: Iterable<T>, fr: ReduceFunction<T, U>, acc?: U): U | undefined {
  let init = arguments.length <= 2, i = -1;
  for (const v of x) {
    if (init) { init = false; acc = v as unknown as U; ++i; }
    else acc = fr(acc as U, v, ++i, x);
  }
  return acc;
}


/**
 * Keep the values which pass a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns v₀, v₁, ... | ft(vᵢ) = true; vᵢ ∈ x
 */
export function* filter<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T> {
  let i = -1;
  for (const v of x)
    if (ft(v, ++i, x)) yield v;
}
export {filter as findAll};


/**
 * Keep the values at given indices.
 * @param x an iterable
 * @param is indices (sorted)
 * @returns v₀, v₁, ... | vᵢ = x[i]; i ∈ is
 */
export function* filterAt<T>(x: Iterable<T>, is: number[]): IterableIterator<T> {
  let i = -1;
  for (const v of x)
    if (is.includes(++i)) yield v;
}


/**
 * Discard the values which pass a test.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns v₀, v₁, ... | ft(vᵢ) = false; vᵢ ∈ x
 */
export function* reject<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T> {
  let i = -1;
  for (const v of x)
    if (!ft(v, ++i, x)) yield v;
}


/**
 * Discard the values at given indices.
 * @param x an iterable
 * @param is indices (sorted)
 * @returns v₀, v₁, ... | vᵢ = x[i]; i ∉ is
 */
export function* rejectAt<T>(x: Iterable<T>, is: number[]): IterableIterator<T> {
  let i = -1;
  for (const v of x)
    if (!is.includes(++i)) yield v;
}


/**
 * Produce accumulating values.
 * @param x an iterable
 * @param fr reduce function (acc, v, i, x)
 * @param acc initial value
 * @returns fr(acc, v₀), fr(fr(acc, v₀), v₁), ... | fr(acc, v₀) = v₀ if acc not given
 */
export function* accumulate<T, U=T>(x: Iterable<T>, fr: ReduceFunction<T, T|U>, acc?: T|U): IterableIterator<T|U> {
  let init = arguments.length <= 2, i = -1;
  for (const v of x) {
    if (init) { init = false; acc = v; ++i; }
    else acc = fr(acc as T, v, ++i, x);
    yield acc;
  }
}


/**
 * Flatten nested iterable to given depth.
 * @param x a nested iterable
 * @param n maximum depth (-1 ⇒ all)
 * @param fm map function (v, i, x)
 * @param ft flatten test (v, i, x) [isList]
 * @returns flat iterable
 */
export function* flat(x: Iterable<unknown>, n: number=-1, fm: MapFunction<unknown, unknown> | null=null, ft: TestFunction<unknown> | null=null): IterableIterator<unknown> {
  fm = fm || IDENTITY;
  ft = (ft || isList) as TestFunction<unknown>; let i = -1;
  for (const v of x) {
    const v1 = fm(v, ++i, x);
    if (n!==0 && ft(v1, i, x)) yield* flat(v1 as Iterable<unknown>, n-1, fm, ft);
    else yield v1;
  }
}


/**
 * Flatten nested iterable, based on map function.
 * @param x a nested iterable
 * @param fm map function (v, i, x)
 * @param ft flatten test (v, i, x) [isList]
 * @returns flat iterable
 */
export function* flatMap(x: Iterable<unknown>, fm: MapFunction<unknown, unknown> | null=null, ft: TestFunction<unknown> | null=null): IterableIterator<unknown> {
  fm = fm || IDENTITY;
  ft = (ft || isList) as TestFunction<unknown>; let i = -1;
  for (const v of x) {
    const v1 = fm(v, ++i, x);
    if (ft(v1, i, x)) yield* v1 as Iterable<unknown>;
    else yield v1;
  }
}


/**
 * Combine values from iterables.
 * @param xs iterables
 * @param fm map function (vs, i, xs)
 * @param fe end function (dones) [some]
 * @param vd default value
 * @returns fm([x₀[0], x₁[0], ...]), fm([x₀[1], x₁[1], ...]), ...
 */
export function* zip<T, U=T[]>(xs: Iterable<T>[], fm: MapFunction<T[], T[]|U> | null=null, fe: EndFunction | null=null, vd?: T): IterableIterator<T[]|U> {
  fm = fm || IDENTITY;
  fe = fe || some as EndFunction;
  const X = xs.length;
  if (X===0) return;
  const ix = [], ds = [], vs = [];
  for (let r=0; r<X; r++)
    ix[r] = xs[r][Symbol.iterator]();
  for (let i=0;; ++i) {
    for (let r=0; r<X; ++r) {
      const {done, value} = ix[r].next();
      ds[r] = done;
      vs[r] = done? vd : value;
    }
    if (fe(ds as boolean[])) break;
    yield fm(vs.slice() as T[], i, null);
  }
}




// MANIPULATION
// ------------

/**
 * Fill with given value.
 * @param x an iterable
 * @param v value
 * @param i start index [0]
 * @param I end index [END]
 * @returns x' | x' = x; x'[i..I] = v
 */
export function* fill<T>(x: Iterable<T>, v: T, i: number=0, I: number=END): IterableIterator<T> {
  let j = -1;
  for (const u of x) {
    if (++j>=i && j<I) yield v;
    else yield u;
  }
}


/**
 * Add values to the end.
 * @param x an iterable
 * @param vs values to add
 * @returns ...x, ...vs
 */
export function* push<T>(x: Iterable<T>, ...vs: T[]): IterableIterator<T> {
  yield* x;
  yield* vs;
}


/**
 * Add values to the start.
 * @param x an iterable
 * @param vs values to add
 * @returns ...vs, ...x
 */
export function* unshift<T>(x: Iterable<T>, ...vs: T[]): IterableIterator<T> {
  yield* vs;
  yield* x;
}


/**
 * Copy part of iterable to another.
 * @param x target iterable
 * @param y source iterable
 * @param j write index [0]
 * @param i read start index [0]
 * @param I read end index [END]
 * @returns x[0..j] ⧺ y[i..I] ⧺ x[j+I-i..]
 */
export function* copy<T>(x: Iterable<T>, y: Iterable<T>, j: number=0, i: number=0, I: number=END): IterableIterator<T | undefined> {
  let k = -1, J = -1;
  for (const u of x) {
    if (++k===j) {
      J = k;
      for (const v of slice(y, i, I))
      { yield v; ++J; }
    }
    if (k>=j && k<J) continue;
    else yield u;
  }
  if (k<j) {
    for (; ++k<j;) yield;
    yield* slice(y, i, I);
  }
}


/**
 * Copy part of iterable within.
 * @param x an iterable
 * @param j write index [0]
 * @param i read start index [0]
 * @param I read end index [END]
 * @returns x[0..j] ⧺ x[i..I] ⧺ x[j+I-i..]
 */
export function* copyWithin<T>(x: Iterable<T>, j: number=0, i: number=0, I: number=END): IterableIterator<T | undefined> {
  x = toMany(x); let n = length(x);
  for (const v of copy(x, x, j, i, I)) {
    if (--n<0) break;
    yield v;
  }
}
// copyWithinLeft()?
// copyWithinRight()?


/**
 * Move part of iterable within.
 * @param x an iterable
 * @param j write index [0]
 * @param i read start index [0]
 * @param I read end index [END]
 * @returns x[0..j] ⧺ x[i..I] ⧺ x[j..i] ⧺ x[I..]
 */
export function moveWithin<T>(x: Iterable<T>, j: number=0, i: number=0, I: number=END): IterableIterator<T> {
  if (j<i)      return movePart(x, j, i, I);
  else if (j>I) return movePart(x, i, I, j);
  else          return values(x);
}

function* movePart<T>(x: Iterable<T>, j: number, k: number, l: number): IterableIterator<T> {
  const p = []; let i = -1;
  for (const v of x) {
    if (++i<j || i>=l) yield v;
    else {
      p.push(v);
      if (i<l-1) continue;
      yield* p.slice(k-j);
      yield* p.slice(0, k-j);
    }
  }
}


/**
 * Remove or replaces existing values.
 * @param x an iterable
 * @param i remove index [0]
 * @param n number of values to remove [rest]
 * @param vs values to insert
 * @returns x[0..i] ⧺ vs ⧺ x[i+n..]
 */
export function* splice<T>(x: Iterable<T>, i: number=0, n: number=END-i, ...vs: T[]): IterableIterator<T> {
  let j = -1;
  for (const u of x) {
    if (++j<i || j>=i+n) yield u;
    else if (j===i) yield* vs;
  }
}


/**
 * Break iterable considering test as separator.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns x[j..k] ⧺ x[l..m] ⧺ ... | ft(x[i]) = true; i = 0..j / k..l / ...
 */
export function* split<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T[]> {
  let a: T[] = [], i = -1;
  for (const v of x) {
    if (!ft(v, ++i, x)) a.push(v);
    else if (a.length>0) { yield a; a = []; }
  }
  if (a.length>0) yield a;
}


/**
 * Break iterable considering indices as separator.
 * @param x an iterable
 * @param is indices (sorted)
 * @returns x[j..k] ⧺ x[l..m] ⧺ ... | ft(x[i]) = true; i = 0..j / k..l / ...; i ∈ is
 */
export function* splitAt<T>(x: Iterable<T>, is: number[]): IterableIterator<T[]> {
  let a: T[] = [], i = -1;
  for (const v of x) {
    if (!is.includes(++i)) a.push(v);
    else if (a.length>0) { yield a; a = []; }
  }
  if (a.length>0) yield a;
}


/**
 * Break iterable when test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns x[0..j] ⧺ x[j..k] ⧺ ... | ft(x[i]) = true; i = j, k, ...
 */
export function* cut<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T[]> {
  let i = -1, a = [];
  for (const v of x) {
    if (ft(v, ++i, x)) { yield a; a = []; }
    a.push(v);
  }
  yield a;
}


/**
 * Break iterable after test passes.
 * @param x an iterable
 * @param ft test function (v, i, x)
 * @returns x[0..j+1] ⧺ x[j+1..k] ⧺ ... | ft(x[i]) = true; i = j, k, ...
 */
export function* cutRight<T>(x: Iterable<T>, ft: TestFunction<T>): IterableIterator<T[]> {
  let i = -1, a = [];
  for (const v of x) {
    a.push(v);
    if (ft(v, ++i, x)) { yield a; a = []; }
  }
  yield a;
}


/**
 * Break iterable at given indices.
 * @param x an iterable
 * @param is split indices (sorted)
 * @returns x[0..j] ⧺ x[j..k] ⧺ ... | ft(x[i]) = true; i = j, k, ...; i ∈ is
 */
export function* cutAt<T>(x: Iterable<T>, is: Iterable<number>): IterableIterator<T[]> {
  const ii = is[Symbol.iterator]();
  let i  = ii.next();
  if (i.done) i.value = END;
  let a: T[] = [], j = -1;
  for (const v of x) {
    if (++j<i.value) { a.push(v); continue; }
    yield a; a = [v];
    i = ii.next();
    if (i.done) i.value = END;
  }
  yield a;
  for (; !i.done; i=ii.next()) yield [];
}


/**
 * Break iterable after given indices.
 * @param x an iterable
 * @param is split indices (sorted)
 * @returns x[0..j+1] ⧺ x[j+1..k] ⧺ ... | ft(x[i]) = true; i = j, k, ...; i ∈ is
 */
export function* cutAtRight<T>(x: Iterable<T>, is: Iterable<number>): IterableIterator<T[]> {
  yield* cutAt(x, map(is, i => i+1));
}


/**
 * Keep similar values together and in order.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x[0..k], x[k..l], ... | fc(x[i], x[j]) = 0; i, j = 0..k / k..l / ...
 */
export function* group<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T[]> {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  let a: T[] = [], u1: T|U | undefined = undefined, i = -1;
  for (const v of x) {
    const v1 = fm(v, ++i, x);
    if (i>0 && fc(u1 as T|U, v1)!==0) { yield a; a = [v]; }
    else a.push(v);
    u1 = v1;
  }
  yield a;
}


/**
 * Segregate values by test result.
 * @param x an array
 * @param ft test function (v, i, x)
 * @returns [satisfies, doesnt]
 */
export function partition<T>(x: Iterable<T>, ft: TestFunction<T>): [T[], T[]] {
  const t: T[] = [], f: T[] = []; let i = -1;
  for (const v of x) {
    if (ft(v, ++i, x)) t.push(v);
    else f.push(v);
  }
  return [t, f];
}


/**
 * Segregate values by similarity.
 * @param x an array
 * @param fm map function (v, i, x)
 * @returns Map \{key ⇒ values\}
 */
export function partitionAs<T, U=T>(x: Iterable<T>, fm: MapFunction<T, T|U> | null=null): Map<T|U, T[]> {
  fm = fm || IDENTITY;
  const a  = new Map(); let i = -1;
  for (const v of x) {
    const v1 = fm(v, ++i, x);
    if (!a.has(v1)) a.set(v1, []);
    a.get(v1).push(v);
  }
  return a;
}


/**
 * Break iterable into chunks of given size.
 * @param x an iterable
 * @param n chunk size [1]
 * @param s chunk step [n]
 * @returns x[0..n], x[s..s+n], x[2s..2s+n], ...
 */
export function* chunk<T>(x: Iterable<T>, n: number=1, s: number=n): IterableIterator<T[]> {
  const M = Math.max(n, s);
  let m = 0, a: T[] = [];
  for (const v of x) {
    if (m<n) a.push(v);
    if (++m<M) continue;
    do { yield a; } while (s<=0);
    a = a.slice(s);
    m = a.length;
  }
  if (a.length>0) yield a;
}


/**
 * Obtain values that cycle through an iterable.
 * @param x an iterable
 * @param i start index [0]
 * @param n number of values [-1 ⇒ Inf]
 * @returns x[i..] ⧺ x ⧺ x ⧺ ... with upto n values
 */
export function* cycle<T>(x: Iterable<T>, i: number=0, n: number=-1): IterableIterator<T> {
  x = toMany(x); let X = 0;
  if (i<0) {
    X = length(x);
    if (X===0) return;
    i = mod(i, X);
  }
  while (true) {
    X = 0;
    for (const v of x) {
      ++X;
      if (--i>=0)  continue;
      if (n--===0) return;
      yield v;
    }
    if (X===0) return;
    if (i>=X)  i = mod(i, X);
  }
}


/**
 * Repeat an iterable given times.
 * @param x an iterable
 * @param n times [-1 ⇒ Inf]
 * @returns ...x, ...x, ...(n times)
 */
export function* repeat<T>(x: Iterable<T>, n: number=-1): IterableIterator<T> {
  x = toMany(x);
  for (; n!==0; --n)
    yield* x;
}


/**
 * Reverse the values.
 * @param x an iterable
 * @returns x[|x|-1], x[|x|-2], ..., x[1], x[0]
 */
export function* reverse<T>(x: Iterable<T>): IterableIterator<T> {
  const a = Array.isArray(x)? x : [...x];
  for (let i=a.length-1; i>=0; --i)
    yield a[i];
}


/**
 * Rotate values in iterable.
 * @param x an iterable
 * @param n rotate amount (+ve: left, -ve: right) [0]
 * @returns x[n..] ⧺ x[0..n]
 */
export function rotate<T>(x: Iterable<T>, n: number=0): IterableIterator<T> {
  if (n===0)    return values(x);
  else if (n>0) return rotateLeft (x,  n);
  else          return rotateRight(x, -n);
}

function* rotateLeft<T>(x: Iterable<T>, n: number): IterableIterator<T> {
  const a = []; let i = -1;
  for (const v of x) {
    if (++i<n) a.push(v);
    else yield v;
  }
  if (++i===0 || i>=n) { yield* a; return; }
  n = n % i;
  yield* a.slice(n);
  yield* a.slice(0, n);
}

function* rotateRight<T>(x: Iterable<T>, n: number): IterableIterator<T> {
  const a = Array.from(x);
  if (a.length===0) return;
  n = n % a.length;
  yield* a.slice(-n);
  yield* a.slice(0, -n);
}


/**
 * Place a separator between every value.
 * @param x an iterable
 * @param v separator
 * @returns x[0], v, x[1], v, ..., x[|x|-1]
 */
export function* intersperse<T>(x: Iterable<T>, v: T): IterableIterator<T> {
  let i = -1;
  for (const u of x) {
    if (++i>0) yield v;
    yield u;
  }
}


/**
 * Estimate new values between existing ones.
 * @param x an iterable
 * @param fc combine function (a, b)
 * @returns x[0], fc(x[0], x[1]), x[1], fc(x[1], x[2]), ..., x[|x|-1]
 */
export function* interpolate<T>(x: Iterable<T>, fc: CombineFunction<T>): IterableIterator<T> {
  let u: T | undefined, i = -1;
  for (const v of x) {
    if (++i>0) yield fc(u as T, v);
    yield (u = v);
  }
}


/**
 * Place values of an iterable between another.
 * @param x an iterable
 * @param y another iterable
 * @param m number of values from x [1]
 * @param n number of values from y [1]
 * @param s step size for x [m]
 * @param t step size for y [n]
 * @returns x[0..m], y[0..n], x[s..s+m], y[t..t+n], ..., x[k*s..|x|-1] | k ∈ W
 */
export function* intermix<T>(x: Iterable<T>, y: Iterable<T>, m: number=1, n: number=1, s: number=m, t: number=n): IterableIterator<T> {
  const x1 = chunk(x, m, s);
  const y1 = chunk(repeat(y), n, t);
  const iy = y1[Symbol.iterator](); let i = -1;
  for (const u of x1) {
    if (++i>0) yield* iy.next().value;
    yield* u;
  }
}


/**
 * Place values from iterables alternately.
 * @param xs iterables
 * @returns x₀[0], x₁[0], ..., x₀[1], x₁[0], ... | [x₀, x₁, ...] = xs
 */
export function* interleave<T>(xs: Iterable<T>[]): IterableIterator<T> {
  const X  = xs.length;
  if (X===0) return;
  const ix: (Iterator<T> | null)[] = [];
  for (let i=0; i<X; ++i)
    ix[i] = xs[i][Symbol.iterator]();
  for (let i=0, n=X; n>0; i=(i+1)%X) {
    if (ix[i]==null) continue;
    const a = (ix[i] as Iterator<T>).next();
    if (a.done) { ix[i] = null; --n; }
    else yield a.value as T;
  }
}




// COMBINE
// -------

/**
 * Append values from iterables.
 * @param xs iterables
 * @returns ...x₀, ...x₁, ... | [x₀, x₁, ...] = xs
 */
export function* concat<T>(...xs: Iterable<T>[]): IterableIterator<T> {
  for (const x of xs)
    yield* x;
}


/**
 * Merge values from sorted iterables.
 * @param xs iterables
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns sort(concat(...xs))
 */
export function* merge<T, U=T>(xs: Iterable<T>[], fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  const X  = xs.length;
  const ix: Iterator<T>[] = [], ax: IteratorResult<T>[] = [];
  let i = 0;
  for (let n=0; n<X; ++n) {
    ix[i] = xs[i][Symbol.iterator]();
    ax[i] = ix[i].next();
    if (!ax[i].done) ++i;
  }
  while (i>0) {
    const as = ax.map(a => a.value);
    const j  = minEntry(as, fc, fm)[0];
    yield as[j];
    ax[j] = ix[j].next();
    if (!ax[j].done) continue;
    ix.splice(j, 1);
    ax.splice(j, 1);
    --i;
  }
}


/**
 * Join values together into a string.
 * @param x an iterable
 * @param sep separator [,]
 * @returns "$\{v₀\}$\{sep\}$\{v₁\}..." | vᵢ ∈ x
 */
export function join<T>(x: Iterable<T>, sep: string=","): string {
  let a = "";
  for (const v of x)
    a += v + sep;
  return a.substring(0, a.length-sep.length);
}




// SET OPERATIONS
// --------------

/**
 * Check if there are no duplicate values.
 * @param x an array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns ∀ vᵢ, vⱼ ∈ x, is vᵢ ≠ vⱼ?
 */
export function isUnique<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  if (fc) return isUniqueDual(x, fc, fm);
  else    return isUniqueMap (x, fm);
}

function isUniqueMap<T, U=T>(x: Iterable<T>, fm: MapFunction<T, T|U> | null=null): boolean {
  fm = fm || IDENTITY;
  const x1 = new Set(); let i = -1;
  for (const v of x) {
    const v1 = fm(v, ++i, x);
    if (x1.has(v1)) return false;
    x1.add(v1);
  }
  return true;
}

function isUniqueDual<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const x1 = [...map(x, fm)];
  for (const u1 of x1) {
    for (const v1 of x1)
      if (fc(u1, v1)===0) return false;
  }
  return true;
}


/**
 * Checks if arrays have no value in common.
 * @param x an array
 * @param y another array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x ∩ y = Φ?
 */
export function isDisjoint<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  if (fc) return isDisjointDual(x, y, fc, fm);
  else    return isDisjointMap (x, y, fm);
}

function isDisjointMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fm: MapFunction<T, T|U> | null=null): boolean {
  const y1 = toSet(y, fm); let i = -1;
  fm = fm || IDENTITY;
  for (const u of x) {
    const u1 = fm(u, ++i, x);
    if (y1.has(u1)) return false;
  }
  return true;
}

function isDisjointDual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const y1 = [...map(y, fm)]; let i = -1;
  for (const u of x) {
    const u1 = fm(u, ++i, x);
    for (const v1 of y1)
      if (fc(u1, v1)===0) return false;
  }
  return true;
}


/**
 * Remove duplicate values.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns v₀, v₁, ... | vᵢ ∈ x; vᵢ ≠ vⱼ ∀ i, j
 */
export function* unique<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  if (fc) yield* uniqueDual(x, fc, fm);
  else    yield* uniqueMap (x, fm);
}

function* uniqueMap<T, U=T>(x: Iterable<T>, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  fm = fm || IDENTITY;
  const x1 = new Set(); let i = -1;
  for (const v of x) {
    const v1 = fm(v, ++i, x);
    if (x1.has(v1)) continue;
    x1.add(v1); yield v;
  }
}

function* uniqueDual<T, U=T>(x: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const x1 = []; let i = -1;
  NEXTX: for (const v of x) {
    const v1 = fm(v, ++i, x);
    for (const u1 of x1)
      if (fc(u1, v1)===0) continue NEXTX;
    x1.push(v1); yield v;
  }
}


/**
 * Obtain values present in any iterable.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x ∪ y = \{v | v ∈ x or v ∈ y\}
 */
export function* union<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  if (fc) yield* unionDual(x, y, fc, fm);
  else    yield* unionMap (x, y, fm);
}

function* unionMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  fm = fm || IDENTITY;
  const x1 = new Set();
  let i  = -1, j = -1;
  for (const u of x) {
    const u1 = fm(u, ++i, x);
    x1.add(u1); yield u;
  }
  for (const v of y) {
    const v1 = fm(v, ++j, y);
    if (!x1.has(v1)) yield v;
  }
}

function* unionDual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  x  = toMany(x); yield* x;
  const x1 = [...map(x, fm)]; let j = -1;
  NEXTY: for (const v of y) {
    const v1 = fm(v, ++j, y);
    for (const u1 of x1)
      if (fc(u1, v1)===0) continue NEXTY;
    yield v;
  }
}


/**
 * Obtain values present in both iterables.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x ∩ y = \{v | v ∈ x, v ∈ y\}
 */
export function* intersection<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  if (fc) yield* intersectionDual(x, y, fc, fm);
  else    yield* intersectionMap (x, y, fm);
}

function* intersectionMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  const y1 = toSet(y, fm); let i = -1;
  fm = fm || IDENTITY;
  for (const u of x) {
    const u1 = fm(u, ++i, x);
    if (y1.has(u1)) yield u;
  }
}

function* intersectionDual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const y1 = [...map(y, fm)]; let i = -1;
  NEXTX: for (const u of x) {
    const u1 = fm(u, ++i, x);
    for (const v1 of y1)
      if (fc(u1, v1)===0) { yield u; continue NEXTX; }
  }
}


/**
 * Obtain values not present in another iterable.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x - y = \{v | v ∈ x, v ∉ y\}
 */
export function* difference<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  if (fc) yield* differenceDual(x, y, fc, fm);
  else    yield* differenceMap (x, y, fm);
}

function* differenceMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  const y1 = toSet(y, fm); let i = -1;
  fm = fm || IDENTITY;
  for (const u of x) {
    const u1 = fm(u, ++i, x);
    if (!y1.has(u1)) yield u;
  }
}

function* differenceDual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  fc = fc || COMPARE;
  fm = fm || IDENTITY;
  const y1 = [...map(y, fm)]; let i = -1;
  NEXTX: for (const u of x) {
    const u1 = fm(u, ++i, x);
    for (const v1 of y1)
      if (fc(u1, v1)===0) continue NEXTX;
    yield u;
  }
}


/**
 * Obtain values not present in both iterables.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x-y ∪ y-x
 */
export function* symmetricDifference<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): IterableIterator<T> {
  x = toMany(x); y = toMany(y);
  yield* difference(x, y, fc, fm);
  yield* difference(y, x, fc, fm);
}




/**
 * List cartesian product of iterables.
 * @param xs iterables
 * @param fm map function (vs, i)
 * @returns x₀ × x₁ × ... = \{[v₀, v₁, ...] | v₀ ∈ x₀, v₁ ∈ x₁, ...] \}
 */
export function* cartesianProduct<T, U=T>(xs: Iterable<T>[], fm: MapFunction<T[], T[]|U> | null=null): IterableIterator<T[]|U> {
  fm = fm || IDENTITY;
  const X  = xs.length;
  if (X===0) return;
  const jx = [], ix = [], ax = [];
  for (let i=0; i<X; ++i) {
    jx[i] = i>0? toMany(xs[i]) : xs[i];
    ix[i] = jx[i][Symbol.iterator]();
    ax[i] = ix[i].next();
    if (ax[i].done) return;
  }
  for (let i=0;; ++i) {
    const vs = [];
    for (const a of ax) vs.push(a.value);
    yield fm(vs, i, null);
    let r = X-1;
    for (; r>=0; --r) {
      ax[r] = ix[r].next();
      if (!ax[r].done) break;
      ix[r] = jx[r][Symbol.iterator]();
      ax[r] = ix[r].next();
    }
    if (r<0) break;
  }
}
