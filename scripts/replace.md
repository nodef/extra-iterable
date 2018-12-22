Replace value with another value in [iterable], like [String.replace()].

```javascript
const replaceTo = require('@extra-iterable/replace');
// replaceTo(<iterable>, <value>, <replace>, [begin=0], [end], [target=[]], [at])

replaceTo(new Set(['a', 'b']), 'b', 'bb');
// ['a', 'bb']
replaceTo(['a', 'b', 'c', 'd'], 'b', 'bb', 1, 3);
// ['bb', 'c']
replaceTo('abcd', 'b', 'bb', 1, 3, ['z', 'x']);
// ['z', 'x', 'bb', 'c']
replaceTo('abcd', 'b', 'bb', 1, 3, ['z', 'x'], 1);
// ['z', 'bb', 'c']
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[String.replace()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
