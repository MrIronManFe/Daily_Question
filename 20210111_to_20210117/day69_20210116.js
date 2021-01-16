const lowerCaseOnly = /^[a-z]+$/;
console.log(lowerCaseOnly.test('yideng'));
console.log(lowerCaseOnly.test(null));
console.log(lowerCaseOnly.test());

/*
// 答案
true true true
// 解析
test方法的参数会被调用toString强制转换成字符串
此题转换的字符串是null、undefined

当你想要知道一个正则表达式是否与指定的字符串匹配时，就可以使用 test()（类似于 String.prototype.search() 方法），差别在于test返回一个布尔值，而 search 返回索引（如果找到）或者-1（如果没找到）；若想知道更多信息（然而执行比较慢），可使用exec() 方法（类似于 String.prototype.match() 方法）。
!!!和 exec() (或者组合使用),一样，在相同的全局正则表达式实例上多次调用test将会越过之前的匹配。
*/