Check if value is present in [iterable], like [Array.includes()].

```javascript
const includes = require('@extra-iterable/includes');
// includes(<iterable>, <value>, [begin=0], [end])

includes(new Set(['a', 'b']), 'b');
// true
includes(new Map([['a', 1], ['b', 2]]), ['a', 1]);
// false (['a', 1] !== ['a', 1])
includes(['a', 'b', 'c'], 'a', 1);
// false
includes('abcd', 'd', 1, 3);
// false
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.includes()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
