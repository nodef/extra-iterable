Filter values from [iterable] that pass the test, like [Array.filter()].

```javascript
const filter = require('@extra-iterable/filter');
// filter(<iterable>, <test function>, [this], [begin=0], [end], [target=[]], [at])
// - <test function>(<value>, <index>, <iterable>)

filter(new Set(['a', 'b', 'c', 'd']), (v) => v>'b');
// ['c', 'd']
filter([1, 2, 3, 4], (v) => v>1, null, 1);
// [2, 3, 4]
filter([1, 2, 3, 4], (v) => v>1, null, 1, 3);
// [2, 3]
filter([1, 2, 3, 4], (v) => v>1, null, 1, 3, [10, 11]);
// [10, 11, 2, 3]
filter([1, 2, 3, 4], (v) => v>1, null, 1, 3, [10, 11], 1);
// [10, 2, 3]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.filter()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
