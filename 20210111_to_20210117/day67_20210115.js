/*
3.toString()
3..toString()
3...toString()
*/

/*
// 答案与解析
报错  "3" 报错
运算符优先级问题
点运算符会被优先识别为数字常量的一部分，然后才是对象属性访问符
在JavaScript中，3.1，3.，.1都是合法的数字
3.toString() 会被JS引擎解析成 (3.)toString() 报错
3..toString() 会被JS引擎解析成 (3.).toString() "3"
3...toString() 会被JS引擎解析成 (3.)..toString() 报错
*/