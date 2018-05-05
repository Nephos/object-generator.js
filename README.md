# object-generator.js

Generate object elegantly.

```js
const object = require('object-generator');

object.map({ k: 'v' }, (key, value) => value + ' stuff');
// => { k: 'v stuff' }
object.fullmap({ k: 'v' }, (key, value) => [key + '1', value + ' stuff']);
// => { k1: 'v stuff' }

require('object-generator/extend');
{ k: 'v' }.map((key, value) => value + ' stuff');
// => { k: 'v stuff' }
```
