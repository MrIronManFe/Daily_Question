/*
Promise.all中任何一个Promise出现错误的时候都会执行reject,导致其他正常返回的数据也无法使用。你有什么解决办法
*/

/*
1.在单个的catch中对失败的promise请求处理
*/
var p1 = Promise.resolve(3).catch(function(err) {
    return err;
});
var p2 = Promise.reject(2).catch(function(err) {
    return err;
});
var p3 = new Promise((resolve, reject) => {
    reject('testing')
    setTimeout(resolve, 100, "foo");
}).catch(function(err) {
    return err;
});

Promise.all([p1, p2, p3]).then(values => {
    console.log(values); // [3, 2, "foo"]
}).catch(function(err) {
    console.log(1); //不会走到这里
});
/*
2.把reject操作换成resolve(new Error('自定义的error'))
*/
// new Promise.reject()
/*
3.引入promise。allSettled
*/
const promises = [
    fetch('/api1'),
    fetch('/api2'),
    fetch('/api3'),
];

Promise.allSettled(promises).
then((results) => results.forEach((result) => console.log(result.status)));
// "fulfilled"
// "fulfilled"
// "rejected"

// 4.安装第三方库promise-transaction
// 它是promise事物实现 不仅仅能处理错误还能回滚
import Transaction from 'promise-transaction';
const t = new Transaction([{
        name: 'seed',
        perform: () => Promise.resolve(3),
        rollback: () => false,
        retries: 1, // optionally you can define how many retries you like to run if initial attemp fails for this step
    },
    {
        name: 'square',
        perform: (context) => {
            return Promise.resolve(context.data.seed * context.data.seed);
        },
        rollback: () => false,
    },
]);

return t.process().then((result) => {
    console.log(result); // should be value of 9 = 3 x 3
});