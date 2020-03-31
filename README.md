An [iterable] is a sequence of values.

Methods look like:
- `unique()`: dont modify the array itself (default).
- `uniqueOn()`: accepts a map function *for faster comparision* (map).

I find this map-approach beautiful, which i learned from Haskell's `sortOn()`.
You can notice that i have followed Javascript naming scheme as far as possible.
Some names are borrowed from Haskell, Python, Java, Processing. Each method is
also available as separate package for use by bundling tools, like [browserify],
[rollup], [uglify-js].

> Stability: Experimental.

```javascript
const iterable = require('extra-iterable');

iterable.get([1, 2, 3], 1);
// 2

var x = [1, 2, 3, 4];
[...iterable.swap(x, 0, 1)];
// [2, 1, 3, 4]

var x = [1, 2, 3];
[...iterable.cycle(x, 4)];
// [1, 2, 3, 1]

var x = [1, 2, 3, 4];
[...iterable.reduce(x, (acc, v) => acc+v)];
// 10
```

### reference

| Method                | Action
|-----------------------|-------
| [is]                  | Checks if value is an iterable.
| [chunk]               | Breaks iterable into chunks of given size.
| [compare]             | Compares two iterables.
| [concat]              | Appends iterables to the end.
| [copy]                | Copies part of iterable to another.
| [count]               | Counts values which satisfy a test.
| [cut]                 | Breaks iterable at given indices.
| [cycle]               | Gives values that cycle through an iterable.
| [difference]          | Gives values of an iterable not present in another.
| [every]               | Checks if all values satisfy a test.
| [fill]                | Fills with given value.
| [filter]              | Keeps values which pass a test.
| [find]                | Finds leftmost value passing the test.
| [findIndex]           | Finds index of leftmost value passing the test.
| [flat]                | Flattens nested iterable to given depth.
| [forEach]             | Calls a function for each value.
| [from]                | Converts an iterator to iterable.
| [get]                 | Gets value at index.
| [group]               | Keeps similar values together and in order.
| [head]                | Gets first value.
| [index]               | Gets zero-based index.
| [indexRange]          | Gets index range of part of iterable.
| [init]                | Gets values except last.
| [interleave]          | Places values of an iterable between another.
| [intersection]        | Gives values present in both iterables.
| [isDisjoint]          | Checks if iterables have no value in common.
| [isEqual]             | Checks if two iterables are equal.
| [isInfix]             | Checks if iterable contains an infix.
| [isIterator]          | Checks if value is an iterator (can iterate only once).
| [is]                  | Checks if value is iterable.
| [isList]              | Checks if value is a list (not string).
| [isPrefix]            | Checks if iterable starts with a prefix.
| [isSubsequence]       | Checks if iterable has a subsequence.
| [isSuffix]            | Checks if iterable ends with a suffix.
| [isUnique]            | Checks if there are no duplicate values.
| [iterator]            | Gives iterator for iterable.
| [join]                | Joins values together.
| [last]                | Gets last value.
| [length]              | Counts the number of values.
| [map]                 | Updates values based on map function.
| [max]                 | Finds largest value.
| [min]                 | Finds smallest value.
| [partition]           | Segregates iterable keeping similar values together.
| [pop]                 | Removes last value.
| [push]                | Adds values to the end. 
| [range]               | Finds smallest and largest values.
| [reduce]              | Reduces values to a single value.
| [repeat]              | Repeats an iterable given times.
| [search]              | Searches a value from left.
| [set]                 | Sets value at index.
| [shift]               | Removes first value.
| [size]                | Counts the number of values.
| [slice]               | Gets a part of iterable.
| [some]                | Checks if any value satisfies a test.
| [splice]              | Removes or replaces existing values.
| [split]               | Breaks iterable considering test as separator.
| [swap]                | Exchanges two values.
| [tail]                | Gets values except first.
| [union]               | Gives values present in any iterable.
| [unique]              | Removes duplicate values.
| [unshift]             | Adds values to the start.
| [zip]                 | Combines values from n iterables.


