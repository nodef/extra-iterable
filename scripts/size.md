Get size of [iterable], like [Set.size].

```javascript
const size = require('@extra-iterable/size');
// size(<iterable>)

size(['a', 'b', 'c']);
// 3
size('');
// 0
size(new Set().add('a').add('b'));
// 2
size(new Map().set('a', 1).set('b', 2));
// 2
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Set.size]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
