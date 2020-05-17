An [iterable] is a sequence of values. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

I find this map-approach beautiful, which i learned from Haskell's `sortOn()`.
You can notice that i have followed Javascript naming scheme as far as possible.
Some names are borrowed from Haskell, Python, Java, Processing.

Methods look like:
- `unique()`: accepts a compare function (default).
- `uniqueOn()`: accepts a map function *for faster comparision* (map).

Methods as separate packages:

- `@extra-iterable/swap`: use [rollup] to bundle this es module.
- `@extra-iterable/swap.min`: use in browser ([browserify], [uglify-js]).

> Stability: Experimental.

```javascript
const iterable = require('extra-iterable');

var x = [2, 4, 6, 8];
iterable.get(x, 1);
// 4

var x = [1, 2, 3, 4];
[...iterable.swap(x, 0, 1)];
// [ 2, 1, 3, 4 ]

var x = [1, 2, 3];
[...iterable.cycle(x, 0, 4)];
// [1, 2, 3, 1]

var x = [1, 2, 3, 4];
iterable.reduce(x, (acc, v) => acc+v);
// 10
```

### reference

| Method                | Action
|-----------------------|-------
| [is]                  | Checks if value is iterable.
| [get]                 | Gets value at index.
| [set]                 | Sets value at index.
| [swap]                | Exchanges two values.
| [head]                | Exchanges two values.
| [index]               | Gets zero-based index.
| [indexRange]          | Gets index range of part of iterable.
| [size]                | Counts the number of values.
| [entries]             | Converts iterator to iterable.
| [iterator]            | Gives iterator for iterable.
| [many]                | Converts iterator to iterable.
| [from]                | Converts iterator to iterable.
|                       |
| [push]                | Fills with given value.
| [fill]                | Fills with given value.
| [copy]                | Copies part of iterable to another.
| [concat]              | Appends iterables together.
| [left]                | Gets part of an iterable.
| [slice]               | Gets part of an iterable.
| [splice]              | Removes or replaces existing values.
| [flat]                | Flattens nested iterable to given depth.
| [cut]                 | Breaks iterable at given indices.
| [chunk]               | Breaks iterable into chunks of given size.
| [cycle]               | Gives values that cycle through an iterable.
| [repeat]              | Repeats an iterable given times.
| [reverse]             | Reverses the values.
| [rotate]              | Rotates values in iterable.
| [interleave]          | Merges values from iterables.
| [merge]               | Merges values from iterables.
|                       |
| [min]                 | Finds smallest value.
| [max]                 | Finds largest value.
| [range]               | Finds smallest and largest values.
| [map]                 | Updates values based on map function.
| [reduce]              | Reduces values to a single value.
| [filter]              | Keeps the values which pass a test.
| [take]                | Keeps the values which pass a test.
| [drop]                | Keeps the values which pass a test.
| [count]               | Counts values which satisfy a test.
| [partition]           | Segregates values by test result.
| [group]               | Keeps similar values together and in order.
| [split]               | Breaks iterable considering test as separator.
| [join]                | Joins values together.
| [cartesianProduct]    | Combines values from iterables.
| [zip]                 | Combines values from iterables.
|                       |
| [unique]              | Removes duplicate values.
| [union]               | Gives values present in any iterable.
| [intersection]        | Gives values present in both iterables.
| [difference]          | Gives values of an iterable not present in another.
| [isUnique]            | Checks if there are no duplicate values.
| [isDisjoint]          | Checks if iterables have no value in common.
|                       |
| [isValue]             | Checks if iterable starts with a prefix.
| [isPrefix]            | Checks if iterable starts with a prefix.
| [isInfix]             | Checks if iterable contains an infix.
| [isSuffix]            | Checks if iterable ends with a suffix.
| [isSubsequence]       | Checks if iterable has a subsequence.
|                       |
| [isEqual]             | Checks if two iterables are equal.
| [compare]             | Compares two iterables.
| [search]              | Searches a value from left.
| [find]                | Finds first value passing a test.
| [findIndex]           | Finds index of first value passing a test.
| [some]                | Checks if any value satisfies a test.
| [every]               | Checks if all values satisfy a test.
| [forEach]             | Calls a function for each value.

<br>

[![nodef](https://merferry.glitch.me/card/extra-iterable.svg)](https://nodef.github.io)

[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[:running:]: https://npm.runkit.com/extra-iterable
[:package:]: https://www.npmjs.com/package/extra-iterable
[:moon:]: https://www.npmjs.com/package/extra-iterable.min
[:ledger:]: https://unpkg.com/extra-iterable/
[:vhs:]: https://asciinema.org/a/331126
