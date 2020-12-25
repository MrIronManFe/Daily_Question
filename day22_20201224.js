function f() {}
const a = f.prototype
console.log(a)
const b = Object.getPrototypeOf(f)
console.log(b)
console.log(a === b);


/*
function f(){}
let a = new f()
每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype ）
例子:
a.__proto__===f.prototype

但是！！！重点在于判断到底是实例对象，还是对象

遵循ECMAScript标准，someObject.[[Prototype]] 符号是用于指向 someObject 的原型。从 ECMAScript 6 开始，[[Prototype]] 可以通过 Object.getPrototypeOf() 和 Object.setPrototypeOf() 访问器来访问。这个等同于 JavaScript 的非标准但许多浏览器实现的属性 __proto__。

但它不应该与构造函数 func 的 prototype 属性相混淆。被构造函数创建的实例对象的 [[Prototype]] 指向 func 的 prototype 属性。Object.prototype 属性表示 Object 的原型对象。

函数的prototype指向的是一个属性，属性的__prototype__返回Object.prototype

Object.getPrototypeOf(object)返回给定对象的原型。如果没有继承属性，则返回 null 。
给定对象的原型实际上就是内部[[Prototype]]指向的属性，实际上就是浏览器里面__prototype__指向的属性
*/