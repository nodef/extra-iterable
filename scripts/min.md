Get minimum value in [iterable], like [Math.min()].

```javascript
const min = require('@extra-iterable/min');
// min(<iterable>, [begin=0], [end])

min(new Set([-19, -47]));
// -47
min([17, 20, 47, 19], 1);
// 19
min([17, 20, 47, 19], 1, 3);
// 20
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Math.min()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
