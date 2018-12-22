Reverse [iterable], like [Array.reverse()].

```javascript
const reverse = require('@extra-iterable/reverse');
// reverse(<iterable>, [begin=0], [end], [target=[]], [at])

reverse(new Set([1, 2, 3, 4]));
// [4, 3, 2, 1]
reverse([1, 2, 3, 4], 1);
// [4, 3, 2]
reverse([1, 2, 3, 4], 1, 3);
// [3, 2]
reverse([1, 2, 3, 4], 1, 3, [10, 11]);
// [10, 11, 3, 2]
reverse([1, 2, 3, 4], 1, 3, [10, 11], 1);
// [10, 3, 2]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.reverse()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
