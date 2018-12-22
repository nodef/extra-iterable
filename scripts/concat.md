Concatenate [iterables], like [Array.concat()].

```javascript
const concat = require('@extra-iterable/concat');
// concat(<iterable>...)
// -> <concatenated array>

concat([1, 2], [3, 4]);
// [1, 2, 3 ,4]
concat([1, 2], new Set().add(3).add(4));
// [1, 2, 3, 4]
concat(['a', 'b'], 'cd');
// ['a', 'b', 'c', 'd']
concat([['a', 1], ['b', 2]], new Map().set('c', 3).set('d', 4));
// [['a', 1], ['b', 2], ['c', 3], ['d', 4]]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterables]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.concat()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
