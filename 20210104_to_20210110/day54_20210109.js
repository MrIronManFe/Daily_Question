/*
new操作符都做了写什么，并手动实现一下
*/

// 答案&解析
/*
1）new操作符做了什么
new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下的操作：
创建一个空的简单JavaScript对象（即{}）；
链接该对象（即设置该对象的构造函数）到另一个对象 ；
将步骤1新创建的对象作为this的上下文 ；
如果该函数没有返回对象，则返回this。
*/

// 2）代码实现
// 参考答案：1.简单实现
function newOperator(ctor) {
    if (typeof ctor !== 'function') {
        throw 'newOperator function the first param must be a function';
    }
    var args = Array.prototype.slice.call(arguments, 1);
    // 1.创建一个空的简单JavaScript对象（即{}）
    var obj = {};
    // 2.链接该新创建的对象（即设置该对象的__proto__）到该函数的原型对象prototype上
    obj.__proto__ = ctor.prototype;
    // 3.将步骤1新创建的对象作为this的上下文
    var result = ctor.apply(obj, args);
    // 4.如果该函数没有返回对象，则返回新创建的对象

    var isObject = typeof result === 'object' && result !== null;
    var isFunction = typeof result === 'function';
    return isObject || isFunction ? result : obj;
}

// 测试
function company(name, address) {
    this.name = name;
    this.address = address;
}

var company1 = newOperator(company, 'yideng', 'beijing');
console.log('company1: ', company1);

// 参考答案：2.更完整的实现
/**
 * 模拟实现 new 操作符
 * @param  {Function} ctor [构造函数]
 * @return {Object|Function|Regex|Date|Error}      [返回结果]
 */
function newOperator(ctor) {
    if (typeof ctor !== 'function') {
        throw 'newOperator function the first param must be a function';
    }
    // ES6 new.target 是指向构造函数
    newOperator.target = ctor;
    // 1.创建一个全新的对象，
    // 2.并且执行[[Prototype]]链接
    // 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
    var newObj = Object.create(ctor.prototype);
    // ES5 arguments转成数组 当然也可以用ES6 [...arguments], Aarry.from(arguments);
    // 除去ctor构造函数的其余参数
    var argsArr = [].slice.call(arguments, 1);
    // 3.生成的新对象会绑定到函数调用的`this`。
    // 获取到ctor函数返回结果
    var ctorReturnResult = ctor.apply(newObj, argsArr);
    // 小结4 这些类型中合并起来只有Object和Function两种类型 typeof null 也是'object'所以要不等于null，排除null
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function';
    if (isObject || isFunction) {
        return ctorReturnResult;
    }
    // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
    return newObj;
}
