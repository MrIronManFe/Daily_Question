var obj = { x: 1, y: 2, z: 3 };
// obj[Symbol.iterator] = function*() {
//     yield 1;
//     yield 2;
//     yield 3;
// };
obj[Symbol.iterator] = function() {
    return {
        _count: 0,
        next: function() {
            if (this._count === 3) {
                return { value: this._count, done: true }
            } else {
                this._count += 1
                return { value: this._count, done: false }
            }
        }
    }
}
console.log([...obj]); // TypeError
// 能否以某种方式为上面的语句使用展开运算而不导致类型错误
// 如果可以，写出解决方式

// obj[Symbol.iterator] = function*() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

/*
// 答案
可以

// 解析
展开语法和for-of 语句遍历iterabl对象定义要遍历的数据。Arrary和Map 是具有默认迭代行为的内置迭代器。对象不是可迭代的，但是可以通过使用iterable和iterator协议使它们可迭代。

在Mozilla文档中，如果一个对象实现了@iterator方法，那么它就是可迭代的，这意味着这个对象(或者它原型链上的一个对象)必须有一个带有@iterator键的属性，这个键可以通过常量Symbol.iterator获得。

// 解决方式一
var obj = { x: 1, y: 2, z: 3 };
obj[Symbol.iterator] = function(){
  // iterator 是一个具有 next 方法的对象，
  // 它的返回至少有一个对象
  // 两个属性：value＆done。
   return {
     // 返回一个 iterator 对象
      next: function () {
        if (this._countDown === 3) {
          const lastValue = this._countDown;
          return { value: this._countDown, done: true };
        }
        this._countDown = this._countDown + 1;
        return { value: this._countDown, done: false };
      },
      _countDown: 0,
    };
};
[...obj];

// 解决方式二
// 还可以使用 generator 函数来定制对象的迭代行为：
var obj = { x: 1, y: 2, z: 3 };
obj[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};
[...obj]; // 打印 [1, 2, 3]

*/