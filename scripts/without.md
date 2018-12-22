Remove specified values from [iterable], like [_.without()].

```javascript
const without = require('@extra-iterable/without');
// without(<iterable>, <removal set>, [begin=0], [end], [target=[]], [at])

without(new Set(['bad', 'good']), new Set(['bad']));
// ['good']
without([5, 7, 8, 9], new Set([7]), 1);
// [8, 9]
without([5, 7, 8, 9], new Set([7]), 1, 3);
// [8]
without('<helo world>', new Set('word '), 1, 11, ['a', ' ']);
// ['a', ' ', 'h', 'e', 'l', 'l']
without('<helo world>', new Set('word '), 1, 11, ['a', ' '], 1);
// ['a', 'h', 'e', 'l', 'l']
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[_.without()]: http://underscorejs.org/#without
