'use strict';

function plus(n) {
    let count = n
    return (next) => {
        count += next
    }
}
// module.exports = plus
// 测试用例如下
'use strict';
var assert = require('assert');
// var plus = require('../lib/assign-4');
describe('测试用例', function() {
    it('plus(0) === 0', function() {
        assert.equal(0, plus(0).toString())
    })
    it('plus(1)(1)(2)(3)(5) === 12', function() {
        assert.equal(12, plus(1)(1)(2)(3)(5).toString())
    })
    it('plus(1)(4)(2)(3) === 10', function() {
        assert.equal(10, plus(1)(4)(2)(3).toString())
    })
    it('plus(1,1)(2,2)(3)(4) === 13', function() {
        assert.equal(13, plus(1, 1)(2, 2)(3)(4).toString())
    })
})

/*
// 答案&解析
// !!!思路确实是闭包，toString方法最后还是会调用
参考答案：答案不唯一
"use strict";
function plus(n) {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = [].slice.call(arguments);
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function () {
    _args.push(...arguments);
    return _adder;
  };
  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b;
    });
  };
  return _adder;
}
module.exports = plus;
*/