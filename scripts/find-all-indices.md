Get indices of all values in [iterable] that satisfy the test, like [Array.findIndex()].

```javascript
const findAllIndices = require('@extra-iterable/find-all-indices');
// findAllIndices(<iterable>, <test function>, [this], [begin=0], [end], [target=[]], [at])
// - <test function>(<value>, <index>, <iterable>)

findAllIndices(new Set(['a', 'b', 'cd']), (v) => v>'b');
// [2]
findAllIndices('abcd', (v, i, itr) => v>'b', null, 1);
// [2, 3]
findAllIndices('abcd', (v, i, itr) => v>'b', null, 1, 3);
// [2]
findAllIndices('abcd', (v, i, itr) => v>'b', null, 1, 3, [10, 11]);
// [10, 11, 2]
findAllIndices('abcd', (v, i, itr) => v>'b', null, 1, 3, [10, 11], 1);
// [10, 2]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.findIndex()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
