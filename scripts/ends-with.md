Check if [iterable] ends with value, like [String.endsWith()].

```javascript
const endsWith = require('@extra-iterable/ends-with');
// endsWith(<iterable>, <value>)

endsWith(['a', 'b', 'c'], 'c');
// true
endsWith('abc', 'b');
// false
endsWith(new Set().add('a').add('b'), 'b');
// true
endsWith(new Map().set('a', 1).set('b', 2), ['b', 2]);
// false (why?)
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[String.endsWith()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
