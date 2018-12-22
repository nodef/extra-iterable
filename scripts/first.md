Get first value in [iterable], like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array[0]</a>.

```javascript
const first = require('@extra-iterable/first');
// first(<iterable>, [index=0])

first(new Set(['a', 'b', 'c']));
// 'a'
first('abc', 1);
// 'b'
first('abc', 3);
// undefined
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
