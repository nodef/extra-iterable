Remove falsy values from [iterable], like [_.compact()].

```javascript
const compact = require('@extra-iterable/compact');
// compact(<iterable>, [begin=0], [end], [target=[]], [at])

compact(new Set([7, 2, null, 1, 0, undefined]));
// [7, 2, 1]
compact([7, 2, null, 1, 0, undefined], 1);
// [2, 1]
compact([7, 2, null, 1, 0, undefined], 1, 3);
// [2]
compact([7, 2, null, 1, 0, undefined], 1, 3, [9, 8]);
// [9, 8, 2]
compact([7, 2, null, 1, 0, undefined], 1, 3, [9, 8], 1);
// [9, 2]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[_.compact()]: http://underscorejs.org/#compact
