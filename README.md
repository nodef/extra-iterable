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
| [indexRange] | Gets index range for part of iterable. |
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
[![DOI](https://zenodo.org/badge/133694055.svg)](https://zenodo.org/badge/latestdoi/133694055)


[is]: https://nodef.github.io/extra-iterable/functions/is.html
[isIterator]: https://nodef.github.io/extra-iterable/functions/isIterator.html
[isList]: https://nodef.github.io/extra-iterable/functions/isList.html
[iterator]: https://nodef.github.io/extra-iterable/functions/iterator.html
[keys]: https://nodef.github.io/extra-iterable/functions/keys.html
[values]: https://nodef.github.io/extra-iterable/functions/values.html
[entries]: https://nodef.github.io/extra-iterable/functions/entries.html
[from]: https://nodef.github.io/extra-iterable/functions/from.html
[fromIterator]: https://nodef.github.io/extra-iterable/functions/fromIterator.html
[fromRange]: https://nodef.github.io/extra-iterable/functions/fromRange.html
[fromInvocation]: https://nodef.github.io/extra-iterable/functions/fromInvocation.html
[fromApplication]: https://nodef.github.io/extra-iterable/functions/fromApplication.html
[isOnce]: https://nodef.github.io/extra-iterable/functions/isOnce.html
[isMany]: https://nodef.github.io/extra-iterable/functions/isMany.html
[toMany]: https://nodef.github.io/extra-iterable/functions/toMany.html
[toInvokable]: https://nodef.github.io/extra-iterable/functions/toInvokable.html
[isEmpty]: https://nodef.github.io/extra-iterable/functions/isEmpty.html
[length]: https://nodef.github.io/extra-iterable/functions/length.html
[compare]: https://nodef.github.io/extra-iterable/functions/compare.html
[isEqual]: https://nodef.github.io/extra-iterable/functions/isEqual.html
[index]: https://nodef.github.io/extra-iterable/functions/index.html
[indexRange]: https://nodef.github.io/extra-iterable/functions/indexRange.html
[get]: https://nodef.github.io/extra-iterable/functions/get.html
[getAll]: https://nodef.github.io/extra-iterable/functions/getAll.html
[getPath]: https://nodef.github.io/extra-iterable/functions/getPath.html
[hasPath]: https://nodef.github.io/extra-iterable/functions/hasPath.html
[set]: https://nodef.github.io/extra-iterable/functions/set.html
[swap]: https://nodef.github.io/extra-iterable/functions/swap.html
[remove]: https://nodef.github.io/extra-iterable/functions/remove.html
[count]: https://nodef.github.io/extra-iterable/functions/count.html
[countAs]: https://nodef.github.io/extra-iterable/functions/countAs.html
[min]: https://nodef.github.io/extra-iterable/functions/min.html
[max]: https://nodef.github.io/extra-iterable/functions/max.html
[range]: https://nodef.github.io/extra-iterable/functions/range.html
[minEntry]: https://nodef.github.io/extra-iterable/functions/minEntry.html
[maxEntry]: https://nodef.github.io/extra-iterable/functions/maxEntry.html
[rangeEntries]: https://nodef.github.io/extra-iterable/functions/rangeEntries.html
[slice]: https://nodef.github.io/extra-iterable/functions/slice.html
[head]: https://nodef.github.io/extra-iterable/functions/head.html
[last]: https://nodef.github.io/extra-iterable/functions/last.html
[tail]: https://nodef.github.io/extra-iterable/functions/tail.html
[init]: https://nodef.github.io/extra-iterable/functions/init.html
[left]: https://nodef.github.io/extra-iterable/functions/left.html
[right]: https://nodef.github.io/extra-iterable/functions/right.html
[middle]: https://nodef.github.io/extra-iterable/functions/middle.html
[take]: https://nodef.github.io/extra-iterable/functions/take.html
[takeRight]: https://nodef.github.io/extra-iterable/functions/takeRight.html
[takeWhile]: https://nodef.github.io/extra-iterable/functions/takeWhile.html
[takeWhileRight]: https://nodef.github.io/extra-iterable/functions/takeWhileRight.html
[drop]: https://nodef.github.io/extra-iterable/functions/drop.html
[dropRight]: https://nodef.github.io/extra-iterable/functions/dropRight.html
[dropWhile]: https://nodef.github.io/extra-iterable/functions/dropWhile.html
[dropWhileRight]: https://nodef.github.io/extra-iterable/functions/dropWhileRight.html
[includes]: https://nodef.github.io/extra-iterable/functions/includes.html
[indexOf]: https://nodef.github.io/extra-iterable/functions/indexOf.html
[lastIndexOf]: https://nodef.github.io/extra-iterable/functions/lastIndexOf.html
[find]: https://nodef.github.io/extra-iterable/functions/find.html
[findRight]: https://nodef.github.io/extra-iterable/functions/findRight.html
[scanWhile]: https://nodef.github.io/extra-iterable/functions/scanWhile.html
[scanWhileRight]: https://nodef.github.io/extra-iterable/functions/scanWhileRight.html
[scanUntil]: https://nodef.github.io/extra-iterable/functions/scanUntil.html
[scanUntilRight]: https://nodef.github.io/extra-iterable/functions/scanUntilRight.html
[search]: https://nodef.github.io/extra-iterable/functions/search.html
[searchRight]: https://nodef.github.io/extra-iterable/functions/searchRight.html
[searchAll]: https://nodef.github.io/extra-iterable/functions/searchAll.html
[searchValue]: https://nodef.github.io/extra-iterable/functions/searchValue.html
[searchValueRight]: https://nodef.github.io/extra-iterable/functions/searchValueRight.html
[searchValueAll]: https://nodef.github.io/extra-iterable/functions/searchValueAll.html
[searchInfix]: https://nodef.github.io/extra-iterable/functions/searchInfix.html
[searchInfixRight]: https://nodef.github.io/extra-iterable/functions/searchInfixRight.html
[searchInfixAll]: https://nodef.github.io/extra-iterable/functions/searchInfixAll.html
[searchSubsequence]: https://nodef.github.io/extra-iterable/functions/searchSubsequence.html
[hasValue]: https://nodef.github.io/extra-iterable/functions/hasValue.html
[hasPrefix]: https://nodef.github.io/extra-iterable/functions/hasPrefix.html
[hasSuffix]: https://nodef.github.io/extra-iterable/functions/hasSuffix.html
[hasInfix]: https://nodef.github.io/extra-iterable/functions/hasInfix.html
[hasSubsequence]: https://nodef.github.io/extra-iterable/functions/hasSubsequence.html
[forEach]: https://nodef.github.io/extra-iterable/functions/forEach.html
[some]: https://nodef.github.io/extra-iterable/functions/some.html
[every]: https://nodef.github.io/extra-iterable/functions/every.html
[map]: https://nodef.github.io/extra-iterable/functions/map.html
[reduce]: https://nodef.github.io/extra-iterable/functions/reduce.html
[filter]: https://nodef.github.io/extra-iterable/functions/filter.html
[filterAt]: https://nodef.github.io/extra-iterable/functions/filterAt.html
[reject]: https://nodef.github.io/extra-iterable/functions/reject.html
[rejectAt]: https://nodef.github.io/extra-iterable/functions/rejectAt.html
[accumulate]: https://nodef.github.io/extra-iterable/functions/accumulate.html
[flat]: https://nodef.github.io/extra-iterable/functions/flat.html
[flatMap]: https://nodef.github.io/extra-iterable/functions/flatMap.html
[zip]: https://nodef.github.io/extra-iterable/functions/zip.html
[fill]: https://nodef.github.io/extra-iterable/functions/fill.html
[push]: https://nodef.github.io/extra-iterable/functions/push.html
[unshift]: https://nodef.github.io/extra-iterable/functions/unshift.html
[copy]: https://nodef.github.io/extra-iterable/functions/copy.html
[copyWithin]: https://nodef.github.io/extra-iterable/functions/copyWithin.html
[moveWithin]: https://nodef.github.io/extra-iterable/functions/moveWithin.html
[splice]: https://nodef.github.io/extra-iterable/functions/splice.html
[split]: https://nodef.github.io/extra-iterable/functions/split.html
[splitAt]: https://nodef.github.io/extra-iterable/functions/splitAt.html
[cut]: https://nodef.github.io/extra-iterable/functions/cut.html
[cutRight]: https://nodef.github.io/extra-iterable/functions/cutRight.html
[cutAt]: https://nodef.github.io/extra-iterable/functions/cutAt.html
[cutAtRight]: https://nodef.github.io/extra-iterable/functions/cutAtRight.html
[group]: https://nodef.github.io/extra-iterable/functions/group.html
[partition]: https://nodef.github.io/extra-iterable/functions/partition.html
[partitionAs]: https://nodef.github.io/extra-iterable/functions/partitionAs.html
[chunk]: https://nodef.github.io/extra-iterable/functions/chunk.html
[cycle]: https://nodef.github.io/extra-iterable/functions/cycle.html
[repeat]: https://nodef.github.io/extra-iterable/functions/repeat.html
[reverse]: https://nodef.github.io/extra-iterable/functions/reverse.html
[rotate]: https://nodef.github.io/extra-iterable/functions/rotate.html
[intersperse]: https://nodef.github.io/extra-iterable/functions/intersperse.html
[interpolate]: https://nodef.github.io/extra-iterable/functions/interpolate.html
[intermix]: https://nodef.github.io/extra-iterable/functions/intermix.html
[interleave]: https://nodef.github.io/extra-iterable/functions/interleave.html
[concat]: https://nodef.github.io/extra-iterable/functions/concat.html
[merge]: https://nodef.github.io/extra-iterable/functions/merge.html
[join]: https://nodef.github.io/extra-iterable/functions/join.html
[isUnique]: https://nodef.github.io/extra-iterable/functions/isUnique.html
[isDisjoint]: https://nodef.github.io/extra-iterable/functions/isDisjoint.html
[unique]: https://nodef.github.io/extra-iterable/functions/unique.html
[union]: https://nodef.github.io/extra-iterable/functions/union.html
[intersection]: https://nodef.github.io/extra-iterable/functions/intersection.html
[difference]: https://nodef.github.io/extra-iterable/functions/difference.html
[symmetricDifference]: https://nodef.github.io/extra-iterable/functions/symmetricDifference.html
[cartesianProduct]: https://nodef.github.io/extra-iterable/functions/cartesianProduct.html
