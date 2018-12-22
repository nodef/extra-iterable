Extract part of [iterable] to array, like [Array.slice()].

```javascript
const slice = require('@extra-iterable/slice');
// slice(<iterable>, [begin=0], [end], [target=[]], [at])
// (positive indexes only for iterable)

slice(new Set(['a', 'b']));
// ['a', 'b']
slice(new Set(['a', 'b']), 1);
// ['b']
slice(new Map([['a', 1], ['b', 2]]), 0, 1);
// [['a', 1]]
slice(['a', 'b', 'c'], 1, Number.MAX_SAFE_INTEGER, ['z']);
// ['z', 'b', 'c']
slice('abc', 0, 2, ['z', 'y', 'x'], 2);
// ['z', 'y', 'a', 'b']
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.slice()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
