var x = 20;
var temp = {
    x: 40,
    foo: function() {
        var x = 10;
        console.log(this.x);
    }
};
(temp.foo, temp.foo)();

/*
// 答案：
20

// 解析：
逗号操作符，逗号操作符会从左到右计算它的操作数，返回最后一个操作数的值。所以(temp.foo, temp.foo)();等价于var fun = temp.foo; fun();，fun调用时this指向window，所以返回20。
*/