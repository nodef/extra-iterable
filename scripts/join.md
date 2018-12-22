Join values in [iterable] into a string, like [Array.join()].

```javascript
const join = require('@extra-iterable/join');
// join(<iterable>, [separator=,], [begin=0], [end], [target=''])

join(new Set(['a', 'b']));
// 'a,b'
join(new Map([['a', 1], ['b', 2]]), ':');
// 'a,1:b,2'
join(['a', 'b', 'c', 'd'], ':', 1);
// 'b:c:d'
join('abcd', ':', 1, 3);
// 'b:c'
join('abcd', ':', 1, 3, 'a>');
// 'a>b:c'
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.join()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
