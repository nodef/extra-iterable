Get average of values in [iterable].

```javascript
const average = require('@extra-iterable/average');
// average(<iterable>, [begin=0], [end])

average(new Set([4, 1, 2, 3]));
// 2.5
average([4, 1, 2, 3], 1);
// 2
average([4, 1, 2, 3], 1, 3);
// 1.5
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
