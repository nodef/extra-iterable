Replace values in [iterable] with a [map].

```javascript
const mapReplace = require('@extra-iterable/map-replace');
// mapReplace(<iterable>, <map>, [begin=0], [end], [target=[]], [at])

mapReplace(new Set(['shiwalik', 'range']), new Map([['range', 'mountains']]));
// ['shiwalik', 'mountains']
mapReplace([0, 1, 2, 3], new Map([[1, -1], [2, -2]]), 1);
// [-1, -2, 3]
mapReplace([0, 1, 2, 3], new Map([[1, -1], [2, -2]]), 1, 3);
// [-1, -2]
mapReplace([0, 1, 2, 3], new Map([[1, -1], [2, -2]]), 1, 3, [10, 11]);
// [10, 11, -1, -2]
mapReplace([0, 1, 2, 3], new Map([[1, -1], [2, -2]]), 1, 3, [10, 11], 1);
// [10, -1, -2]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
