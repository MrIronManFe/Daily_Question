// Gets all but the last element of array.
_.initial([1, 2, 3]); // => [1, 2]

// Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
_.intersection([2, 1], [2, 3]); // => [2]

// This method is like _.intersection except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:(value).
// 调用函数后共有的元素
_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [2.1]
// The `_.property` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'); // => [{ 'x': 1 }]

// This method is like _.intersection except that it accepts comparator which is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
_.intersectionWith(objects, others, _.isEqual); // => [{ 'x': 1, 'y': 2 }]

// Converts all elements in array into a string separated by separator.
_.join(['a', 'b', 'c'], '~'); // => 'a~b~c'