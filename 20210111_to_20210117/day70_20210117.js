function captureOne(re, str) {
    var match = re.exec(str);
    console.log(match)
    return match && match[1];
}
var numRe = /num=(\d+)/ig,
    wordRe = /yideng=(\w+)/i,
    a1 = captureOne(numRe, "num=1"),
    a2 = captureOne(wordRe, "yideng=1"),
    a3 = captureOne(numRe, "NUM=2"),
    a4 = captureOne(wordRe, "YIDENG=2"),
    a5 = captureOne(numRe, "Num=3"),
    a6 = captureOne(wordRe, "YiDeng=3");
console.log(a1 === a2);
console.log(a3 === a4);
console.log(a5 === a6);

/*
// 答案
 true false true
// 解析
1）exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。
2）但是在Javascript中使用exec进行正则表达式全局匹配时要注意：
    ①在全局模式下，当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把正则表达式对象的lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。
    ③这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。
    ④当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。
3）所以在全局模式下，如果在一个字符串中完成了一次模式匹配之后要开始检索新的字符串，就必须手动地把 lastIndex 属性重置为 0。

匹配一个单字字符（字母、数字或者下划线）。等价于 [A-Za-z0-9_]。
例如, /\w/ 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。

匹配一个数字。等价于[0-9]。
例如， /\d/ 或者 /[0-9]/ 匹配"B2 is the suite number."中的'2'。
*/