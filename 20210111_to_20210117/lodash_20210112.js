// Gets the last element of array.
_.last([1, 2, 3]); // => 3

// This method is like _.indexOf except that it iterates over elements of array from right to left.
_.lastIndexOf([1, 2, 1, 2], 2); // => 3,从右开始找2，找到2了，在左面数第三位
// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2); // => 1，从右开始找2，找到2了，从左面第二位开始的第2位

// Gets the element at index n of array. If n is negative, the nth element from the end is returned.
var array = ['a', 'b', 'c', 'd'];
_.nth(array, 1); // => 'b'
_.nth(array, -2); // => 'c';

// Removes all given values from array using SameValueZero for equality comparisons.
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pull(array, 'a', 'c');
console.log(array); // => ['b', 'b']

// This method is like _.pull except that it accepts an array of values to remove.
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pullAll(array, ['a', 'c']);
console.log(array); // => ['b', 'b']