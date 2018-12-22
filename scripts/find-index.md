Get index of first value in [iterable] that satisfies the test, like [Array.findIndex()].

```javascript
const findIndex = require('@extra-iterable/find-index');
// findIndex(<iterable>, <test function>, [this], [begin=0], [end])
// - <test function>(<value>, <index>, <iterable>)

findIndex(new Set(['A', 'B']), (v) => v>'A');
// 1
findIndex('abc', (v) => v>'b', null, 1);
// 2
findIndex('abc', (v) => v>'b', null, 1, 2);
// -1
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.findIndex()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
