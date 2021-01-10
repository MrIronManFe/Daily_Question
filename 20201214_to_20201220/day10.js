var x = 1
if (function f() {}) {
    x += typeof f
}

console.log(x)

// 1 undefined

// 条件判断为假的情况有，0，false，'',null,undifined,没有定义的对象。
// 函数声明写在运算符中，是true，但是卸载运算符中的函数声明在执行的情况下并没有办法找到，所以typeof f = undefined，另外type of 一个没有声明的变量，是undefined，参考typeof知识点