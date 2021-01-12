var yideng_a = Function.length; //1，这个是构造器，所以是1
var yideng_b = new Function().length; //0,Function实例里面没有lenth属性，所以是去Function.prototype里面找的length
console.log(yideng_a === yideng_b);

/*
// 答案&解析
①每个 JavaScript 函数实际上都是一个 Function 对象。运行 (function(){}).constructor === Function,true 便可以得到这个结论。
②全局的 Function 对象没有自己的属性和方法，但是，因为它本身也是一个函数，所以它也会通过原型链从自己的原型链 Function.prototype 上继承一些属性和方法。
③length是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。与之对比的是，  arguments.length 是函数被调用时实际传参的个数。
④length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。
形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数。
Function 构造器本身也是个Function。他的 length 属性值为 1 。该属性 Writable: false, Enumerable: false, Configurable: true.Function  原型对象的 length 属性值为 0 。
*/