Get [euclidean distance] between [iterables].

```javascript
const euclideanDistance = require('@extra-iterable/euclidean-distance');
// euclideanDistance(<iterable1>, <iterable2>)

euclideanDistance([0, 0], [3, 4]);
// 5
euclideanDistance([1, 2, 3], [4, 5, 6]);
// 5.196152422706632
euclideanDistance(new Set([1, 2]), [2]);
// NaN (iterables are of different lengths)
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[euclidean distance]: https://en.wikipedia.org/wiki/Euclidean_distance
[iterables]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
