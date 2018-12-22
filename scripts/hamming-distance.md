Get [hamming distance] between [iterables].

```javascript
const hammingDistance = require('@extra-iterable/hamming-distance');
// hammingDistance(<iterable1>, <iterable2>)

hammingDistance([0, 1, 0], [1, 1, 1]);
// 2
hammingDistance('karolin', 'kathrin');
// 3
hammingDistance(new Set().add(['algo', 'rithm']), ['algo']);
// NaN (iterables are of different lengths)
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[hamming distance]: https://en.wikipedia.org/wiki/Hamming_distance
[iterables]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
