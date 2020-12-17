(function() {
    var a = (b = 5)
})()

console.log(b)
console.log(a)

/*
5
a is not defined
iife中，a用var定义了，所以属于内部变量，外面拿不到。所以报错了，没有定义
b因为没有var，所以被定义到windows上了
如果用了用了严格模式，并且想代码正常运行，就只能把b改成window.b=5
(function() {
    'use strict'
    var a = (window.b = 5)
})()
console.log(b)
console.log(a)


*/