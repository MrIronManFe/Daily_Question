// 实现一个isNegtiveZero函数，只检查+0和-0，-0则返回true,+0返回false
function isNegtiveZero(num) {
    // 代码实现
    let string = String(num).splice(0, 1)
    if (string === '+') return false
    if (string === '-') return true
}

console.log(isNegtiveZero(+0))
console.log(isNegtiveZero(-0))

/*// 答案与解析
在 JavaScript 中, Number 是一种 定义为 64位双精度浮点型（double-precision 64-bit floating point format） (IEEE 754)的数字数据类型，首位是符号位，然后是52位的整数位和11位的小数位。如果符号位为1，其他各位均为0，那么这个数值会被表示成“-0”。
所以JavaScript的“0”值有两个，+0和-0。
1）解题思路
①看到+0和-0，大概想尝试把该数字通过toString()转化成字符串，在使用indexOf('-')判断是否等于0，或者charAt(0)判断是否等于-。很不幸，数值在进行toString()的时候就自动将其转为0了，所以此方法行不通。
②可以尝试另外一个思路，计算机在进行四则及与或模等数值运算时，符号本身也参与运算，JavaScript亦是如此。而使用0对一个数做加减操作对本身是无影响的，乘法虽然得到±0的结果，但是又回到了问题本身对±0的判断了，因此我们可以考虑到除法，加上数值本身有Infinity和-Infinity的区分，分别表示正无穷和负无穷。我们很容易想到使用一个数值来除以±0得到±Infinity。我们使用-1/0或1/-0都得到-Infinity的结果。
③同样的，JavaScript提供很多函数供你使用，但结果不外乎都是借助一个数值进行判断。如：Math.pow(-0, -1) === -Infinity，Math.atan2(-0, -1) === -Math.PI
2）参考答案
①实现方式一
function isNegtiveZero(num) {
  if (num !== 0) {
    throw new RangeError("The argument must be +0 or -0");
  }
  return 1 / num === -Infinity;
}
console.log(isNegtiveZero(+0));
console.log(isNegtiveZero(-0));
②实现方式2
ECMAScript2015添加了一个方法Object.is用于对两数值进行比较，可以用于比较±0
Object.is(+0, 0) === true;
Object.is(-0, 0) === false;

function isNegtiveZero(num) {
  if (num !== 0) {
    throw new RangeError("The argument must be +0 or -0");
  }
  return !Object.is(num, 0);
}
console.log(isNegtiveZero(+0));
console.log(isNegtiveZero(-0));
*/