export type reduceFn<T, U> = (acc: U, v: T, i: number, x: Iterable<T>) => U;
export type calledFn<T> = (v: T, i: number, x: Iterable<T>) => void;
export type testFn<T> = (v: T, i: number, x: Iterable<T>) => boolean;
export type mapFn<T, U> = (v: T, i: number, x: Iterable<T>) => T|U;
export type compareFn<T> = (a: T, b: T) => number;
export type getFn<T> = () => T;