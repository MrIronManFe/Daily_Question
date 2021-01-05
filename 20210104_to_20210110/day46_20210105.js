function addToList(item, list) {
    return list.push(item);
}
const result = addToList("company", ["yideng"]);
console.log(result);

["yideng", "company"]

/*
// 答案
2

// 解析
`push()`方法返回新数组的长度。一开始，数组包含一个元素（字符串 `"yideng"`），长度为1。 在数组中添加字符串 `"company"`后，长度变为2，并将从 `addToList`函数返回。
`push`方法修改原始数组，如果你想从函数返回数组而不是数组长度，那么应该在push `item`之后返回 `list`。
开发中一不小心会导致错误的地方
*/

const _ = require('lodash/array')

// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

console.log(_.chunk(['a', 'b', 'c', 'd'], 2)); // => [['a', 'b'], ['c', 'd']]
console.log(_.chunk(['a', 'b', 'c', 'd'], 3)); // => [['a', 'b', 'c'], ['d']]

// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
console.log(_.compact([0, 1, false, 2, '', 3])); // => [1, 2, 3]

// Creates a new array concatenating array with any additional arrays and/or values.
var array = [1];
var other = _.concat(array, 2, [3], [
    [4]
]);

console.log(other); // => [1, 2, 3, [4]]

console.log(array); // => [1]

// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

// Note: Unlike _.pullAll, this method returns a new array.
// 撇除2跟3还剩下什么
console.log(_.difference([2, 1], [2, 3])) // => [1]

// This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
// (value).
// 可以接受迭代方法，迭代方法接受一个参数
// floor以后的值
console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // => [1.2]

// The `_.property` iteratee shorthand.
// 迭代器是取出x的值
console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')); // => [{ 'x': 2 }]