// 以下代码输出什么
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
// 0、1、2
/*
使用let（const）关键字声明变量i，具有块级作用域（快就是{}之间的任何东西）。每次迭代i都被创建为当前块的变量，所以是0、1、2

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
答案是3、3、3
settimeout真正运行时，循环已经走完，并且i是用var声明的，是一个全局对象，所以每一次++都会改变i的值，所以，是333
*/