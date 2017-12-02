# multi-replaceall #

This module is based on: https://www.npmjs.com/package/multi-string-replace except it replaces *all instances* of 
the given strings and is written in ES6.  

## Installation##

```
npm install multi-replaceall --save
```

or.

```
yarn multi-replaceall --save
```

## Usage 

An example:

```javascript
let multiReplaceAll = require('multi-replaceall'),
	str = 'The quick brown fox jumps over the lazy dog. The quick brown fox.',
	replacementList = [
		{
			substr: 'fox',
			to: 'bird'
		},
		{
			substr: 'brown',
			to: 'yellow'
		}
	];

let mst = multiReplaceAll(str,replacementList);

console.log(mst); // The quick yellow bird jumps over the lazy dog. The quick yellow bird. 
```

## Credits

https://github.com/rjjakes

https://bitbucket.org/ChristianVersloot/


## License

MIT. 
