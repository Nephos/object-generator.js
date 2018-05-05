# object-generator.js

Generate object elegantly.

```js
const object = require('object-generator');

object.map({ k: 'v' }, (key, value) => value + ' stuff');
// => { k: 'v stuff' }
object.fullmap({ k: 'v' }, (key, value) => [key + '1', value + ' stuff']);
// => { k1: 'v stuff' }
object.reduce({ k: 'v' }, (base, key, value) => [ `${key}+${value}`, ...base ], []);
// => [ 'k+v' ]

require('object-generator/extend');
{ k: 'v' }.map((key, value) => value + ' stuff');
// => { k: 'v stuff' }
```
