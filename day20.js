["1", "2", "3"].map(parseInt);

console.log(parseInt('1', 0))
console.log(parseInt('2', 1))
console.log(parseInt('3', 2))

// 答案1,NAN,NAN
/*
首先考察的是map函数,

let new_array = arr.map(function callback( currentValue[, index[, array]]) {}[, thisArg])
整个map函数是两个参数，一个是callback,一个是thisArg（执行回调的this）
callback有三个参数：currentValue、index、array(呼叫map的arr)

然后parseInt接受接受两个参数，第一个是string，第二个radix（2-36之间的整数）。

所以实际上调用的时候是这样的：
console.log(parseInt('1', 0))
console.log(parseInt('2', 1))
console.log(parseInt('3', 2))

当radix不是2-36，或者第一个非空格字符不能转换为数字，返回NAN,注意！如果 parseInt 遇到的字符不是指定 radix 参数中的数字，它将忽略该字符以及所有后续字符，并返回到该点为止已解析的整数值。 parseInt 将数字截断为整数值。 允许前导和尾随空格。由于某些数字在其字符串表示形式中使用e字符（例如 6.022×23 表示 6.022e23 ），因此当对非常大或非常小的数字使用数字时，使用 parseInt 截断数字将产生意外结果。

如果 radix 是 undefined、0或未指定的，JavaScript会假定以下情况：
第一个参数是0x或者0X,当作16
因此，在使用 parseInt 时，一定要指定一个 radix。因为8紧致或者10进制，都可以第一位是0，如果不写，就要看浏览器怎么支持了
其余全部当作10进制

要将一个数字转换为特定的 radix 中的字符串字段，请使用 thatNumber.toString(radix)函数。

所以console.log(parseInt('2', 1))=NAN
console.log(parseInt('3', 2))，3不是有效的二级制字符，返回NAN
console.log(parseInt('1', 0))，10进制，返回1

*/