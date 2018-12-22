Get all values in [iterable] that satisfy the test, like [Array.find()].

```javascript
const findAll = require('@extra-iterable/find-all');
// findAll(<iterable>, <test function>, [this], [begin=0], [end], [target=[]], [at])
// - <test function>(<value>, <index>, <iterable>)

findAll(new Set(['a', 'b', 'cd']), (v) => v>'b');
// ['cd']
findAll('abcd', (v, i, itr) => v>'b', null, 1);
// ['c', 'd']
findAll('abcd', (v, i, itr) => v>'b', null, 1, 3);
// ['c']
findAll('abcd', (v, i, itr) => v>'b', null, 1, 3, ['z', 'y']);
// ['z', 'y', 'c']
findAll('abcd', (v, i, itr) => v>'b', null, 1, 3, ['z', 'y'], 1);
// ['z', 'c']
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.find()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
