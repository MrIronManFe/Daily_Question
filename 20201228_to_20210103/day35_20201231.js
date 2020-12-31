let x, y;
try {
    throw new Error();
} catch (x) {
    x = 1;
    y = 2;
    console.log(x);
}
console.log(x);
console.log(y);

/*
// 答案
1 undefined 2

// 解析
`catch`块接收参数`x`。当我们传递参数时，这与变量的`x`不同。这个变量`x`是属于`catch`作用域的。需要注意的是catch的作用域，其实并不是常见的块作用域，并不能绑定自己的内部声明的变量。catch创建的块作用域，只对catch的参数有效。对于在内部声明的变量，catch并没有创建一个新的作用域，只是一个普通的代码块。
*/