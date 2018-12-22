Call a function for each value in [iterable], like [Array.forEach()].

```javascript
var forEach = require('@extra-iterable/for-each');
// forEach(<iterable>, <called function>, [this], [begin=0], [end])
// - <called function>(<value>, <index>, <iterable>)

forEach(new Map([['rohan', 'lotr'], ['arkham', 'batman']]), (v) => {
  var typ = v[1]==='batman'? 'comic':'novel';
  console.log(v[0], v[1], typ);
});
// rohan lotr novel
// arkham batman comic
forEach([1, 2, 3, 4], (v) => console.log(v), null, 1);
// 2
// 3
// 4
forEach([1, 2, 3, 4], (v) => console.log(v), null, 1, 3);
// 2
// 3
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.forEach()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
