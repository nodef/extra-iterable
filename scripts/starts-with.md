Check if [iterable] starts with value, like [String.startsWith()].

```javascript
const startsWith = require('@extra-iterable/starts-with');
// startsWith(<iterable>, <value>)

startsWith(['a', 'b', 'c'], 'a');
// true
startsWith('abc', 'b');
// false
startsWith(new Set().add('a').add('b'), 'c');
// false
startsWith(new Map().set('a', 1).set('b', 2), ['a', 1]);
// false (why?)
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[String.startsWith()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
