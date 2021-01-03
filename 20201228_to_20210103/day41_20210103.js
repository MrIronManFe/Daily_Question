const company = { name: "京程一灯" };
Object.defineProperty(company, "address", { value: "北京" });
console.log(company);
console.log(Object.keys(company));
/*
A. {name:"京程一灯",address:"北京"},["name","age"]
B. {name:"京程一灯",address:"北京"},["name"]
C. {name:"京程一灯"},["name","age"]
D. {name:"京程一灯"},["name","age"]
*/

/*
// 答案
B

// 解析
通过 `defineProperty`方法，我们可以给对象添加一个新属性，或者修改已经存在的属性。而我们使用 `defineProperty`方法给对象添加了一个属性之后，属性默认为 不可枚举(not enumerable). `Object.keys`方法仅返回对象中 可枚举(enumerable) 的属性，因此只剩下了 name
用 `defineProperty`方法添加的属性默认不可变。你可以通过 `writable`, `configurable` 和 `enumerable`属性来改变这一行为。这样的话， 相比于自己添加的属性， `defineProperty`方法添加的属性有了更多的控制权。
*/