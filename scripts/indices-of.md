Get indices of all values in [iterable] equal to specified value, like [Array.indexOf()].

```javascript
const indicesOf = require('@extra-iterable/indices-of');
// indicesOf(<iterable>, <search value>, [begin=0], [end], [target=[]], [at])

indicesOf(new Set(['a', 'b', 'c']), 'c');
// [2]
indicesOf('cccc', 'c', 1);
// [1, 2, 3]
indicesOf('cccc', 'c', 1, 3);
// [1, 2]
indicesOf('cccc', 'c', 1, 3, [10, 11]);
// [10, 11, 1, 2]
indicesOf('cccc', 'c', 1, 3, [10, 11], 1);
// [10, 1, 2]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.indexOf()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
