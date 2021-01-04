const value = { number: 10 };
const multiply = (x = {...value }) => {
    console.log(x.number *= 2);
};
multiply();
multiply();
multiply(value);
multiply(value);

/*
20,20,20,40

// 答案
20 20 20 40

// 解析
在ES6中，我们可以使用默认值初始化参数。如果没有给函数传参，或者传的参值为 `"undefined"` ，那么参数的值将是默认值。上述例子中，我们将 `value` 对象进行了解构并传到一个新对象中，因此 `x` 的默认值为 `{number：10}` 。
默认参数在调用时才会进行计算，每次调用函数时，都会创建一个新的对象。我们前两次调用 `multiply` 函数且不传递值，那么每一次 `x` 的默认值都为 `{number：10}` ，因此打印出该数字的乘积值为 `20`。
第三次调用 `multiply` 时，我们传递了一个参数，即对象 `value`。`*=`运算符实际上是 `x.number=x.number*2`的简写，我们修改了 `x.number`的值，并打印出值 `20`。
第四次，我们再次传递 `value`对象。`x.number`之前被修改为 `20`，所以 `x.number*=2`打印为 `40`。
*/