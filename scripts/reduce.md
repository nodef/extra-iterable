Reduce [iterable] to a single value, like [Array.reduce()].

```javascript
const reduce = require('@extra-iterable/reduce');
// reduce(<iterable>, <reduce function>, [initial value], [begin=0], [end])
// - <reduce function>(<accumulator>, <value>, <index>, <iterable>)

reduce(new Set(['a', 'b']), (acc, v) => acc+v);
// 'ab'
reduce('abcd', (acc, v, i, itr) => acc+v, 'z');
// 'zabcd'
reduce('abcd', (acc, v, i, itr) => acc+v, 'z', 1);
// 'zbcd'
reduce('abcd', (acc, v, i, itr) => acc+v, 'z', 1, 3);
// 'zbc'
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.reduce()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
