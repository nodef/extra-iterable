A collection of functions for operating upon iterables.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-iterable),
🌐 [Web](https://www.npmjs.com/package/extra-iterable.web),
📜 [Files](https://unpkg.com/extra-iterable/),
📰 [Docs](https://nodef.github.io/extra-iterable/),
📘 [Wiki](https://github.com/nodef/extra-iterable/wiki/).

An [iterable] is a sequence of values. Assumption here is that an iterable can
only be iterated over once. Methods which require multiple iterations preserve
old values in a backup array using [toMany]. Many methods accept both compare
and map functions, and in some cases using **only** a map function enables
*faster comparision* (like [unique]). I borrowed a lot of ideas from Haskell,
Elm, Python, Basic, Lodash, and other NPM packages. These are mentioned in
references of each method.

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_iterable` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-iterable.web/index.js

<br>

```javascript
const iterable = require('extra-iterable');
// import * as iterable from "extra-iterable";
// import * as iterable from "https://unpkg.com/extra-iterable/index.mjs"; (deno)

var x = [2, 4, 6, 8];
iterable.get(x, 1);
// → 4

var x = [1, 2, 3, 4];
[...iterable.swap(x, 0, 1)];
// → [ 2, 1, 3, 4 ]

var x = [1, 2, 3];
[...iterable.cycle(x, 0, 4)];
// → [1, 2, 3, 1]

var x = [1, 2, 3, 4];
iterable.reduce(x, (acc, v) => acc+v);
// → 10
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [is] | Check if value is an iterable. |
| [isIterator] | Check if value is an iterator. |
| [isList] | Check if value is a list (iterable & !string). |
| [iterator] | Get iterator of an iterable. |
| [keys] | List all indices. |
| [values] | List all values. |
| [entries] | List all index-value pairs. |
|  |  |
| [from] | Convert an iterable-like to iterable. |
| [fromIterator] | Convert an iterator to iterable. |
| [fromRange] | Generate iterable from given number range. |
| [fromInvocation] | Generate iterable from repeated function invocation. |
| [fromApplication] | Generate iterable from repeated function application. |
|  |  |
| [isOnce] | Check if an iterable can iterated only once. |
| [isMany] | Check if an iterable can be iterated many times. |
| [toMany] | Convert a once-like iterable to many. |
| [toInvokable] | Generate a function that iterates over values upon invocation. |
|  |  |
| [isEmpty] | Check if an iterable is empty. |
| [length] | Find the length of an iterable. |
|  |  |
| [compare] | Compare two iterables. |
| [isEqual] | Check if two iterables are equal. |
|  |  |
| [index] | Get zero-based index for element in iterable. |
| [indexRange] | Get index range for part of iterable. |
| [get] | Get value at index. |
| [getAll] | Get values at indices. |
| [getPath] | Get value at path in a nested iterable. |
| [hasPath] | Check if nested iterable has a path. |
| [set] | Set value at index. |
| [swap] | Exchange two values. |
| [remove] | Remove value at index. |
|  |  |
| [count] | Count values which satisfy a test. |
| [countAs] | Count occurrences of values. |
| [min] | Find smallest value. |
| [max] | Find largest value. |
| [range] | Find smallest and largest values. |
| [minEntry] | Find smallest entry. |
| [maxEntry] | Find largest entry. |
| [rangeEntries] | Find smallest and largest entries. |
|  |  |
| [slice] | Get part of an iterable. |
| [head] | Get first value. |
| [last] | Get last value. |
| [tail] | Get values except first. |
| [init] | Get values except last. |
| [left] | Get values from left. |
| [right] | Get values from right. |
| [middle] | Get values from middle. |
| [take] | Keep first n values only. |
| [takeRight] | Keep last n values only. |
| [takeWhile] | Keep values from left, while a test passes. |
| [takeWhileRight] | Keep values from right, while a test passes. |
| [drop] | Discard first n values only. |
| [dropRight] | Discard last n values only. |
| [dropWhile] | Discard values from left, while a test passes. |
| [dropWhileRight] | Discard values from right, while a test passes. |
|  |  |
| [includes] | Check if iterable has a value. |
| [indexOf] | Find first index of a value. |
| [lastIndexOf] | Find last index of a value. |
| [find] | Find first value passing a test. |
| [findRight] | Find last value passing a test. |
| [scanWhile] | Scan from left, while a test passes. |
| [scanWhileRight] | Scan from right, while a test passes. |
| [scanUntil] | Scan from left, until a test passes. |
| [scanUntilRight] | Scan from right, until a test passes. |
| [search] | Find index of first value passing a test. |
| [searchRight] | Find index of last value passing a test. |
| [searchAll] | Find indices of values passing a test. |
| [searchValue] | Find first index of a value. |
| [searchValueRight] | Find last index of a value. |
| [searchValueAll] | Find indices of a value. |
| [searchInfix] | Find first index of an infix. |
| [searchInfixRight] | Find last index of an infix. |
| [searchInfixAll] | Find indices of an infix. |
| [searchSubsequence] | Find first index of a subsequence. |
| [hasValue] | Check if iterable has a value. |
| [hasPrefix] | Check if iterable starts with a prefix. |
| [hasSuffix] | Check if iterable ends with a suffix. |
| [hasInfix] | Check if iterable contains an infix. |
| [hasSubsequence] | Check if iterable has a subsequence. |
|  |  |
| [forEach] | Call a function for each value. |
| [some] | Check if any value satisfies a test. |
| [every] | Check if all values satisfy a test. |
| [map] | Transform values of an iterable. |
| [reduce] | Reduce values of iterable to a single value. |
| [filter] | Keep the values which pass a test. |
| [filterAt] | Keep the values at given indices. |
| [reject] | Discard the values which pass a test. |
| [rejectAt] | Discard the values at given indices. |
| [accumulate] | Produce accumulating values. |
| [flat] | Flatten nested iterable to given depth. |
| [flatMap] | Flatten nested iterable, based on map function. |
| [zip] | Combine values from iterables. |
|  |  |
| [fill] | Fill with given value. |
| [push] | Add values to the end. |
| [unshift] | Add values to the start. |
| [copy] | Copy part of iterable to another. |
| [copyWithin] | Copy part of iterable within. |
| [moveWithin] | Move part of iterable within. |
| [splice] | Remove or replaces existing values. |
| [split] | Break iterable considering test as separator. |
| [splitAt] | Break iterable considering indices as separator. |
| [cut] | Break iterable when test passes. |
| [cutRight] | Break iterable after test passes. |
| [cutAt] | Break iterable at given indices. |
| [cutAtRight] | Break iterable after given indices. |
| [group] | Keep similar values together and in order. |
| [partition] | Segregate values by test result. |
| [partitionAs] | Segregate values by similarity. |
| [chunk] | Break iterable into chunks of given size. |
| [cycle] | Give values that cycle through an iterable. |
| [repeat] | Repeat an iterable given times. |
| [reverse] | Reverse the values. |
| [rotate] | Rotate values in iterable. |
| [intersperse] | Place a separator between every value. |
| [interpolate] | Estimate new values between existing ones. |
| [intermix] | Place values of an iterable between another. |
| [interleave] | Place values from iterables alternately. |
|  |  |
| [concat] | Append values from iterables. |
| [merge] | Merge values from sorted iterables. |
| [join] | Join values together into a string. |
|  |  |
| [isUnique] | Check if there are no duplicate values. |
| [isDisjoint] | Checks if arrays have no value in common. |
| [unique] | Remove duplicate values. |
| [union] | Give values present in any iterable. |
| [intersection] | Give values present in both iterables. |
| [difference] | Give values not present in another iterable. |
| [symmetricDifference] | Give values not present in both iterables. |
| [cartesianProduct] | List cartesian product of iterables. |

<br>
<br>


[![](https://img.youtube.com/vi/qgxPbqDskyw/maxresdefault.jpg)](https://www.youtube.com/watch?v=qgxPbqDskyw)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/133694055.svg)](https://zenodo.org/badge/latestdoi/133694055)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-iterable/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-iterable?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1ba4b1b22418456df9f9/test_coverage)](https://codeclimate.com/github/nodef/extra-iterable/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/1ba4b1b22418456df9f9/maintainability)](https://codeclimate.com/github/nodef/extra-iterable/maintainability)


[is]: https://github.com/nodef/extra-iterable/wiki/is
[isIterator]: https://github.com/nodef/extra-iterable/wiki/isIterator
[isList]: https://github.com/nodef/extra-iterable/wiki/isList
[iterator]: https://github.com/nodef/extra-iterable/wiki/iterator
[keys]: https://github.com/nodef/extra-iterable/wiki/keys
[values]: https://github.com/nodef/extra-iterable/wiki/values
[entries]: https://github.com/nodef/extra-iterable/wiki/entries
[from]: https://github.com/nodef/extra-iterable/wiki/from
[fromIterator]: https://github.com/nodef/extra-iterable/wiki/fromIterator
[fromRange]: https://github.com/nodef/extra-iterable/wiki/fromRange
[fromInvocation]: https://github.com/nodef/extra-iterable/wiki/fromInvocation
[fromApplication]: https://github.com/nodef/extra-iterable/wiki/fromApplication
[isOnce]: https://github.com/nodef/extra-iterable/wiki/isOnce
[isMany]: https://github.com/nodef/extra-iterable/wiki/isMany
[toMany]: https://github.com/nodef/extra-iterable/wiki/toMany
[toInvokable]: https://github.com/nodef/extra-iterable/wiki/toInvokable
[isEmpty]: https://github.com/nodef/extra-iterable/wiki/isEmpty
[length]: https://github.com/nodef/extra-iterable/wiki/length
[compare]: https://github.com/nodef/extra-iterable/wiki/compare
[isEqual]: https://github.com/nodef/extra-iterable/wiki/isEqual
[index]: https://github.com/nodef/extra-iterable/wiki/index
[indexRange]: https://github.com/nodef/extra-iterable/wiki/indexRange
[get]: https://github.com/nodef/extra-iterable/wiki/get
[getAll]: https://github.com/nodef/extra-iterable/wiki/getAll
[getPath]: https://github.com/nodef/extra-iterable/wiki/getPath
[hasPath]: https://github.com/nodef/extra-iterable/wiki/hasPath
[set]: https://github.com/nodef/extra-iterable/wiki/set
[swap]: https://github.com/nodef/extra-iterable/wiki/swap
[remove]: https://github.com/nodef/extra-iterable/wiki/remove
[count]: https://github.com/nodef/extra-iterable/wiki/count
[countAs]: https://github.com/nodef/extra-iterable/wiki/countAs
[min]: https://github.com/nodef/extra-iterable/wiki/min
[max]: https://github.com/nodef/extra-iterable/wiki/max
[range]: https://github.com/nodef/extra-iterable/wiki/range
[minEntry]: https://github.com/nodef/extra-iterable/wiki/minEntry
[maxEntry]: https://github.com/nodef/extra-iterable/wiki/maxEntry
[rangeEntries]: https://github.com/nodef/extra-iterable/wiki/rangeEntries
[slice]: https://github.com/nodef/extra-iterable/wiki/slice
[head]: https://github.com/nodef/extra-iterable/wiki/head
[last]: https://github.com/nodef/extra-iterable/wiki/last
[tail]: https://github.com/nodef/extra-iterable/wiki/tail
[init]: https://github.com/nodef/extra-iterable/wiki/init
[left]: https://github.com/nodef/extra-iterable/wiki/left
[right]: https://github.com/nodef/extra-iterable/wiki/right
[middle]: https://github.com/nodef/extra-iterable/wiki/middle
[take]: https://github.com/nodef/extra-iterable/wiki/take
[takeRight]: https://github.com/nodef/extra-iterable/wiki/takeRight
[takeWhile]: https://github.com/nodef/extra-iterable/wiki/takeWhile
[takeWhileRight]: https://github.com/nodef/extra-iterable/wiki/takeWhileRight
[drop]: https://github.com/nodef/extra-iterable/wiki/drop
[dropRight]: https://github.com/nodef/extra-iterable/wiki/dropRight
[dropWhile]: https://github.com/nodef/extra-iterable/wiki/dropWhile
[dropWhileRight]: https://github.com/nodef/extra-iterable/wiki/dropWhileRight
[includes]: https://github.com/nodef/extra-iterable/wiki/includes
[indexOf]: https://github.com/nodef/extra-iterable/wiki/indexOf
[lastIndexOf]: https://github.com/nodef/extra-iterable/wiki/lastIndexOf
[find]: https://github.com/nodef/extra-iterable/wiki/find
[findRight]: https://github.com/nodef/extra-iterable/wiki/findRight
[scanWhile]: https://github.com/nodef/extra-iterable/wiki/scanWhile
[scanWhileRight]: https://github.com/nodef/extra-iterable/wiki/scanWhileRight
[scanUntil]: https://github.com/nodef/extra-iterable/wiki/scanUntil
[scanUntilRight]: https://github.com/nodef/extra-iterable/wiki/scanUntilRight
[search]: https://github.com/nodef/extra-iterable/wiki/search
[searchRight]: https://github.com/nodef/extra-iterable/wiki/searchRight
[searchAll]: https://github.com/nodef/extra-iterable/wiki/searchAll
[searchValue]: https://github.com/nodef/extra-iterable/wiki/searchValue
[searchValueRight]: https://github.com/nodef/extra-iterable/wiki/searchValueRight
[searchValueAll]: https://github.com/nodef/extra-iterable/wiki/searchValueAll
[searchInfix]: https://github.com/nodef/extra-iterable/wiki/searchInfix
[searchInfixRight]: https://github.com/nodef/extra-iterable/wiki/searchInfixRight
[searchInfixAll]: https://github.com/nodef/extra-iterable/wiki/searchInfixAll
[searchSubsequence]: https://github.com/nodef/extra-iterable/wiki/searchSubsequence
[hasValue]: https://github.com/nodef/extra-iterable/wiki/hasValue
[hasPrefix]: https://github.com/nodef/extra-iterable/wiki/hasPrefix
[hasSuffix]: https://github.com/nodef/extra-iterable/wiki/hasSuffix
[hasInfix]: https://github.com/nodef/extra-iterable/wiki/hasInfix
[hasSubsequence]: https://github.com/nodef/extra-iterable/wiki/hasSubsequence
[forEach]: https://github.com/nodef/extra-iterable/wiki/forEach
[some]: https://github.com/nodef/extra-iterable/wiki/some
[every]: https://github.com/nodef/extra-iterable/wiki/every
[map]: https://github.com/nodef/extra-iterable/wiki/map
[reduce]: https://github.com/nodef/extra-iterable/wiki/reduce
[filter]: https://github.com/nodef/extra-iterable/wiki/filter
[filterAt]: https://github.com/nodef/extra-iterable/wiki/filterAt
[reject]: https://github.com/nodef/extra-iterable/wiki/reject
[rejectAt]: https://github.com/nodef/extra-iterable/wiki/rejectAt
[accumulate]: https://github.com/nodef/extra-iterable/wiki/accumulate
[flat]: https://github.com/nodef/extra-iterable/wiki/flat
[flatMap]: https://github.com/nodef/extra-iterable/wiki/flatMap
[zip]: https://github.com/nodef/extra-iterable/wiki/zip
[fill]: https://github.com/nodef/extra-iterable/wiki/fill
[push]: https://github.com/nodef/extra-iterable/wiki/push
[unshift]: https://github.com/nodef/extra-iterable/wiki/unshift
[copy]: https://github.com/nodef/extra-iterable/wiki/copy
[copyWithin]: https://github.com/nodef/extra-iterable/wiki/copyWithin
[moveWithin]: https://github.com/nodef/extra-iterable/wiki/moveWithin
[splice]: https://github.com/nodef/extra-iterable/wiki/splice
[split]: https://github.com/nodef/extra-iterable/wiki/split
[splitAt]: https://github.com/nodef/extra-iterable/wiki/splitAt
[cut]: https://github.com/nodef/extra-iterable/wiki/cut
[cutRight]: https://github.com/nodef/extra-iterable/wiki/cutRight
[cutAt]: https://github.com/nodef/extra-iterable/wiki/cutAt
[cutAtRight]: https://github.com/nodef/extra-iterable/wiki/cutAtRight
[group]: https://github.com/nodef/extra-iterable/wiki/group
[partition]: https://github.com/nodef/extra-iterable/wiki/partition
[partitionAs]: https://github.com/nodef/extra-iterable/wiki/partitionAs
[chunk]: https://github.com/nodef/extra-iterable/wiki/chunk
[cycle]: https://github.com/nodef/extra-iterable/wiki/cycle
[repeat]: https://github.com/nodef/extra-iterable/wiki/repeat
[reverse]: https://github.com/nodef/extra-iterable/wiki/reverse
[rotate]: https://github.com/nodef/extra-iterable/wiki/rotate
[intersperse]: https://github.com/nodef/extra-iterable/wiki/intersperse
[interpolate]: https://github.com/nodef/extra-iterable/wiki/interpolate
[intermix]: https://github.com/nodef/extra-iterable/wiki/intermix
[interleave]: https://github.com/nodef/extra-iterable/wiki/interleave
[concat]: https://github.com/nodef/extra-iterable/wiki/concat
[merge]: https://github.com/nodef/extra-iterable/wiki/merge
[join]: https://github.com/nodef/extra-iterable/wiki/join
[isUnique]: https://github.com/nodef/extra-iterable/wiki/isUnique
[isDisjoint]: https://github.com/nodef/extra-iterable/wiki/isDisjoint
[unique]: https://github.com/nodef/extra-iterable/wiki/unique
[union]: https://github.com/nodef/extra-iterable/wiki/union
[intersection]: https://github.com/nodef/extra-iterable/wiki/intersection
[difference]: https://github.com/nodef/extra-iterable/wiki/difference
[symmetricDifference]: https://github.com/nodef/extra-iterable/wiki/symmetricDifference
[cartesianProduct]: https://github.com/nodef/extra-iterable/wiki/cartesianProduct
