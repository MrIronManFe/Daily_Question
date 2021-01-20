// Creates a slice of array with n elements taken from the beginning.
// 根据传入的n从前截取数组
_.take(array, [n = 1])
_.take([1, 2, 3]); // => [1]
_.take([1, 2, 3], 2); // => [1, 2]
_.take([1, 2, 3], 5); // => [1, 2, 3]
_.take([1, 2, 3], 0); // => []

// Creates a slice of array with n elements taken from the end.
// 根据传入的n从后截取数组
_.takeRight(array, [n = 1])
_.takeRight([1, 2, 3]); // => [3]
_.takeRight([1, 2, 3], 2); // => [2, 3]
_.takeRight([1, 2, 3], 5); // => [1, 2, 3]
_.takeRight([1, 2, 3], 0); // => []

// Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
_.takeRightWhile(array, [predicate = _.identity])
var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];
_.takeRightWhile(users, function(o) { return !o.active; }); // => objects for ['fred', 'pebbles']
// The `_.matches` iteratee shorthand.
_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }); // => objects for ['pebbles']
// The `_.matchesProperty` iteratee shorthand.
_.takeRightWhile(users, ['active', false]); // => objects for ['fred', 'pebbles']
// The `_.property` iteratee shorthand.
_.takeRightWhile(users, 'active'); // => []

// Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
_.takeWhile(array, [predicate = _.identity])
var users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];
_.takeWhile(users, function(o) { return !o.active; }); // => objects for ['barney', 'fred']
// The `_.matches` iteratee shorthand.
_.takeWhile(users, { 'user': 'barney', 'active': false }); // => objects for ['barney']
// The `_.matchesProperty` iteratee shorthand.
_.takeWhile(users, ['active', false]); // => objects for ['barney', 'fred']
// The `_.property` iteratee shorthand.
_.takeWhile(users, 'active'); // => []

// Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
_.union([arrays])
_.union([2], [1, 2]); // => [2, 1]