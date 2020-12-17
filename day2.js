// day 2
function side(arr) {
    arr[0] = arr[2]
}

function a(a, b, c = 3) {
    {
        console.log(arguments)
        side(arguments);
    }
    console.log(a, b, c)
    return a + b + c
}

console.log(a(1, 1, 3))

/*
答案是12，因为用了es6的写法，c=3有默认值，整个arguments形成了块级作用域
因此参数arguments实际上是收到保护的，所以传进去side函数的时候
c是没有变化的，还是1，实际上，整个arguments都没有变化的
*/