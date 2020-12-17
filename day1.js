// day 1
console.log(1)

setTimeout(() => {
    console.log(2)
    process.nextTick(() => {
        console.log(3)
    })
    new Promise((resolve) => {
        console.log(4)
        resolve()
    }).then(() => {
        console.log(5)
    })
})

new Promise((resolve) => {
    console.log(7);
    resolve()
}).then(() => {
    console.log(8)
})

process.nextTick(() => {
    console.log(6)
})

setTimeout(() => {
    console.log(9)
    process.nextTick(() => {
        console.log(10)
    })
    new Promise((resolve) => {
        console.log(11);
        resolve()
    }).then(() => {
        console.log(12)
    })
})

// 先执行同步代码，1->第一个setTimeout放到队列，promise里面的7->第二个setTimeout放到队列->nextTick下一个循坏开始6->异步8->第一个setTimeout同步2->promise4->下一个循环3->异步5->第二个settimout同步9->promise11->nextTick->10->异步12