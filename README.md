An [iterable] is a sequence of values. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

Methods as separate packages:

- `@extra-iterable/swap`: use [rollup] to bundle this es module.
- `@extra-iterable/swap.min`: use in browser ([browserify], [uglify-js]).

Some methods accept a map function *for faster comparision* (like [unique]).
I find this map-approach beautiful, which i learned from Haskell's `sortOn()`.
You can notice that i have followed Javascript naming scheme as far as possible.
Some names are borrowed from Haskell, Python, Java, Processing.

> Stability: Experimental.

```javascript
const iterable = require('extra-iterable');
// import * as iterable from 'extra-iterable';
// import * as iterable from 'https://unpkg.com/extra-iterable@2.4.25/index.mjs'; (deno)

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
| [index]               | Gets zero-based index.
| [indexRange]          | Gets index range of part of iterable.
| [isEmpty]             | Checks is iterable is empty.
| [size]                | Counts the number of values.
|                       |
| [entries]             | Lists all index-value pairs.
| [iterator]            | Gives iterator for iterable.
| [many]                | Converts a once iterable to many.
| [from]                | Converts iterator to iterable.
|                       |
| [take]                | Extracts values from iterable.
| [drop]                | Drops values from iterable.
| [head]                | Gets first value.
| [left]                | Gets values from the left.
| [concat]              | Appends iterables together.
| [push]                | Adds values to the end. 
| [copy]                | Copies part of iterable to another.
| [fill]                | Fills with given value.
| [slice]               | Gets part of an iterable.
| [splice]              | Removes or replaces existing values.
|                       |
| [chunk]               | Breaks iterable into chunks of given size.
| [cycle]               | Gives values that cycle through an iterable.
| [repeat]              | Repeats an iterable given times.
| [reverse]             | Reverses the values.
| [rotate]              | Rotates values in iterable.
| [interleave]          | Merges values from iterables.
| [merge]               | Merges values from sorted iterables.
| [flat]                | Flattens nested iterable to given depth.
|                       |
| [min]                 | Finds smallest entry.
| [max]                 | Finds largest entry.
| [range]               | Finds smallest and largest entries.
| [count]               | Counts values which satisfy a test.
| [partition]           | Segregates values by test result.
| [cut]                 | Breaks iterable when test passes.
| [split]               | Breaks iterable considering test as separator.
| [group]               | Keeps similar values together and in order.
| [join]                | Joins values together.
|                       |
| [map]                 | Updates values based on map function.
| [filter]              | Keeps the values which pass a test.
| [reduce]              | Reduces values to a single value.
| [accumulate]          | Produces accumulating values.
| [cartesianProduct]    | Lists cartesian product of iterables.
| [zip]                 | Combines values from iterables.
|                       |
| [unique]              | Removes duplicate values.
| [union]               | Gives values present in any iterable.
| [intersection]        | Gives values present in both iterables.
| [difference]          | Gives values not present in another iterable.
| [symmetricDifference] | Gives values not present in both iterables.
| [isUnique]            | Checks if there are no duplicate values.
| [isDisjoint]          | Checks if iterables have no value in common.
|                       |
| [isValue]             | Checks if iterable has a value.
| [isPrefix]            | Searches a prefix.
| [isSuffix]            | Checks if iterable ends with a suffix.
| [isInfix]             | Checks if iterable contains an infix.
| [isSubsequence]       | Checks if iterable has a subsequence.
|                       |
| [isEqual]             | Checks if two iterables are equal.
| [compare]             | Compares two iterables.
| [search]              | Searches first value passing a test.
| [scanWhile]           | Scans from left, while a test passes.
| [find]                | Finds first value passing a test.
| [forEach]             | Calls a function for each value.
| [some]                | Checks if any value satisfies a test.
| [every]               | Checks if all values satisfy a test.

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
[is]: https://github.com/nodef/extra-iterable/wiki/is
[get]: https://github.com/nodef/extra-iterable/wiki/get
[set]: https://github.com/nodef/extra-iterable/wiki/set
[swap]: https://github.com/nodef/extra-iterable/wiki/swap
[head]: https://github.com/nodef/extra-iterable/wiki/head
[index]: https://github.com/nodef/extra-iterable/wiki/index
[indexRange]: https://github.com/nodef/extra-iterable/wiki/indexRange
[size]: https://github.com/nodef/extra-iterable/wiki/size
[entries]: https://github.com/nodef/extra-iterable/wiki/entries
[iterator]: https://github.com/nodef/extra-iterable/wiki/iterator
[many]: https://github.com/nodef/extra-iterable/wiki/many
[from]: https://github.com/nodef/extra-iterable/wiki/from
[push]: https://github.com/nodef/extra-iterable/wiki/push
[fill]: https://github.com/nodef/extra-iterable/wiki/fill
[copy]: https://github.com/nodef/extra-iterable/wiki/copy
[concat]: https://github.com/nodef/extra-iterable/wiki/concat
[left]: https://github.com/nodef/extra-iterable/wiki/left
[slice]: https://github.com/nodef/extra-iterable/wiki/slice
[splice]: https://github.com/nodef/extra-iterable/wiki/splice
[flat]: https://github.com/nodef/extra-iterable/wiki/flat
[cut]: https://github.com/nodef/extra-iterable/wiki/cut
[chunk]: https://github.com/nodef/extra-iterable/wiki/chunk
[cycle]: https://github.com/nodef/extra-iterable/wiki/cycle
[repeat]: https://github.com/nodef/extra-iterable/wiki/repeat
[reverse]: https://github.com/nodef/extra-iterable/wiki/reverse
[rotate]: https://github.com/nodef/extra-iterable/wiki/rotate
[interleave]: https://github.com/nodef/extra-iterable/wiki/interleave
[merge]: https://github.com/nodef/extra-iterable/wiki/merge
[min]: https://github.com/nodef/extra-iterable/wiki/min
[max]: https://github.com/nodef/extra-iterable/wiki/max
[range]: https://github.com/nodef/extra-iterable/wiki/range
[map]: https://github.com/nodef/extra-iterable/wiki/map
[reduce]: https://github.com/nodef/extra-iterable/wiki/reduce
[filter]: https://github.com/nodef/extra-iterable/wiki/filter
[take]: https://github.com/nodef/extra-iterable/wiki/take
[drop]: https://github.com/nodef/extra-iterable/wiki/drop
[count]: https://github.com/nodef/extra-iterable/wiki/count
[partition]: https://github.com/nodef/extra-iterable/wiki/partition
[group]: https://github.com/nodef/extra-iterable/wiki/group
[split]: https://github.com/nodef/extra-iterable/wiki/split
[join]: https://github.com/nodef/extra-iterable/wiki/join
[cartesianProduct]: https://github.com/nodef/extra-iterable/wiki/cartesianProduct
[zip]: https://github.com/nodef/extra-iterable/wiki/zip
[unique]: https://github.com/nodef/extra-iterable/wiki/unique
[union]: https://github.com/nodef/extra-iterable/wiki/union
[intersection]: https://github.com/nodef/extra-iterable/wiki/intersection
[difference]: https://github.com/nodef/extra-iterable/wiki/difference
[isUnique]: https://github.com/nodef/extra-iterable/wiki/isUnique
[isDisjoint]: https://github.com/nodef/extra-iterable/wiki/isDisjoint
[isValue]: https://github.com/nodef/extra-iterable/wiki/isValue
[isPrefix]: https://github.com/nodef/extra-iterable/wiki/isPrefix
[isInfix]: https://github.com/nodef/extra-iterable/wiki/isInfix
[isSuffix]: https://github.com/nodef/extra-iterable/wiki/isSuffix
[isSubsequence]: https://github.com/nodef/extra-iterable/wiki/isSubsequence
[isEqual]: https://github.com/nodef/extra-iterable/wiki/isEqual
[compare]: https://github.com/nodef/extra-iterable/wiki/compare
[search]: https://github.com/nodef/extra-iterable/wiki/search
[find]: https://github.com/nodef/extra-iterable/wiki/find
[some]: https://github.com/nodef/extra-iterable/wiki/some
[every]: https://github.com/nodef/extra-iterable/wiki/every
[forEach]: https://github.com/nodef/extra-iterable/wiki/forEach
[isEmpty]: https://github.com/nodef/extra-iterable/wiki/isEmpty
[accumulate]: https://github.com/nodef/extra-iterable/wiki/accumulate
[symmetricDifference]: https://github.com/nodef/extra-iterable/wiki/symmetricDifference
[scanWhile]: https://github.com/nodef/extra-iterable/wiki/scanWhile
[:vhs:]: https://asciinema.org/a/339719
