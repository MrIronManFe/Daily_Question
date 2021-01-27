var F = function () { }
Object.prototype.a = function () {
    console.log('yideng')
}
Function.prototype.b = function () {
    console.log('xuetang')
}
var f = new F()
F.a(); //'yideng'
F.b(); //'xuetang'
f.a(); //yideng
f.b(); //报错

/*
// 答案
yideng xuetang yideng 报错
//解析
1）F.a();F.b();
F是个构造函数，而f是构造函数F的一个实例。
因为F instanceof Object == true、F instanceof Function == true
由此我们可以得出结论：F是Object 和 Function两个的实例，即F既能访问到a，也能访问到b。
所以F.a() 输出 yideng F.b() 输出 xuetang

2）f.a();f.b();
对于f，我们先来看下下面的结果：
f并不是Function的实例，因为它本来就不是构造函数，调用的是Function原型链上的相关属性和方法了，只能访问Object原型链。
所以f.a() 输出 yideng 而f.b()就报错了。

3）具体分析下它们是如何按路径查找的：
①f.a的查找路径: f自身: 没有 ---> f.__proto__(Function.prototype),没有--->f.__proto__.__proto__(Object.prototype): 输出yideng
②f.b的查找路径: f自身: 没有 ---> f.__proto__(Function.prototype): 没有 ---> f.__proto__.__proto__ (Object.prototype): 因为找不到，所以报错
③F.a的查找路径: F自身: 没有 ---> F.__proto__(Function.prototype): 没有 ---> F.__proto__.__proto__(Object.prototype): 输出 yideng
④F.b的查找路径: F自身: 没有 ---> F.__proto__(Function.prototype): xuetang
*/