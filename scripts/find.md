Get first value in [iterable] that satisfies the test, like [Array.find()].

```javascript
const find = require('@extra-iterable/find');
// find(<iterable>, <test function>, [this], [begin=0], [end])
// - <test function>(<value>, <index>, <iterable>)

find(new Set(['a', 'b', 'cd']), (v) => v>'b');
// 'cd'
find(['a', 'b', 'cd'], (v, i, itr) => v>'b', null, 1);
// 'cd'
find(['a', 'b', 'cd'], (v, i, itr) => v>'b', null, 1, 2);
// undefined
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.find()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
