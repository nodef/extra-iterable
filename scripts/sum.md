Get sum of values in [iterable].

```javascript
const sum = require('@extra-iterable/sum');
// sum(<iterable>, [begin=0], [end])

sum(new Set([7, 1, 9]));
// 17
sum([7, 1, 9], 1);
// 10
sum([7, 1, 9], 1, 2);
// 1
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
