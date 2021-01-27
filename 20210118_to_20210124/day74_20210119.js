var arr1 = "ab".split(''); //=>[a,b]
var arr2 = arr1.reverse(); //=>[b,a]
var arr3 = "abc".split(''); //=>[a,b,c]
arr2.push(arr3); //=>[b,a,[a,b,c]]
console.log(arr1.length); //=>3,arr2和arr1是同一个引用
console.log(arr1.slice(-1)); //=>[a,b,c]
console.log(arr2.length); //=>3
console.log(arr2.slice(-1)); //=>[a,b,c]

/*
// 答案
3 ["a","b","c"] 3 ["a","b","c"]

//解析
这个题其实主要就是考察的reverse会返回该数组的引用，但是容易被迷惑，导致答错，如果知道这个点，就不会掉坑里了。

1）reverse
MDN 上对于 reverse() 的描述是酱紫的：
The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.
reverse 方法颠倒数组中元素的位置，改变了数组，并返回该数组的引用。

2）slice
slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
*/