let length = 10;

function fn() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0]();
    }
};
obj.method(fn, 1);

/*


// 答案
0  2

// 解析
1）fn()知识点
  ①fn()知识点，任意函数里如果嵌套了 非箭头函数，那这个时候 嵌套函数里的 this 在未指定的情况下，应该指向的是 window 对象，所以这里执行fn会打印window.length,但是let声明的变量会形成块级作用域，且不存在声明提升，而var存在声明提升。所以当使用let声明变量时，不存在声明提升，length属性实际上并没有添加到window对象中。
  // 例如在浏览器控制台
  let a = 1;
  window.a   // undefined
  var b = 1;
  window.b  // 1
  但是这里为什么输出0呢，因为window对象原先上有length属性，所以输出的是原先的值0
  ②arguments[0]()知识点
  在方法调用（如果某个对象的属性是函数，这个属性就叫方法，调用这个属性，就叫方法调用）中，执行函数体的时候，作为属性访问主体的对象和数组便是其调用方法内 this 的指向。（通俗的说，调用谁的方法 this 就指向谁；
  `arguments[0]`指向 `fn`,所以 `arguments[0]()` 是作为 `arguments`对象的属性`[0]`来调用 `fn`的，所以 `fn` 中的 `this` 指向属性访问主体的对象 `arguments`；这里this指向arguments。
  因为fn作为一个参数存储在arg对象里，argumengts的长度为2，所以输出2
  // 例如
  [function fn(){console.log(this.length)}][0]();  // 1
  // 数组也是对象，只不过数组对象的整型属性会计入 length 属性中，并被区别对待，这里就是调用数组对象的0属性，函数作为数组对象的属性调用，函数中的this 当然指向这个数组，所以返回数组的length
*/