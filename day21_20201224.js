[typeof null, null instanceof Object]
console.log([typeof null, null instanceof Object])
console.log(typeof
        function a() {})
    // ['Object',false]

/*
typeof 运算符后接操作数：
Undefined	"undefined"
Null	"object" 由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"。（参考来源）
Boolean	"boolean"
Number	"number"
BigInt(ECMAScript 2020 新增)	"bigint"
String	"string"
Symbol (ECMAScript 2015 新增)	"symbol"
宿主对象（由 JS 环境提供）	取决于具体实现
Function 对象 (按照 ECMA-262 规范实现 [[Call]])	"function"
其他任何对象	"object"
*/

// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

// object instanceof constructor
// Object真的是一个构造函数