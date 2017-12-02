'use strict';

var multiReplaceAll = require('./index.js'),
    str = 'The quick brown fox jumps over the lazy dog. The quick brown fox.',
    replacementList = [{
    substr: 'fox',
    to: 'bird'
}, {
    substr: 'brown',
    to: 'yellow'
}];

var mst = multiReplaceAll(str, replacementList);

console.log(mst); // The quick yellow bird jumps over the lazy dog. The quick yellow bird.