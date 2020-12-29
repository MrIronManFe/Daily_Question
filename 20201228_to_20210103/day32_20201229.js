var a1 = {},
    b1 = '123',
    c1 = 123;
a1[b1] = 'b';
a1[c1] = 'c';
console.log(a1[b1]); //c

var a2 = {},
    b2 = Symbol('123'),
    c2 = Symbol('123');
a2[b2] = 'b';
a2[c2] = 'c';
console.log(a2[b2]); //b

var a3 = {},
    b3 = { key: '123' },
    c3 = { key: '456' };
a3[b3] = 'b';
a3[c3] = 'c';
console.log(a3[b3]); //b

/*
// 答案
c b c

// 考察知识点
- 对象的键名只能是字符串和 Symbol 类型。
- 其他类型的键名会被转换成字符串类型。
- 对象转字符串默认会调用 toString 方法。

// 解析
var a1={}, b1='123', c1=123;
a1[b1]='b';
// c1 的键名会被转换成字符串'123'，这里会把 b1 覆盖掉。
a1[c1]='c';
// 输出 c
console.log(a1[b1]);


var a2={}, b2=Symbol('123'), c2=Symbol('123');
// b2 是 Symbol 类型，不需要转换。
a2[b2]='b';
// c2 是 Symbol 类型，不需要转换。任何一个 Symbol 类型的值都是不相等的，所以不会覆盖掉 b2。
a2[c2]='c';
// 输出b
console.log(a2[b2]);


var a3={}, b3={key:'123'}, c3={key:'456'};
// b3 不是字符串也不是 Symbol 类型，需要转换成字符串。对象类型会调用 toString 方法转换成字符串 [object Object]
a3[b3]='b';
// c3 不是字符串也不是 Symbol 类型，需要转换成字符串。对象类型会调用 toString 方法转换成字符串 [object Object]。这里会把 b3 覆盖掉。
a3[c3]='c';
// 输出c
console.log(a3[b3]);

// 扩展
除了前边的Symbol，如果想要不被覆盖 可以使用ES6提供的Map
var a=new Map(), b='123', c=123;
a.set(b,'b');
a.set(c,'c');
a.get(b);  // 'b'
a.get(c);  // 'c'
/*
    Objects 和 Maps 类似的是，它们都允许你按键存取一个值、删除键、检测一个键是否绑定了值。因此（并且也没有其他内建的替代方式了）过去我们一直都把对象当成 Maps 使用。不过 Maps 和 Objects 有一些重要的区别，在下列情况里使用 Map 会是更好的选择：
    1.一个Object的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象、基本类型。
    2.Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。
*/