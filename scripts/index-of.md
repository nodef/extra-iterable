Get first index of value in [iterable], like [Array.indexOf()].

```javascript
const indexOf = require('@extra-iterable/index-of');
// indexOf(<iterable>, <search value>, [begin=0], [end])

indexOf(new Set(['a', 'a', 'c']), 'a');
// 0
indexOf(new Map([['a', 1], ['b', 1]]), ['a', 1]);
// -1 (['a', 1] !== ['a', 1])
indexOf(['a', 'a', 'c'], 'a', 1);
// 1
indexOf('aac', 'c', 0, 2);
// -1
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.indexOf()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
