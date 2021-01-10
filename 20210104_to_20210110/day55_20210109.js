// 实现 (5).add(3).minus(2) 功能
console.log((5).add(3).minus(2)); // 6

// 答案与解析
Number.prototype.add = function (number) {
    if (typeof number !== 'number') {
        throw new Error('请输入数字～');
    }
    return this + number;
};
Number.prototype.minus = function (number) {
    if (typeof number !== 'number') {
        throw new Error('请输入数字～');
    }
    return this - number;
};
console.log((5).add(3).minus(2));

// 扩展点有意思的，JS的经典的浮点数陷阱
// 如果是这样呢？
console.log((5).add(3).minus(6.234345));  // 1.7656549999999998
/*
    参考方案：
        大数加减：直接通过 Number 原生的安全极值来进行判断，超出则直接取安全极值
      超级多位数的小数加减：取JS安全极值位数-2作为最高兼容小数位数
      JavaScript 浮点数陷阱及解法:https://github.com/camsong/blog/issues/9
*/
Number.MAX_SAFE_DIGITS = Number.MAX_SAFE_INTEGER.toString().length - 2
Number.prototype.digits = function () {
    let result = (this.valueOf().toString().split('.')[1] || '').length
    return result > Number.MAX_SAFE_DIGITS ? Number.MAX_SAFE_DIGITS : result
}
Number.prototype.add = function (i = 0) {
    if (typeof i !== 'number') {
        throw new Error('请输入正确的数字');
    }
    const v = this.valueOf();
    const thisDigits = this.digits();
    const iDigits = i.digits();
    const baseNum = Math.pow(10, Math.max(thisDigits, iDigits));
    const result = (v * baseNum + i * baseNum) / baseNum;
    if (result > 0) { return result > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : result }
    else { return result < Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : result }
}
Number.prototype.minus = function (i = 0) {
    if (typeof i !== 'number') {
        throw new Error('请输入正确的数字');
    }
    const v = this.valueOf();
    const thisDigits = this.digits();
    const iDigits = i.digits();
    const baseNum = Math.pow(10, Math.max(thisDigits, iDigits));
    const result = (v * baseNum - i * baseNum) / baseNum;
    if (result > 0) { return result > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : result }
    else { return result < Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : result }
}
console.log((5).add(3).minus(6.234345));  // 1.765655