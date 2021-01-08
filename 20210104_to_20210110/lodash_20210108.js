const _ = require('lodash/array');
// Recursively flattens array.
_.flattenDeep([1, [2, [3, [4]], 5]]); // => [1, 2, 3, 4, 5]

// Recursively flatten array up to depth times.
var array = [1, [2, [3, [4]], 5]];
_.flattenDepth(array, 1); // => [1, 2, [3, [4]], 5]
_.flattenDepth(array, 2); // => [1, 2, 3, [4], 5]

// The inverse of _.toPairs; this method returns an object composed from key-value pairs.
_.fromPairs([
    ['a', 1],
    ['b', 2]
]); // => { 'a': 1, 'b': 2 }

// Gets the first element of array.
_.head([1, 2, 3]); // => 1
_.head([]); // => undefined

// Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.
_.indexOf([1, 2, 1, 2], 2); // => 1
// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2); // => 3