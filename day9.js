var foo = function bar() {
    // console.log(typeof foo)
    console.log(typeof bar())
    return 12
};
// console.log(foo)
console.log(typeof bar())

// 输出异常，bar is not defined
// 这种命名函数表达式函数智能在函数体内有效
// 也可以理解为一种作用域吧，bar里面是一个作用域，可以调用bar