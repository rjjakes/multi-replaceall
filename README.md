# multi-replaceall #

This module is a clone of: https://www.npmjs.com/package/multi-string-replace except it replaces *all instances* of 
the given strings. 

## Installation##

`npm install multi-replaceall --save`

## Usage 

An example:

```javascript
var multiReplaceAll = require('multi-replaceall'),
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

var mst = multiStringReplace(str,replacementList);

console.log(mst); // The quick yellow bird jumps over the lazy dog. The quick yellow bird. 
```

## Credits

https://github.com/rjjakes

https://bitbucket.org/ChristianVersloot/


## License

MIT. 
