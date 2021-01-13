// This method is like _.pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The iteratee is invoked with one argument: (value).
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x'); // => [{ 'x': 2 }]

// This method is like _.pullAll except that it accepts comparator which is invoked to compare elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual); // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]

// Removes elements from array corresponding to indexes and returns an array of removed elements.
var array = ['a', 'b', 'c', 'd'];
var pulled = _.pullAt(array, [1, 3]); //_.pullAt(array, [indexes])
console.log(array); // => ['a', 'c']
console.log(pulled); // => ['b', 'd']

// Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).
// Note: Unlike _.filter, this method mutates array. Use _.pull to pull elements from an array by value.
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
    return n % 2 == 0;
}); //_.remove(array, [predicate=_.identity])
console.log(array); // => [1, 3]
console.log(evens); // => [2, 4]

// Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
var array = [1, 2, 3];
_.reverse(array); // _.reverse(array)
console.log(array); // => [3, 2, 1]