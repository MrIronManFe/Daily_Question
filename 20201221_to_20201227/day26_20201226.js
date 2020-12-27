const value = 'Value is' + !!Number(['0']) ? 'yideng' : 'undefined';
console.log(value);

console.log(Number(['0']))

/*
yideng;
+运算符优先级大于？
所以题目是value is false?yideng:undeifined
那肯定是yideng
*/