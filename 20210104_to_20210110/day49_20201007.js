// 请你完成一个safeGet函数，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined，例如
var data = { a: { b: { c: 'yideng' } } }
    // 参考答案
const safeGet = (o, path) => {
    try {
        return path.split('.').reduce((o, k) => o[k], o)
    } catch (e) {
        return undefined;
    }
}
console.log(safeGet(data, 'a.b.c')) // => yideng
console.log(safeGet(data, 'a.b.c.d')) // => undefined
console.log(safeGet(data, 'a.b.c.d.e.f.g')) // => undefined

// function safeGet(obj, name) {
//     let name_arr = name.split('.')
//     for (let index = 0; index < name_arr.length; index++) {
//         const key = name_arr[index];
//         if (!obj[key]) {
//             return undefined
//         } else {
//             obj = obj[key]
//         }
//     }
//     return obj
// }