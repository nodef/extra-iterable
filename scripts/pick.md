Filter [iterable] with values of specified indexes, like [_.pick()].

```javascript
const pick = require('@extra-iterable/pick');
// pick(<iterable>, <indexes>, [begin=0], [end], [target=[]], [at])

pick(new Set(['Mountbatten', 'Manekshaw', 'Thimaya', 'Cariappa']), [3, 2]);
// ['Cariappa', 'Thimaya']
pick([1, 8, 6, 9], [3, 2], 1);
// [9 ,6]
pick([1, 8, 6, 9], [3, 2], 1, 3);
// [<1 empty item>, 6]
pick([1, 8, 6, 9], [3, 2], 1, 3, [10, 11]);
// [10, 11, <1 empty item>, 6]
pick([1, 8, 6, 9], [3, 2], 1, 3, [10, 11], 1);
// [10, <1 empty item>, 6]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[_.pick()]: http://underscorejs.org/#pick
