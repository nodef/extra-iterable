Check if an [iterable] contains another iterable.

```javascript
var contains = require('@extra-iterable/contains');
// contains(<iterable>, <another iterable>)

var a = ['h', 'o', 'm', 'e'];
contains(a, ['h', 'o', 'm', 'e', 's']);
// false
contains(a, ['o', 'm']);
// true
contains(a, ['m', 'o']);
// false
contains(a, []);
// true
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
