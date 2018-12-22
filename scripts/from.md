Get [iterable] from value, like [Array.from()].

```javascript
const from = require('@extra-iterable/from');
// from(<value>)

from([8, 1, 12, 15]);
// [8, 1, 12, 15]
from(new Set('halo'));
// Set {'h', 'a', 'l', 'o'}
from({h: 'hindustan', a: 'aeronautics', l: 'limited', o: 'operation'});
// [['h', 'hindustan'], ['a', 'aeronautics'], ['l', 'limited'], ['o', 'operation']]
from(811215);
// [811215]
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[Array.from()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
