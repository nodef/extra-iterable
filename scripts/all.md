Check if all values in [iterable] are truthy, like [all()].

```javascript
var all = require('@extra-iterable/all');
// all(<iterable>, [begin=0], [end])

all(new Set([0, -1, 4, 4]));
// false
all(new Set([0, -1, 4, 4]), 1);
// true
all([0, -1, 4, 4, ''], 1, 4);
// true
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[all()]: https://docs.python.org/3/library/functions.html#all
