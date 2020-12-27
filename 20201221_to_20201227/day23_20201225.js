function showCase(value) {
    switch (value) {
        case 'A':
            console.log('Case A');
            break;
        case 'B':
            console.log('Case B');
            break;
        case undefined:
            console.log('undefined');
            break;
        default:
            console.log('Do not know!');
    }
}
showCase(new String('A'));

// new String('A')是一个字符串实例了,和字符串不一样.并且switch是严格比较,就是===所以答案是Do not know
console.log(typeof new String('a'))
console.log(typeof new Number(123))
console.log(typeof new Boolean(true))
console.log(typeof 'a')
console.log(typeof 123)
console.log(typeof true)
// console.log(typeof new String())