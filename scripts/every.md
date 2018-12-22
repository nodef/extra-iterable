Check if all values in [iterable] pass the test, like [Array.every()].

```javascript
const everyOf = require('@extra-iterable/every');
// everyOf(<iterable>, <test function>, [this], [begin=0], [end])
// - <test function>(<value>, <index>, <iterable>)

everyOf(new Set(['debashish', 'vikram', 'kirti']), (v) => v.includes('i'));
// true
everyOf([0, 1, 1, 0], (v, i, itr) => !!v, null, 1);
// false
everyOf([0, 1, 1, 0], (v, i, itr) => !!v, null, 1, 3);
// true
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.every()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
