const arrLike = {
    length: 4,
    0: 0,
    1: 1,
    '-1': 2,
    3: 3,
    4: 4,
}
console.log(Array.from(arrLike)); //[0,1,null,3]
console.log(Array.prototype.slice.call(arrLike)); //0,1,null,3

/*
[0,1,undefined,3]
[0,1,empty,3]
*/

/*
解析
1.类数组是一个拥有length属性，并且他属性为非负整数的普通对象，类数组不能直接调用数组方法
2.类数组转换为数组的方式
    1/Array.from()
    2/Array.prototype.slice.call();返回一个数组浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
    3/Array.prototype.forEach()，进行属性遍历并且组成新的数组
3.转换须知
    1.转换后的数组长度由length属性确定。索引不连续时转换结果式连续的，会自动补位。
    2.仅考虑0或者正整数的索引
    3.使用slice转化产生稀疏数组
4.扩展
稀疏数组式说的是索引不连续，数组长度大于元素个数的数组，通俗地说就是有空隙地数组。
    1.var a = new Array(5)=>[empty*5],empty不是js的基础数据类型,a[0]=>undefined
    2.
    b=[undefined,undefined,undefined,undefined]
    empty和undefined不是同一个含义,遍历数组a,因为数组里面没有任何元素，所以不会有log输出,但是b有undefined，所以会打印出来.所以b其实是一个密集数组，js发现确实元素时会赋值undefined
    3.稀疏数组访问速度慢，内存利用率高
    4.v8访问对象有两种模式，字典和快速
        1/稀疏数组使用的是字典模式，也叫散列表模式。每次访问时都需要计算哈希值（计算一次然后被缓存）和寻址，所以访问速度非常慢。另外内存空间是不连续的，所以比较节省内存空间
        2/密集数组在内存空间是被存储在一个连续的类数组里，引擎可以直接通过数组索引访问到数组元素，所以速度会非常快
*/