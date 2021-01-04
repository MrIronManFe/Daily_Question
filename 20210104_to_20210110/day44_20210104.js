[1, 2, 3, 4].reduce((x, y) => console.log(x, y));

/*
1,2
2,3
3,4
4,null


// 答案
1 2 undefined 3 undefined 4

// 解析
`reducer` 的callback函数接收4个参数:

1. Accumulator (acc) (累计器)
2. Current Value (cur) (当前值)
3. Current Index (idx) (当前索引)
4. Source Array (src) (源数组)

`reducer`  的callback函数的返回值将会分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。
`reducer` 函数还有一个可选参数 `initialValue`, 该参数将作为第一次调用回调函数时的第一个参数的值。如果没有提供 `initialValue`，则将使用数组中的第一个元素。
在上述例子， `reduce`方法接收的第一个参数(Accumulator)是 `x`, 第二个参数(Current Value)是 `y`。
在第一次调用时，累加器 `x`为 `1`，当前值 `“y”`为 `2`，打印出累加器和当前值：`1`和 `2`。
例子中我们的回调函数没有返回任何值，只是打印累加器的值和当前值。如果函数没有返回值，则默认返回 `undefined`。在下一次调用时，累加器为 `undefined`，当前值为“3”, 因此 `undefined`和 `3`被打印出。
在第四次调用时，回调函数依然没有返回值。累加器再次为 `undefined` ，当前值为“4”。`undefined`和 `4`被打印出。
*/