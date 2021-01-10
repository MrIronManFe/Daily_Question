// 写出执行结果，并解释原因
var a = 1;
(
    function a() {
        a = 2;
        console.log(a)
    }
)()

// IIFE自己有一个独立的作用域，所以a!=1
// 内部变量名称和函数名冲突，拥有执行函数本身，所以输出结果就是function a
// 注意，只要内部有var 或者 let, a = 2