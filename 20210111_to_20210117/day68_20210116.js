function yideng() { }
const a = {}, b = Object.prototype;
console.log(a.prototype === b);//true
console.log(Object.getPrototypeOf(a) === b);//true
console.log(yideng.prototype === Object.getPrototypeOf(yideng));//false

/*
// 答案
false true false

//知识点
__proto__（隐式原型）与prototype（显式原型）
1）是什么？
①显式原型 explicit prototype property：
每一个函数在创建之后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象。(需要注意的是，通过Function.prototype.bind方法构造出来的函数是个例外，它没有prototype属性)
②隐式原型 implicit prototype link：
JavaScript中任意对象都有一个内置属性[[prototype]]，在ES5之前没有标准的方法访问这个内置属性，但是大多数浏览器都支持通过__proto__来访问。ES5中有了对于这个内置属性标准的Get方法Object.getPrototypeOf()。(注意：Object.prototype 这个对象是个例外，它的__proto__值为null)
③二者的关系：
隐式原型指向创建这个对象的函数(constructor)的prototype

2）作用是什么？
①显式原型的作用：用来实现基于原型的继承与属性的共享。
②隐式原型的作用：构成原型链，同样用于实现基于原型的继承。举个例子，当我们访问obj这个对象中的x属性时，如果在obj中找不到，那么就会沿着__proto__依次查找。

3）__proto__的指向：
__proto__的指向到底如何判断呢？根据ECMA定义 'to the value of its constructor’s "prototype" ' ----指向创建这个对象的函数的显式原型。
所以关键的点在于找到创建这个对象的构造函数，接下来就来看一下JS中对象被创建的方式，一眼看过去似乎有三种方式：（1）对象字面量的方式 （2）new 的方式 （3）ES5中的Object.create()。
但是本质上只有一种方式，也就是通过new来创建。为什么这么说呢，首先字面量的方式是一种为了开发人员更方便创建对象的一个语法糖，本质就是 var o = new Object(); o.xx = xx;o.yy=yy;

//解析：

1）a.prototype === b  =>false
prototype属性是只有函数才特有的属性，当你创建一个函数时，js会自动为这个函数加上prototype属性，值是一个空对象。而实例对象是没有prototype属性的。所以a.prototype是undefined,第一个结果为false。

2）Object.getPrototypeOf(a) === b =>true
首先要明确对象和构造函数的关系，对象在创建的时候，其__proto__会指向其构造函数的prototype属性
Object实际上是一个构造函数（typeof Object的结果为"function"）,使用字面量创建对象和new Object创建对象是一样的，所以a.__proto__也就是Object.prototype，所以Object.getPrototypeOf(a)与a.__proto__是一样的，第二个结果为true

3）yideng.prototype === Object.getPrototypeOf(yideng) =>false
关键点：f.prototype和Object.getPrototypeOf(f)说的不是一回事

①f.prototype 是使用使用 new 创建的 f 实例的原型:
f.prototype === Object.getPrototypeOf(new f()); // true

②Object.getPrototypeOf(f)是 f 函数的原型:
Object.getPrototypeOf(f) === Function.prototype; //true

所以答案是 false
*/