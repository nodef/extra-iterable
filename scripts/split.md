Split [iterable] with separator, like [String.split()].

```javascript
const split = require('@extra-iterable/split');
// split(<iterable>, [separator=,], [limit], [begin=0], [end], [target=[]], [at])

split('a,cat,sleeps');
// [['a'], ['c', 'a', 't'], ['s', 'l', 'e', 'e', 'p', 's']]
split('a..dog..eats', '.');
// [['a'], ['d', 'o', 'g'], ['e', 'a', 't', 's']]
split('a,b,c,d', ',', 3);
// [['a'], ['b'], ['c']]
split('a,b,c,d', ',', Number.MAX_SAFE_INTEGER, 1);
// [['b'], ['c'], ['d']]
split('a,b,c,d', ',', Number.MAX_SAFE_INTEGER, 1, 6);
// [['b'], ['c']]
split('a,b,c,d', ',', Number.MAX_SAFE_INTEGER, 1, 6, [['z'], ['y']]);
// [['z'], ['y'], ['b'], ['c']]
split('a,b,c,d', ',', Number.MAX_SAFE_INTEGER, 1, 6, [['z'], ['y']], 1);
// [['z'], ['b'], ['c']]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[String.split()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
