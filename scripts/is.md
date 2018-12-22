Check if value is [Iterable].
> Use [@extra-iterable/is-collection], if checking collection *(not string)* is needed.

```javascript
const is = require('@extra-iterable/is');
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

[Iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[@extra-iterable/is-collection]: https://www.npmjs.com/package/@extra-iterable/is-collection
