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
export type MapFunction<T, A> = (v: T, i: number, x: Iterable<T>) => A;


/**
 * Handle reduction of multiple values into a single value.
 * @param acc accumulator (temporary result)
 * @param v value in iterable
 * @param i index of value in iterable
 * @param x iterable containing the value
 * @returns reduced value
 */
export type ReduceFunction<T, A> = (acc: A, v: T, i: number, x: Iterable<T>) => A;


/**
 * Handle ending of a combined iterable.
 * @param dones iᵗʰ iterable done?
 * @returns combined iterable done?
 */
export type EndFunction = (dones: boolean[]) => boolean;
