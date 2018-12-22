Check is value is [iterable] collection *(not string)*.
> Use [iterable-is], if checking iterable is needed.

```javascript
const isCollection = require('@extra-iterable/is-collection');
// isCollection(<value>)

isCollection(['edge']);
// true
isCollection(new Set().add('edge'));
// true
isCollection(new Map().set('mirror\'s', 'edge'));
// true
isCollection('edge');
// false
isCollection(5475);
// false
isCollection({still: 'alive'});
// false
```


[![extra-iterable](https://i.imgur.com/KR83Nzx.jpg)](https://www.npmjs.com/package/extra-iterable)

[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[iterable-is]: https://www.npmjs.com/package/iterable-is
