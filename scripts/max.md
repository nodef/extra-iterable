Get maximum value in [iterable], like [Math.max()].

```javascript
const max = require('@extra-iterable/max');
// max(<iterable>, [begin=0], [end])

max(new Set([-19, -47]));
// -19
max([47, 17, 19, 20], 1);
// 20
max([47, 17, 19, 20], 1, 3);
// 19
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Math.max()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
