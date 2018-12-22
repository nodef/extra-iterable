Get index-value pairs of [iterable], like [Object.entries()].

```javascript
const entries = require('@extra-iterable/entries');
// entries(<iterable>)

entries(['a', 'b']);
// [[0, 'a'], [1, 'b']]
entries('ab');
// [[0, 'a'], [1, 'b']]
entries(new Set().add('a').add('b'));
// [[0, 'a'], [1, 'b']]
entries(new Map().set('x', 'a').set('y', 'b'));
// [[0, ['x', 'a']], [1, ['y', 'b']]]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Object.entries()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
