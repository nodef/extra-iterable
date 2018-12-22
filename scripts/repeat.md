Repeat [iterable] n times, like [String.repeat()].

```javascript
const repeat = require('@extra-iterable/repeat');
// repeat(<iterable>, [times=1], [begin=0], [end], [target=[]], [at])

repeat(new Set(['a', 'b']), 3);
// ['a', 'b', 'a', 'b', 'a', 'b']
repeat(['a', 'b', 'c', 'd'], 2, 1);
// ['b', 'c', 'd', 'b', 'c', 'd']
repeat('abcd', 2, 1, 3);
// ['b', 'c', 'b', 'c']
repeat('abcd', 2, 1, 3, ['z', 'y']);
// ['z', 'y', 'b', 'c', 'b', 'c']
repeat('abcd', 2, 1, 3, ['z', 'y'], 1);
// ['z', 'b', 'c', 'b', 'c']
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[String.repeat()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