[![nodef](https://merferry.glitch.me/card/extra-iterable.svg)](https://nodef.github.io)

> Browserified, minified version of this package is [extra-iterable.min].

[is]: https://github.com/nodef/extra-array/wiki/is
[chunk]: https://github.com/nodef/extra-array/wiki/chunk
[compare]: https://github.com/nodef/extra-array/wiki/compare
[concat]: https://github.com/nodef/extra-array/wiki/concat
[copy]: https://github.com/nodef/extra-array/wiki/copy
[count]: https://github.com/nodef/extra-array/wiki/count
[cut]: https://github.com/nodef/extra-array/wiki/cut
[cycle]: https://github.com/nodef/extra-array/wiki/cycle
[difference]: https://github.com/nodef/extra-array/wiki/difference
[every]: https://github.com/nodef/extra-array/wiki/every
[fill]: https://github.com/nodef/extra-array/wiki/fill
[filter]: https://github.com/nodef/extra-array/wiki/filter
[find]: https://github.com/nodef/extra-array/wiki/find
[findIndex]: https://github.com/nodef/extra-array/wiki/findIndex
[flat]: https://github.com/nodef/extra-array/wiki/flat
[forEach]: https://github.com/nodef/extra-array/wiki/forEach
[from]: https://github.com/nodef/extra-array/wiki/from
[get]: https://github.com/nodef/extra-array/wiki/get
[group]: https://github.com/nodef/extra-array/wiki/group
[head]: https://github.com/nodef/extra-array/wiki/head
[index]: https://github.com/nodef/extra-array/wiki/index
[indexRange]: https://github.com/nodef/extra-array/wiki/indexRange
[init]: https://github.com/nodef/extra-array/wiki/init
[interleave]: https://github.com/nodef/extra-array/wiki/interleave
[intersection]: https://github.com/nodef/extra-array/wiki/intersection
[isDisjoint]: https://github.com/nodef/extra-array/wiki/isDisjoint
[isEqual]: https://github.com/nodef/extra-array/wiki/isEqual
[isInfix]: https://github.com/nodef/extra-array/wiki/isInfix
[isIterator]: https://github.com/nodef/extra-array/wiki/isIterator
[is]: https://github.com/nodef/extra-array/wiki/is
[isList]: https://github.com/nodef/extra-array/wiki/isList
[isPrefix]: https://github.com/nodef/extra-array/wiki/isPrefix
[isSubsequence]: https://github.com/nodef/extra-array/wiki/isSubsequence
[isSuffix]: https://github.com/nodef/extra-array/wiki/isSuffix
[isUnique]: https://github.com/nodef/extra-array/wiki/isUnique
[iterator]: https://github.com/nodef/extra-array/wiki/iterator
[join]: https://github.com/nodef/extra-array/wiki/join
[last]: https://github.com/nodef/extra-array/wiki/last
[length]: https://github.com/nodef/extra-array/wiki/length
[map]: https://github.com/nodef/extra-array/wiki/map
[max]: https://github.com/nodef/extra-array/wiki/max
[min]: https://github.com/nodef/extra-array/wiki/min
[partition]: https://github.com/nodef/extra-array/wiki/partition
[pop]: https://github.com/nodef/extra-array/wiki/pop
[push]: https://github.com/nodef/extra-array/wiki/push
[range]: https://github.com/nodef/extra-array/wiki/range
[reduce]: https://github.com/nodef/extra-array/wiki/reduce
[repeat]: https://github.com/nodef/extra-array/wiki/repeat
[search]: https://github.com/nodef/extra-array/wiki/search
[set]: https://github.com/nodef/extra-array/wiki/set
[shift]: https://github.com/nodef/extra-array/wiki/shift
[size]: https://github.com/nodef/extra-array/wiki/size
[slice]: https://github.com/nodef/extra-array/wiki/slice
[some]: https://github.com/nodef/extra-array/wiki/some
[splice]: https://github.com/nodef/extra-array/wiki/splice
[split]: https://github.com/nodef/extra-array/wiki/split
[swap]: https://github.com/nodef/extra-array/wiki/swap
[tail]: https://github.com/nodef/extra-array/wiki/tail
[union]: https://github.com/nodef/extra-array/wiki/union
[unique]: https://github.com/nodef/extra-array/wiki/unique
[unshift]: https://github.com/nodef/extra-array/wiki/unshift
[zip]: https://github.com/nodef/extra-array/wiki/zip
[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[extra-iterable.min]: https://www.npmjs.com/package/extra-iterable.min
