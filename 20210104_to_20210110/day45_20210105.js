// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;

/*
// 答案
running sum.js running index.js  3

// 解析
import命令是编译阶段执行的，在代码运行之前。因此这意味着被导入的模块会先运行，而导入模块的文件会后执行。
这是CommonJS中require（）和 import之间的区别。使用 require()，可以在运行代码时根据需要加载依赖项。如果我们使用 require而不是import，则running index.js、running sum.js、 3会被依次打印。
*/