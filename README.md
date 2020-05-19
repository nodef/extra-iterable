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
| [head]                | Gets first value.
| [index]               | Gets zero-based index.
| [indexRange]          | Gets index range of part of iterable.
| [size]                | Counts the number of values.
| [entries]             | Lists all index-value pairs.
| [iterator]            | Gives iterator for iterable.
| [many]                | Converts a once iterable to many.
| [from]                | Converts iterator to iterable.
|                       |
| [push]                | Adds values to the end. 
| [fill]                | Fills with given value.
| [copy]                | Copies part of iterable to another.
| [concat]              | Appends iterables together.
| [left]                | Gets values from the left.
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
| [merge]               | Merges values from sorted iterables.
|                       |
| [min]                 | Finds smallest value.
| [max]                 | Finds largest value.
| [range]               | Finds smallest and largest values.
| [map]                 | Updates values based on map function.
| [reduce]              | Reduces values to a single value.
| [filter]              | Keeps the values which pass a test.
| [take]                | Extracts given number of values from iterable.
| [drop]                | Drops given number of values from iterable.
| [count]               | Counts values which satisfy a test.
| [partition]           | Segregates values by test result.
| [group]               | Keeps similar values together and in order.
| [split]               | Breaks iterable considering test as separator.
| [join]                | Joins values together.
| [cartesianProduct]    | Lists cartesian product of iterables.
| [zip]                 | Combines values from iterables.
|                       |
| [unique]              | Removes duplicate values.
| [union]               | Gives values present in any iterable.
| [intersection]        | Gives values present in both iterables.
| [difference]          | Gives values of an iterable not present in another.
| [isUnique]            | Checks if there are no duplicate values.
| [isDisjoint]          | Checks if iterables have no value in common.
|                       |
| [isValue]             | Checks if iterable has a value.
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
[findIndex]: https://github.com/nodef/extra-iterable/wiki/findIndex
[some]: https://github.com/nodef/extra-iterable/wiki/some
[every]: https://github.com/nodef/extra-iterable/wiki/every
[forEach]: https://github.com/nodef/extra-iterable/wiki/forEach
[:vhs:]: https://asciinema.org/a/331910
