Replace values in [iterable] with an [object].

```javascript
const objectReplace = require('@extra-iterable/object-replace');
// objectReplace(<iterable>, <object>, [begin=0], [end], [target=[]], [at])

objectReplace(new Set('alps'), {l: 'r', p: 't'});
// ['a', 'r', 't', 's']
objectReplace('alps', {l: 'r', p: 't'}, 1);
// ['r', 't', 's']
objectReplace('alps', {l: 'r', p: 't'}, 1, 3);
// ['r', 't']
objectReplace('alps', {l: 'r', p: 't'}, 1, 3, ['z', 'y']);
// ['z', 'y', 'r', 't']
objectReplace('alps', {l: 'r', p: 't'}, 1, 3, ['z', 'y'], 1);
// ['z', 'r', 't']
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
