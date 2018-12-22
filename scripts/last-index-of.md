Get last index of value in [iterable], like [Array.lastIndexOf()].

```javascript
const lastIndexOf = require('@extra-iterable/last-index-of');
// lastIndexOf(<iterable>, <value>, [begin], [end=-1])

lastIndexOf(new Set(['a', 'b', 'c']), 'c');
// 2
lastIndexOf(new Map([['a', 1], ['b', 2]]), ['a', 1]);
// -1 (['a', 1] !== ['a', 1])
lastIndexOf(['a', 'b', 'a'], 'a', 1);
// 0
lastIndexOf('abaa', 'a', 2, 0);
// 2
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.lastIndexOf()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
