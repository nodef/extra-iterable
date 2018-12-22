Check if [iterable] has any truthy values, like [any()].

```javascript
var any = require('@extra-iterable/any');
// any(<iterable>, [begin=0], [end])

any(new Set([1, 0, 0, '']));
// true
any(new Set([1, 0, 0, '']), 1);
// false
any([1, 0, 0, '', 'a'], 1, 4);
// false
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[any()]: https://docs.python.org/3/library/functions.html#any
