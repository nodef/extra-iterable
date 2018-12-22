Check if atleast one value in [iterable] passes the test, like [Array.some()].

```javascript
const someOf = require('@extra-iterable/some');
// someOf(<iterable>, <test function>, [this], [begin=0], [end])
// - <test function>(<value>, <index>, <iterable>)

someOf(new Set(['vajpayee', 'modi', 'rahul']), (v) => v.includes('rahul'));
// true
someOf([1, 0, 0, 1], (v, i, itr) => !!v, null, 1);
// true
someOf([1, 0, 0, 1], (v, i, itr) => !!v, null, 1, 3);
// false
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.some()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
