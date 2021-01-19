// This method is like _.sortedLastIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).
_.sortedLastIndexBy(array, value, [iteratee = _.identity])
var objects = [{ 'x': 4 }, { 'x': 5 }];
_.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }); // => 1
// The `_.property` iteratee shorthand.
_.sortedLastIndexBy(objects, { 'x': 4 }, 'x'); // => 1

// This method is like _.lastIndexOf except that it performs a binary search on a sorted array.
_.sortedLastIndexOf(array, value) //返回从右开始数的位置
_.sortedLastIndexOf([4, 5, 5, 5, 6], 5); // => 3

// This method is like _.uniq except that it's designed and optimized for sorted arrays.
_.sortedUniq(array) //有序数组去重
_.sortedUniq([1, 1, 2]); // => [1, 2]

// This method is like _.uniqBy except that it's designed and optimized for sorted arrays.
_.sortedUniqBy(array, [iteratee])
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor); // => [1.1, 2.3]

// Gets all but the first element of array.
_.tail(array)
_.tail([1, 2, 3]); // => [2, 3]