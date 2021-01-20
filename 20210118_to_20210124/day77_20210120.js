const str = '1234567890';

function formatNumber(str) {
    let str_length = str.length
    let count = 1
    let tmp_arr = []
    while (str_length--) {
        if (count % 3 === 0) {
            tmp_arr.unshift(str[str_length])
            tmp_arr.unshift(',')
        } else {
            tmp_arr.unshift(str[str_length])
        }
        count++
    }
    return tmp_arr.join('')
}
console.log(formatNumber(str)); //1,234,567,890
// 补充代码，使代码可以正确执行

//代码实现
/*
    1.普通版
    优点：比for循环，if-else判断的逻辑清晰直白一些
    缺点：太普通
*/
function formatNumber(str) {
    let arr = [],
        count = str.length;
    while (count >= 3) {
        // 将字符串3个一组存入数组
        arr.unshift(str.slice(count - 3, count));
        count -= 3;
    }
    // 如果不是3的倍数就另外追加到数组
    str.length % 3 && arr.unshift(str.slice(0, str.length % 3));
    return arr.toString();
}
console.log(formatNumber('1234567890'));

/*
    2.进阶版
    优点：JS的API玩的了如之掌
    缺点：可能没那么好懂，但是读懂之后就会发出怎么没想到的感觉
*/
function formatNumber(str) {
    //str.split('').reverse() => ["0", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}
console.log(formatNumber("1234567890"));

/*
    3.正则版
    优点：代码少，浓缩的都是精华
    缺点：需要对正则表达式的位置匹配有一个较深的认识，门槛大一点
*/
function formatNumber(str) {
    /*
        ①/\B(?=(\d{3})+(?!\d))/g：正则匹配非单词边界\B，即除了1之前的位置，其他字符之间的边界，后面必须跟着3N个数字直到字符串末尾
          ②(\d{3})+：必须是1个或多个的3个连续数字;
          ③(?!\d)：第2步中的3个数字不允许后面跟着数字;
    */
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
console.log(formatNumber("1234567890")) // 1,234,567,890

/*
    4.Api版
    优点：简单粗暴，直接调用 API
    缺点：Intl兼容性不太好，不过 toLocaleString的话 IE6 都支持
*/
// ①toLocaleString：方法返回这个数字在特定语言环境下的表示字符串，具体可看MDN描述
function formatNumber(str) {
    return Number(str).toLocaleString('en-US');
}
console.log(formatNumber("1234567890"));

// ②还可以使用IntL对象
// Intl 对象是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比，数字格式化，日期和时间格式化。Collator，NumberFormat 和 DateTimeFormat 对象的构造函数是 Intl 对象的属性。
function formatNumber(str) {
    return new Intl.NumberFormat().format(str);
}
console.log(formatNumber("1234567890"));