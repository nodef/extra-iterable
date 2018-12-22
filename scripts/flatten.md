Flatten values in [iterable], like [_.flatten()].

```javascript
const flatten = require('@extra-iterable/flatten');
// flatten(<iterable>, [level=-1], [begin=0], [end], [target=[]], [at])

flatten([0, [1, [2, new Set([3])]]]);
// [0, 1, 2, 3]
flatten([0, [1, [2, new Set([3])]]], 1);
// [0, 1, [2, Set {3}]]
flatten([0, [1], [[2]], [[new Set([3])]]], -1, 1);
// [1, 2, 3]
flatten([0, [1], [[2]], [[new Set([3])]]], -1, 1, 3);
// [1, 2]
flatten([0, [1], [[2]], [[new Set([3])]]], -1, 1, 3, [10, 11]);
// [10, 11, 1, 2]
flatten([0, [1], [[2]], [[new Set([3])]]], -1, 1, 3, [10, 11], 1);
// [10, 1, 2]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[_.flatten()]: http://underscorejs.org/#flatten
