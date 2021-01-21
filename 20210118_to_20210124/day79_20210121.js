console.log(null == 0);
console.log(null <= 0);
console.log(null < 0);

/*
false true false
null不等于0，也不是0
null只等于undefined，剩下他俩和谁都不等
关系运算符，再设计上总是需要运算元尝试转为一个Number,而相等运算符在设计上，就没有这方面的考虑
所以null<=0或者>=0的时候会触发Number(null)，会被是为0，(Number(null)==0)是true
*/