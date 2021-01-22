const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];
console.log(
    arr1.sort() === arr1, //true
    arr2.sort() == arr2, //true
    arr1.sort() === arr2.sort() //false
);

/*
1.sort方法返回对原始数组的引用
2.对象之间的比较，看是否引用同一个对象，所以1/2都是true
3.引用的对象不同，所以false
*/