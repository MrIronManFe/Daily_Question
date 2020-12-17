var a = [0]
if (a) {
    console.log(a == true)
} else {
    console.log(a)
}

// console.log(Boolean([0, 1]))
// console.log([0, 1] == true)
// console.log(a == true)

// let a = {}
// console.log(Boolean(a))
// console.log(Number(a))
// console.log(a === true)

/*
数组的基本类型是一个对象，所以用做if判断时候，被转化成布尔类型的，就是true了。
比较就不一样了，分3钟，
1、如果比较的是原始类型的值，就会转成数字再比较。这就是为啥'1'==true是true了。
2、比较的是对象和原始类型，对象会转成原始类型再比较。原始类型到了最后，还不是数字和数字比较
3、undefined和null和其他比较都是false，自己相互比较是true
*/