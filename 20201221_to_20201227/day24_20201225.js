console.log([2, 1, 0].reduce(Math.pow));
console.log([].reduce(Math.pow));

/*
A. 2 报错
B. 2 NaN
C. 1 报错
D. 1 NaN

答案C
reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

reducer 函数接收4个参数:
Accumulator (acc) (累计器)
Current Value (cur) (当前值)
Current Index (idx) (当前索引)
Source Array (src) (源数组)

arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
如果数组为空且没有提供initialValue，会抛出TypeError 。如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。

第一次,2^1 = 2,第二次2^0 = 1
*/


