let yd = { x: 1, y: 2 };
// 以下两段代码会抛出异常吗？
let ydWithXGetter1 = {
    ...yd,
    get x() {
        throw new Error();
    },
};

let ydWithXGetter2 = {
    ...yd,
    ... {
        get x() {
            throw new Error();
        },
    },
};

/*
ydWithXGetter1 不会报错
ydWithXGetter2 会
*/

/*
ydWithXGetter1相当于:
let ydWithXGetter1={}
Object.assign(ydWithXGetter,yd)
Object.defineProperty(ydWithXGetter."x",{
    get(){
        throw new Error();
    },
    enumerable:true,
    configurable:true
})

ydWithXGetter2前面没有问题，当结构... {
        get x() {
            throw new Error();
        },
    }
实际上是需要读取一个属性的，然后回去对象的[[get]]查找是否有该属性名,此时触发了get x()方法

*/