Get index of all values in [iterable], like [Object.keys()].

```javascript
const keys = require('@extra-iterable/keys');
// keys(<iterable>)

keys(['a', 'b', 'c']);
// [0, 1, 2]
keys('abc');
// [0, 1, 2]
keys(new Set().add('a').add('b'));
// [0, 1]
keys(new Map().set('a', 1).set('b', 2));
// [0, 1]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Object.keys()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
