let ydObject = { ...null, ...undefined };
console.log(ydObject);
let ydArray = [...null, ...undefined];
console.log(ydArray);

// {}  抛出异常

// 对象会忽略null和undefined,数组会抛出异常。
// ecma规范定义。另外null只能等于undefined，其余谁也不等