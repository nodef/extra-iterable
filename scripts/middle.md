Get middle value in [iterable], like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections">Array[i]</a>.

```javascript
const middle = require('@extra-iterable/middle');
// middle(<iterable>, [index=0])

middle(new Set(['megamind', 'despicable me', 'ratatoulli']));
// 'megamind'
middle(['open', 'ai', 'dota'], 1);
// 'ai'
middle('stuart', -2);
// 'r'
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
