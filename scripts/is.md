Check if value is [iterable].
> Use [@extra-iterable/iscollection], if checking collection *(not string)* is needed.

```javascript
const is = require('iterable-is');
// is(<value>)

is(1);
// false
is([1]);
// true
is('1');
// true
is(new Set().add(1));
// true
is(new Map().set(1, null));
// true
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[iterable-iscollection]: https://www.npmjs.com/package/iterable-iscollection
