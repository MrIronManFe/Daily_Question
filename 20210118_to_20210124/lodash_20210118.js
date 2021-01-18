// Creates a slice of array from start up to, but not including, end.
_.slice(array, [start = 0], [end = array.length])

// Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.
_.sortedIndex(array, value);
// 返回最低应该插入到哪里
_.sortedIndex([30, 50], 40); //=>1

// This method is like _.sortedIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).
_.sortedIndexBy(array, value, [iteratee = _.identity])

var objects = [{ 'x': 4 }, { 'x': 5 }];
_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }); // => 0
// The `_.property` iteratee shorthand.
_.sortedIndexBy(objects, { 'x': 4 }, 'x'); // => 0

// This method is like _.indexOf except that it performs a binary search on a sorted array.
_.sortedIndexOf(array, value);
// 排序的数组是已经排列过的
_.sortedIndexOf([4, 5, 5, 5, 6], 5); // => 1

// This method is like _.sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.
_.sortedLastIndex(array, value);
// 返回最高应该插入到哪里
_.sortedLastIndex([4, 5, 5, 5, 6], 5); // => 4