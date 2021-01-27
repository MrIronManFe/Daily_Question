var obj = {};
var x = +obj.yideng?.name ?? '京程一灯';
console.log(x);

// NaN
/*
1.可选链式操作符(?.)省去过去判断key的麻烦.所以obj.yideng?.name返回undefined
2.+undefined强制转化Number(undefined)=NaN
3.NaN??京城一灯.=>NaN,空值合并,当左侧的表达式伟null或者undefined,返回右侧表达式的结果,否则返回左侧表达式的结果
*/