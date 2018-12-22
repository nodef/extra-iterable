Check if [iterable] is equal to another iterable.

```javascript
var equal = require('@extra-iterable/equal');
// equal(<iterable>, <another iterable>)

var a = ['m', 'a', 'd'];
equal(a, ['m', 'a', 'd']);
// true
equal(a, ['d', 'a', 'm']);
// false
equal(a, []);
// false
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
