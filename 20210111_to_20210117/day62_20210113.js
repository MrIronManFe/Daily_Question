/*
不借助中间变量交换两个变量的值
比如 let a = 1,b = 2;交换a,b的值
*/
let a = 1,
    b = 2;
console.log('a=', a);
console.log('b=', b);
[a, b] = [b, a];
console.log('a=', a);
console.log('b=', b);

/*
// 答案&解析
1）利用加法
let a = 1,b = 2;
b = a + b;=>3
a = b - a;=>2
b = b - a;=>1
缺点：利用加法 a+b;有溢出风险

2）利用减法
let a = 1,b = 2;
b = a - b;=>-1
a = a - b;=>2
b = a + b;=>1
这样就解决了加法溢出的风险，理论上已经很完美了,继续往下看

3）es6解构赋值
let a = 1,b = 2;
[a,b]=[b,a]

4）按位异或^
这里用到了异或这个位运算的性质，即相同则为 0，不同则为 1
对于两个数字，a 和 b。则有 a ^ a ^ b 就等于 b 。我们可以利用这个性质来完成交换。
let a = 1,b = 2;
b = a ^ b;
a = a ^ b; // a = a ^ a ^ b
b = a ^ b; // b = a ^ b ^ b

过程解释：
a = 1 -> 01
b = 2 -> 10
a ^ a -> 01 ^ 01 -> 肯定是00，因为相同为0
a ^ a ^ b -> 00 ^ 10 -> 还是 10 -> b
a ^ b ^ b->
    ①过程：01 ^ 10 ^ 10 -> 11 ^ 10 -> 01 -> a
    ②其实这里涉及到离散数学的异或运算性质：交换律：a ^ b ^ c  <=> a ^ c ^ b
  还有其它性质：任何数于0异或为任何数 0 ^ n => n，相同的数异或为0: n ^ n => 0

5）逗号表达式
逗号表达式是将两个及其以上的式子联接起来，从左往右逐个计算表达式，整个表达式的值为最后一个表达式的值。
利用这个性质，先完成一次赋值操作，然后将赋值操作的返回值变为0. 就可以完成赋值操作
let a = 1,b = 2;
a = b + ((b=a),0);
*/