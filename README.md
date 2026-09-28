An [iterable] is a sequence of values.<br>

▌
📦 [JSR](https://jsr.io/@nodef/extra-iterable),
📦 [NPM](https://www.npmjs.com/package/extra-iterable),
📰 [Docs](https://jsr.io/@nodef/extra-iterable/doc).

This is a collection of functions for operating upon **iterables**. Assumption
here is that an **iterable** can *only* be iterated over *once*. Methods which
require multiple iterations preserve old values in a backup array using
[toMany]. Many methods accept both compare and map functions, and in some cases
using **only** a map function enables *faster comparision* (like [unique]). I
borrowed a lot of ideas from Haskell, Elm, Python, Basic, Lodash, and other NPM
packages. These are mentioned in references of each method.

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

<br>

```javascript
import * as xiterable from "jsr:@nodef/extra-iterable";

var x = [2, 4, 6, 8];
xiterable.get(x, 1);
// → 4

var x = [1, 2, 3, 4];
[...xiterable.swap(x, 0, 1)];
// → [ 2, 1, 3, 4 ]

var x = [1, 2, 3];
[...xiterable.cycle(x, 0, 4)];
// → [1, 2, 3, 1]

var x = [1, 2, 3, 4];
xiterable.reduce(x, (acc, v) => acc+v);
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
| [cycle] | Obtain values that cycle through an iterable. |
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
| [union] | Obtain values present in any iterable. |
| [intersection] | Obtain values present in both iterables. |
| [difference] | Obtain values not present in another iterable. |
| [symmetricDifference] | Obtain values not present in both iterables. |
| [cartesianProduct] | List cartesian product of iterables. |

<br>
<br>


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-iterable)


[is]: https://jsr.io/@nodef/extra-iterable/doc/~/is
[isIterator]: https://jsr.io/@nodef/extra-iterable/doc/~/isIterator
[isList]: https://jsr.io/@nodef/extra-iterable/doc/~/isList
[iterator]: https://jsr.io/@nodef/extra-iterable/doc/~/iterator
[keys]: https://jsr.io/@nodef/extra-iterable/doc/~/keys
[values]: https://jsr.io/@nodef/extra-iterable/doc/~/values
[entries]: https://jsr.io/@nodef/extra-iterable/doc/~/entries
[from]: https://jsr.io/@nodef/extra-iterable/doc/~/from
[fromIterator]: https://jsr.io/@nodef/extra-iterable/doc/~/fromIterator
[fromRange]: https://jsr.io/@nodef/extra-iterable/doc/~/fromRange
[fromInvocation]: https://jsr.io/@nodef/extra-iterable/doc/~/fromInvocation
[fromApplication]: https://jsr.io/@nodef/extra-iterable/doc/~/fromApplication
[isOnce]: https://jsr.io/@nodef/extra-iterable/doc/~/isOnce
[isMany]: https://jsr.io/@nodef/extra-iterable/doc/~/isMany
[toMany]: https://jsr.io/@nodef/extra-iterable/doc/~/toMany
[toInvokable]: https://jsr.io/@nodef/extra-iterable/doc/~/toInvokable
[isEmpty]: https://jsr.io/@nodef/extra-iterable/doc/~/isEmpty
[length]: https://jsr.io/@nodef/extra-iterable/doc/~/length
[compare]: https://jsr.io/@nodef/extra-iterable/doc/~/compare
[isEqual]: https://jsr.io/@nodef/extra-iterable/doc/~/isEqual
[index]: https://jsr.io/@nodef/extra-iterable/doc/~/index
[indexRange]: https://jsr.io/@nodef/extra-iterable/doc/~/indexRange
[get]: https://jsr.io/@nodef/extra-iterable/doc/~/get
[getAll]: https://jsr.io/@nodef/extra-iterable/doc/~/getAll
[getPath]: https://jsr.io/@nodef/extra-iterable/doc/~/getPath
[hasPath]: https://jsr.io/@nodef/extra-iterable/doc/~/hasPath
[set]: https://jsr.io/@nodef/extra-iterable/doc/~/set
[swap]: https://jsr.io/@nodef/extra-iterable/doc/~/swap
[remove]: https://jsr.io/@nodef/extra-iterable/doc/~/remove
[count]: https://jsr.io/@nodef/extra-iterable/doc/~/count
[countAs]: https://jsr.io/@nodef/extra-iterable/doc/~/countAs
[min]: https://jsr.io/@nodef/extra-iterable/doc/~/min
[max]: https://jsr.io/@nodef/extra-iterable/doc/~/max
[range]: https://jsr.io/@nodef/extra-iterable/doc/~/range
[minEntry]: https://jsr.io/@nodef/extra-iterable/doc/~/minEntry
[maxEntry]: https://jsr.io/@nodef/extra-iterable/doc/~/maxEntry
[rangeEntries]: https://jsr.io/@nodef/extra-iterable/doc/~/rangeEntries
[slice]: https://jsr.io/@nodef/extra-iterable/doc/~/slice
[head]: https://jsr.io/@nodef/extra-iterable/doc/~/head
[last]: https://jsr.io/@nodef/extra-iterable/doc/~/last
[tail]: https://jsr.io/@nodef/extra-iterable/doc/~/tail
[init]: https://jsr.io/@nodef/extra-iterable/doc/~/init
[left]: https://jsr.io/@nodef/extra-iterable/doc/~/left
[right]: https://jsr.io/@nodef/extra-iterable/doc/~/right
[middle]: https://jsr.io/@nodef/extra-iterable/doc/~/middle
[take]: https://jsr.io/@nodef/extra-iterable/doc/~/take
[takeRight]: https://jsr.io/@nodef/extra-iterable/doc/~/takeRight
[takeWhile]: https://jsr.io/@nodef/extra-iterable/doc/~/takeWhile
[takeWhileRight]: https://jsr.io/@nodef/extra-iterable/doc/~/takeWhileRight
[drop]: https://jsr.io/@nodef/extra-iterable/doc/~/drop
[dropRight]: https://jsr.io/@nodef/extra-iterable/doc/~/dropRight
[dropWhile]: https://jsr.io/@nodef/extra-iterable/doc/~/dropWhile
[dropWhileRight]: https://jsr.io/@nodef/extra-iterable/doc/~/dropWhileRight
[includes]: https://jsr.io/@nodef/extra-iterable/doc/~/includes
[indexOf]: https://jsr.io/@nodef/extra-iterable/doc/~/indexOf
[lastIndexOf]: https://jsr.io/@nodef/extra-iterable/doc/~/lastIndexOf
[find]: https://jsr.io/@nodef/extra-iterable/doc/~/find
[findRight]: https://jsr.io/@nodef/extra-iterable/doc/~/findRight
[scanWhile]: https://jsr.io/@nodef/extra-iterable/doc/~/scanWhile
[scanWhileRight]: https://jsr.io/@nodef/extra-iterable/doc/~/scanWhileRight
[scanUntil]: https://jsr.io/@nodef/extra-iterable/doc/~/scanUntil
[scanUntilRight]: https://jsr.io/@nodef/extra-iterable/doc/~/scanUntilRight
[search]: https://jsr.io/@nodef/extra-iterable/doc/~/search
[searchRight]: https://jsr.io/@nodef/extra-iterable/doc/~/searchRight
[searchAll]: https://jsr.io/@nodef/extra-iterable/doc/~/searchAll
[searchValue]: https://jsr.io/@nodef/extra-iterable/doc/~/searchValue
[searchValueRight]: https://jsr.io/@nodef/extra-iterable/doc/~/searchValueRight
[searchValueAll]: https://jsr.io/@nodef/extra-iterable/doc/~/searchValueAll
[searchInfix]: https://jsr.io/@nodef/extra-iterable/doc/~/searchInfix
[searchInfixRight]: https://jsr.io/@nodef/extra-iterable/doc/~/searchInfixRight
[searchInfixAll]: https://jsr.io/@nodef/extra-iterable/doc/~/searchInfixAll
[searchSubsequence]: https://jsr.io/@nodef/extra-iterable/doc/~/searchSubsequence
[hasValue]: https://jsr.io/@nodef/extra-iterable/doc/~/hasValue
[hasPrefix]: https://jsr.io/@nodef/extra-iterable/doc/~/hasPrefix
[hasSuffix]: https://jsr.io/@nodef/extra-iterable/doc/~/hasSuffix
[hasInfix]: https://jsr.io/@nodef/extra-iterable/doc/~/hasInfix
[hasSubsequence]: https://jsr.io/@nodef/extra-iterable/doc/~/hasSubsequence
[forEach]: https://jsr.io/@nodef/extra-iterable/doc/~/forEach
[some]: https://jsr.io/@nodef/extra-iterable/doc/~/some
[every]: https://jsr.io/@nodef/extra-iterable/doc/~/every
[map]: https://jsr.io/@nodef/extra-iterable/doc/~/map
[reduce]: https://jsr.io/@nodef/extra-iterable/doc/~/reduce
[filter]: https://jsr.io/@nodef/extra-iterable/doc/~/filter
[filterAt]: https://jsr.io/@nodef/extra-iterable/doc/~/filterAt
[reject]: https://jsr.io/@nodef/extra-iterable/doc/~/reject
[rejectAt]: https://jsr.io/@nodef/extra-iterable/doc/~/rejectAt
[accumulate]: https://jsr.io/@nodef/extra-iterable/doc/~/accumulate
[flat]: https://jsr.io/@nodef/extra-iterable/doc/~/flat
[flatMap]: https://jsr.io/@nodef/extra-iterable/doc/~/flatMap
[zip]: https://jsr.io/@nodef/extra-iterable/doc/~/zip
[fill]: https://jsr.io/@nodef/extra-iterable/doc/~/fill
[push]: https://jsr.io/@nodef/extra-iterable/doc/~/push
[unshift]: https://jsr.io/@nodef/extra-iterable/doc/~/unshift
[copy]: https://jsr.io/@nodef/extra-iterable/doc/~/copy
[copyWithin]: https://jsr.io/@nodef/extra-iterable/doc/~/copyWithin
[moveWithin]: https://jsr.io/@nodef/extra-iterable/doc/~/moveWithin
[splice]: https://jsr.io/@nodef/extra-iterable/doc/~/splice
[split]: https://jsr.io/@nodef/extra-iterable/doc/~/split
[splitAt]: https://jsr.io/@nodef/extra-iterable/doc/~/splitAt
[cut]: https://jsr.io/@nodef/extra-iterable/doc/~/cut
[cutRight]: https://jsr.io/@nodef/extra-iterable/doc/~/cutRight
[cutAt]: https://jsr.io/@nodef/extra-iterable/doc/~/cutAt
[cutAtRight]: https://jsr.io/@nodef/extra-iterable/doc/~/cutAtRight
[group]: https://jsr.io/@nodef/extra-iterable/doc/~/group
[partition]: https://jsr.io/@nodef/extra-iterable/doc/~/partition
[partitionAs]: https://jsr.io/@nodef/extra-iterable/doc/~/partitionAs
[chunk]: https://jsr.io/@nodef/extra-iterable/doc/~/chunk
[cycle]: https://jsr.io/@nodef/extra-iterable/doc/~/cycle
[repeat]: https://jsr.io/@nodef/extra-iterable/doc/~/repeat
[reverse]: https://jsr.io/@nodef/extra-iterable/doc/~/reverse
[rotate]: https://jsr.io/@nodef/extra-iterable/doc/~/rotate
[intersperse]: https://jsr.io/@nodef/extra-iterable/doc/~/intersperse
[interpolate]: https://jsr.io/@nodef/extra-iterable/doc/~/interpolate
[intermix]: https://jsr.io/@nodef/extra-iterable/doc/~/intermix
[interleave]: https://jsr.io/@nodef/extra-iterable/doc/~/interleave
[concat]: https://jsr.io/@nodef/extra-iterable/doc/~/concat
[merge]: https://jsr.io/@nodef/extra-iterable/doc/~/merge
[join]: https://jsr.io/@nodef/extra-iterable/doc/~/join
[isUnique]: https://jsr.io/@nodef/extra-iterable/doc/~/isUnique
[isDisjoint]: https://jsr.io/@nodef/extra-iterable/doc/~/isDisjoint
[unique]: https://jsr.io/@nodef/extra-iterable/doc/~/unique
[union]: https://jsr.io/@nodef/extra-iterable/doc/~/union
[intersection]: https://jsr.io/@nodef/extra-iterable/doc/~/intersection
[difference]: https://jsr.io/@nodef/extra-iterable/doc/~/difference
[symmetricDifference]: https://jsr.io/@nodef/extra-iterable/doc/~/symmetricDifference
[cartesianProduct]: https://jsr.io/@nodef/extra-iterable/doc/~/cartesianProduct
