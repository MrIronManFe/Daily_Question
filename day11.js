function f() {
    return f
}

console.log(new f() instanceof f);

/*
答案 false
a instance of b用于检测a是否b的实例
f()有返回值，生成的新对象不是f的实例，而是结果为f的函数对象，其实并不是f的一个实例
所以这题是false

*/

// let A = {
//     init: function (name) {
//         this.name = name
//     },
//     sayHi: function () {
//         console.log(this.name)
//         return `IM ${this.name} and say hello`
//     }
// }

// let B = Object.create(A)

// B.sayHiToMarry = function () {
//     console.log(this.sayHi() + 'to Marry')
// }

// let c = Object.create(B)
// let d = Object.create(B)

// c.init('c')
// c.sayHiToMarry()

// d.init('d')
// d.sayHiToMarry()