const debounce = (fn, delay) => {
    // 介绍防抖函数原理，并实现
    // your code
    // 触发后delay秒后执行，再次点击，重新计时
    // 场景：
    // 按钮提交场景
    // 服务端验证场景
    let timer = null
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}
const throttle = (fn, delay = 500) => {
    // 介绍节流函数原理，并实现
    // your code
    // 规定时间内只执行一次函数
    // 适用场景:
    // 拖拽场景，防止超高频次触发位置变动
    // 缩放场景，监控浏览器resize
    // 动画场景，避免短时间内多次触发动画引起性能问题
    let flag = true
    return (...args) => {
        // 倒数ing，不执行
        if (!flag) return;
        else {
            flag = false
            setTimeout(() => {
                fn.apply(this, args);
                // 没有计数了，可以开始倒数执行
                flag = true
            }, delay);
        }
    }
}