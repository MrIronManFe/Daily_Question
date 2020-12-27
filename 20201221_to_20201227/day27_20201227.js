var arr = [0, 1];
arr[5] = 5;
newArr = arr.filter(function (x) { return x === undefined; });
console.log(newArr.length);

/*
答案：0
filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
callback
用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接受以下三个参数：
element
数组中当前正在处理的元素。
index可选
正在处理的元素在数组中的索引。
array可选
调用了 filter 的数组本身。
thisArg可选
执行 callback 时，用于 this 的值。
filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组。callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。
*/