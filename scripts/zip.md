Merge values of each inner [iterable] at corresponding position, like [_.zip()].
> [@extra-iterable/zip] is [reversible] and behaves exactly like [iterable-unzip].

```javascript
const zip = require('iterable-zip');
// zip(<iterable>, [begin=0], [end], [target=[]], [at])

zip([['r', 'i', 'm'], [18, 9, 13]]);
// [['r', 18], ['i', 9], ['m', 13]]
zip([['r', 18], ['i', 9], ['m', 13]]);
// [['r', 'i', 'm'], [18, 9, 13]] (reversible)
zip(['pset', 'line', 'rect', 'fill'], 1);
// [['l', 'r', 'f'], ['i', 'e', 'i'], ['n', 'c', 'l'], ['e', 't', 'l']]
zip(['pset', 'line', 'rect', 'fill'], 1, 3);
// [['l', 'r'], ['i', 'e'], ['n', 'c'], ['e', 't']]
zip(['pset', 'line', 'rect', 'fill'], 1, 3, [['z'], ['y']]);
// [['z'], ['y'], ['l', 'r'], ['i', 'e'], ['n', 'c'], ['e', 't']]
zip(['pset', 'line', 'rect', 'fill'], 1, 3, [['z'], ['y']], 1);
// [['z'], ['l', 'r'], ['i', 'e'], ['n', 'c'], ['e', 't']]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[_.zip()]: http://underscorejs.org/#zip
[iterable-zip]: https://www.npmjs.com/package/iterable-zip
[iterable-unzip]: https://www.npmjs.com/package/iterable-unzip
[reversible]: https://en.wikipedia.org/wiki/Involution_(mathematics)
