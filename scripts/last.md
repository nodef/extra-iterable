Get last value in [iterable], like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array[length-1]</a>.

```javascript
const last = require('@extra-iterable/last');
// last(<iterable>, [index=-1])

last(new Set(['a', 'b', 'c']));
// 'c'
last('abc', -2);
// 'b'
last('abc', -4);
// undefined
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
