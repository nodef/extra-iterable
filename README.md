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
[...iterable.cycle(x, 4)];
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
| [size]                | Counts the number of values.
| [iterator]            | Gives iterator for iterable.
| [from]                | Converts iterator to iterable.
|                       |
| [fill]                | Fills with given value.
| [copy]                | Copies part of iterable to another.
| [concat]              | Appends iterables together.
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
|                       |
| [min]                 | Finds smallest value.
| [max]                 | Finds largest value.
| [range]               | Finds smallest and largest values.
| [map]                 | Updates values based on map function.
| [reduce]              | Reduces values to a single value.
| [filter]              | Keeps the values which pass a test.
| [count]               | Counts values which satisfy a test.
| [partition]           | Segregates values by test result.
| [group]               | Keeps similar values together and in order.
| [split]               | Breaks iterable considering test as separator.
| [zip]                 | Combines values from iterables.
| [join]                | Joins values together.
|                       |
| [unique]              | Removes duplicate values.
| [union]               | Gives values present in any iterable.
| [intersection]        | Gives values present in both iterables.
| [difference]          | Gives values of an iterable not present in another.
| [isUnique]            | Checks if there are no duplicate values.
| [isDisjoint]          | Checks if iterables have no value in common.
|                       |
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
[is]: https://github.com/nodef/extra-iterable/wiki/is
[chunk]: https://github.com/nodef/extra-iterable/wiki/chunk
[compare]: https://github.com/nodef/extra-iterable/wiki/compare
[concat]: https://github.com/nodef/extra-iterable/wiki/concat
[copy]: https://github.com/nodef/extra-iterable/wiki/copy
[count]: https://github.com/nodef/extra-iterable/wiki/count
[cut]: https://github.com/nodef/extra-iterable/wiki/cut
[cycle]: https://github.com/nodef/extra-iterable/wiki/cycle
[difference]: https://github.com/nodef/extra-iterable/wiki/difference
[every]: https://github.com/nodef/extra-iterable/wiki/every
[fill]: https://github.com/nodef/extra-iterable/wiki/fill
[filter]: https://github.com/nodef/extra-iterable/wiki/filter
[find]: https://github.com/nodef/extra-iterable/wiki/find
[findIndex]: https://github.com/nodef/extra-iterable/wiki/findIndex
[flat]: https://github.com/nodef/extra-iterable/wiki/flat
[forEach]: https://github.com/nodef/extra-iterable/wiki/forEach
[from]: https://github.com/nodef/extra-iterable/wiki/from
[get]: https://github.com/nodef/extra-iterable/wiki/get
[group]: https://github.com/nodef/extra-iterable/wiki/group
[head]: https://github.com/nodef/extra-iterable/wiki/head
[index]: https://github.com/nodef/extra-iterable/wiki/index
[indexRange]: https://github.com/nodef/extra-iterable/wiki/indexRange
[init]: https://github.com/nodef/extra-iterable/wiki/init
[interleave]: https://github.com/nodef/extra-iterable/wiki/interleave
[intersection]: https://github.com/nodef/extra-iterable/wiki/intersection
[isDisjoint]: https://github.com/nodef/extra-iterable/wiki/isDisjoint
[isEqual]: https://github.com/nodef/extra-iterable/wiki/isEqual
[isInfix]: https://github.com/nodef/extra-iterable/wiki/isInfix
[isIterator]: https://github.com/nodef/extra-iterable/wiki/isIterator
[is]: https://github.com/nodef/extra-iterable/wiki/is
[isList]: https://github.com/nodef/extra-iterable/wiki/isList
[isPrefix]: https://github.com/nodef/extra-iterable/wiki/isPrefix
[isSubsequence]: https://github.com/nodef/extra-iterable/wiki/isSubsequence
[isSuffix]: https://github.com/nodef/extra-iterable/wiki/isSuffix
[isUnique]: https://github.com/nodef/extra-iterable/wiki/isUnique
[iterator]: https://github.com/nodef/extra-iterable/wiki/iterator
[join]: https://github.com/nodef/extra-iterable/wiki/join
[last]: https://github.com/nodef/extra-iterable/wiki/last
[length]: https://github.com/nodef/extra-iterable/wiki/length
[map]: https://github.com/nodef/extra-iterable/wiki/map
[max]: https://github.com/nodef/extra-iterable/wiki/max
[min]: https://github.com/nodef/extra-iterable/wiki/min
[partition]: https://github.com/nodef/extra-iterable/wiki/partition
[pop]: https://github.com/nodef/extra-iterable/wiki/pop
[push]: https://github.com/nodef/extra-iterable/wiki/push
[range]: https://github.com/nodef/extra-iterable/wiki/range
[reduce]: https://github.com/nodef/extra-iterable/wiki/reduce
[repeat]: https://github.com/nodef/extra-iterable/wiki/repeat
[search]: https://github.com/nodef/extra-iterable/wiki/search
[set]: https://github.com/nodef/extra-iterable/wiki/set
[shift]: https://github.com/nodef/extra-iterable/wiki/shift
[size]: https://github.com/nodef/extra-iterable/wiki/size
[slice]: https://github.com/nodef/extra-iterable/wiki/slice
[some]: https://github.com/nodef/extra-iterable/wiki/some
[splice]: https://github.com/nodef/extra-iterable/wiki/splice
[split]: https://github.com/nodef/extra-iterable/wiki/split
[swap]: https://github.com/nodef/extra-iterable/wiki/swap
[tail]: https://github.com/nodef/extra-iterable/wiki/tail
[union]: https://github.com/nodef/extra-iterable/wiki/union
[unique]: https://github.com/nodef/extra-iterable/wiki/unique
[unshift]: https://github.com/nodef/extra-iterable/wiki/unshift
[zip]: https://github.com/nodef/extra-iterable/wiki/zip
[:running:]: https://npm.runkit.com/extra-iterable
[:package:]: https://www.npmjs.com/package/extra-iterable
[:moon:]: https://www.npmjs.com/package/extra-iterable.min
[:vhs:]: https://asciinema.org/a/328696
[rotate]: https://github.com/nodef/extra-iterable/wiki/rotate
[reverse]: https://github.com/nodef/extra-iterable/wiki/reverse
[:ledger:]: https://unpkg.com/extra-iterable/
