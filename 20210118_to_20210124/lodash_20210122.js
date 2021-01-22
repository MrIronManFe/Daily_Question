// This method is like _.zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.
_.unzip(array)
var zipped = _.zip(['a', 'b'], [1, 2], [true, false]); // => [['a', 1, true], ['b', 2, false]]
_.unzip(zipped); // => [['a', 'b'], [1, 2], [true, false]]

// This method is like _.unzip except that it accepts iteratee to specify how regrouped values should be combined. The iteratee is invoked with the elements of each group: (...group).
_.unzipWith(array, [iteratee = _.identity])
var zipped = _.zip([1, 2], [10, 20], [100, 200]); // => [[1, 10, 100], [2, 20, 200]]
_.unzipWith(zipped, _.add); // => [3, 30, 300]

// Creates an array excluding all given values using SameValueZero for equality comparisons.
_.without(array, [values])
_.without([2, 1, 2, 3], 1, 2); // => [3]

// Creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays
_.xor([arrays])
_.xor([2, 1], [2, 3]); // => [1, 3]

// This method is like _.xor except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which by which they're compared. The order of result values is determined by the order they occur in the arrays. The iteratee is invoked with one argument: (value).
_.xorBy([arrays], [iteratee = _.identity])
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [1.2, 3.4]
// The `_.property` iteratee shorthand.
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'); // => [{ 'x': 2 }]